# Data Model

This document describes the actual data model implemented in the Taça UA platform, derived from the SQLAlchemy models across all microservices.

---

## Database Architecture

The system uses a **single PostgreSQL instance** with **schema-level isolation** per microservice. Each service owns its schema exclusively for writes. A shared `public_read` schema serves as the read model for the Public API.

| Schema | Owner | Purpose |
|--------|-------|---------|
| `modalities` | Modalities Service | Core domain entities: nucleos, courses, sport types, teams, members |
| `matches` | Matches Service | Match lifecycle, participants, lineups, comments |
| `tournaments` | Tournaments Service | Tournament structure and competitors |
| `ranking` | Ranking Service | Scoring configuration and derived rankings |
| `public_read` | Read Model Updater | Denormalized read model consumed by the Public API |

Every service also has an `outbox_event` table in its own schema for the **transactional outbox pattern** — events are written atomically with domain changes and relayed to RabbitMQ by a background publisher.

---

## `modalities` Schema

Managed by the **Modalities Service**. This is the richest domain schema, holding the full organisational hierarchy.

### Entity Hierarchy

```
Nucleo  (sports association)
  └── Course  (academic course, e.g. LEI, MECT)
        └── Team  (per modality, per course)
              └── Student / Staff  (members)
```

### Tables

#### `nucleo`
Top-level organisational unit (e.g. "Núcleo de Engenharia").

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `name` | text | |
| `abbreviation` | text | Unique |
| `admins_ids` | text[] | Array of admin user IDs |
| `created_by` | UUID | |
| `created_at`, `updated_at` | timestamp | |

#### `course`
Academic course, always linked to a nucleo.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `name` | text | |
| `abbreviation` | text | Unique |
| `nucleo_id` | UUID FK → `nucleo.id` | |
| `created_by` | UUID | |

#### `modality_type`
Sport category (e.g. "Futsal Masculino"). Defines the scoring tier structure.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `name` | text | Unique |
| `description` | text | Optional |
| `escaloes` | JSON | Array of tier configs — each tier defines the number of participants and points awarded per finishing position |
| `is_playoff` | boolean | Whether this type uses playoff brackets |
| `created_by` | UUID | |

#### `modality`
A specific modality linked to a modality type.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `name` | text | Unique |
| `modality_type_id` | UUID FK → `modality_type.id` | |
| `created_by` | UUID | |

#### `member` (abstract base)
Single-table inheritance base for all people in the system.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `full_name` | text | |
| `member_type` | varchar(50) | Discriminator: `"student"` or `"staff"` |
| `created_by` | UUID | |

#### `student` (extends `member`)

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID FK → `member.id` | PK |
| `course_id` | UUID FK → `course.id` | |
| `student_number` | text | Unique |
| `is_member` | boolean | AAUAv membership validation flag |

#### `staff` (extends `member`)
Technical staff (coaches, managers), distinct from athletes.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID FK → `member.id` | PK |
| `staff_number` | text | Optional, unique |
| `contact` | text | Optional, unique |

#### `team`
A course's team for a specific modality.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| (FK to course and modality) | UUID | |
| `created_by` | UUID | |

---

## `matches` Schema

Managed by the **Matches Service**.

#### `match`

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `tournament_id` | UUID | FK (indirect) |
| `status` | enum | `scheduled`, `in_progress`, `finished`, `cancelled` |
| `scheduled_at` | timestamp | |
| `location` | text | |

#### `match_participant`
A team or individual entered in a match.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `match_id` | UUID FK → `match.id` | |
| `participant_type` | enum | `team` or `individual` |
| `entity_id` | UUID | Team or student ID |

#### `lineup`
Players selected for a specific match by a Core Admin.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `match_id` | UUID FK | |
| `student_id` | UUID | |
| `jersey_number` | int | Optional equipment number |

#### `comment`
Free-text notes attached to a match by Core Admins.

---

## `tournaments` Schema

Managed by the **Tournaments Service**.

#### `tournament`

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `modality_id` | UUID | |
| `name` | text | |
| `status` | enum | `draft`, `active`, `finished` |

#### `tournament_competitor`
A team (or individual) entered in a tournament.

#### `tournament_ranking_position`
Final position per competitor after tournament ends.

---

## `ranking` Schema

Managed by the **Ranking Service**. Holds scoring configuration and derived ranking tables.

#### `modality_type_escaloes`
The tier point table — core of the scoring system.

| Column | Type | Notes |
|--------|------|-------|
| `modality_type_id` | UUID | |
| `min_participants`, `max_participants` | int | Size range for this escalão (tier) |
| `points` | int[] | Points awarded per finishing position (index 0 = 1st place) |

#### Derived ranking tables

| Table | Key columns |
|---|---|
| `tournament_results` | `(tournament_id, competitor_id)` → `position` |
| `general_rankings` | `course_id` → `points` (sum across all sports) |
| `modality_rankings` | `(modality_id, course_id)` → `points` |
| `course_rankings` | `course_id` → `points` + `modality_breakdown` (int[]) |

Shadow copies of `modality_types`, `modalities`, `tournaments`, `tournament_competitors` and `courses` are maintained locally to avoid cross-schema joins.

---

## `public_read` Schema

Managed by the **Read Model Updater**, which consumes RabbitMQ events and keeps this schema in sync. This is the only schema read by the Public API.

### Core tables (mirrors of domain data)

`nucleos`, `courses`, `modality_types`, `modalities`, `students`, `staff`, `teams`, `team_players`, `tournaments`, `tournament_competitors`, `tournament_rankings`, `matches`, `match_participants`, `match_results`, `match_lineups`, `match_comments`

### Materialized views (denormalized for fast reads)

| View | Used for |
|---|---|
| `mv_team_details` | Full team info including course and nucleo |
| `mv_student_details` | Student with course, nucleo, membership status and teams |
| `mv_tournament_details` | Tournament with modality and season info |
| `mv_match_details` | Match with participants, scores and tournament context |
| `mv_tournament_standings` | Ordered standings per tournament |
| `mv_general_ranking` | Aggregated course points across all tournaments |

