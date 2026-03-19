# Architecture

This page provides a concise summary of the "Taça UA" system architecture (C4 model), extracted from the full architecture export.

<img 
	src="/img/plataform-arch-diagram-dark.svg" 
	alt="Taça UA architecture diagram" 
	style={{
		width: '100%',
		height: 'auto'
	}}
/>

## Primary actors

- **General Administrator** — manages the full competition: nucleos, courses, modality types, modalities, regulations, seasons, tournaments, matches and results.
- **Core Administrator** (Nucleo Admin) — manages their own nucleo's teams, students, staff and match lineups.
- **Public User** — unauthenticated access to matches, results, rankings, regulations and historical data.

## Key layers and components

- **Edge / Reverse Proxy**: NGINX secures and routes incoming traffic.
- **API Gateway (Competition API Gateway)**: validates JWT/OIDC tokens, emits events and generates links to object storage.
- **Microservices**: domain services (Matches, Tournament, Modalities, Ranking, Read Model Updater) responsible for business logic and persistence.
- **Frontends**: Admin dashboard (Frontend Admin) and public site (Frontend Public).
- **Storage**: A single PostgreSQL instance with schema-level isolation per microservice (`modalities`, `matches`, `tournaments`, `ranking`) plus a shared `public_read` schema of materialized views; Redis for caching; MinIO (S3-compatible object storage) for PDFs and file uploads, proxied via NGINX.
- **Event Streaming**: RabbitMQ for event-driven communication between services using the transactional outbox pattern; Dead Letter Exchanges (DLX) for failed messages.

## Core Microservices

- **Matches Service**: Manages matches, participants, lineups and comments; Emits versioned events like `match.created.v1`, `match.result.updated.v1`, `match.lineup.assigned.v1`.
- **Ranking Service**: Processes tournament results and calculates course scores using per-modality-type escalão (tier) point tables; Maintains `general_rankings`, `modality_rankings` and `course_rankings` tables.
- **Tournament Service**: Manages tournaments and their competitors; Emits events like `tournament.created.v1`, `tournament.finished.v1`.
- **Modalities Service**: The most domain-rich service — manages the full hierarchy: Nucleo → Course → ModalityType → Modality → Team → Student/Staff. Emits fine-grained events for each entity (e.g., `nucleo.created.v1`, `team.player_added.v1`, `student.created.v1`).
- **Read Model Updater**: Consumes all domain events from RabbitMQ; Upserts rows in the `public_read` schema and refreshes materialized views (`mv_team_details`, `mv_match_details`, `mv_tournament_standings`, `mv_general_ranking`, etc.).


## Observability and identity

- **Observability**: Prometheus (metrics), Grafana (dashboards) and Loki (logs).
- **Identity**: Keycloak as the identity provider and RBAC for administrative areas.

## Technology and deployment choices

- **Containerization / Orchestration**: Docker Compose for both development and production deployments.
- **Messaging**: RabbitMQ with the transactional outbox pattern — each service writes events to a local `outbox_event` table first, then a publisher relays them to RabbitMQ, ensuring at-least-once delivery.
- **Authentication**: Keycloak (OIDC / JWT) with a custom theme; role-based access control distinguishes General Administrator from Core (Nucleo) Administrator.
- **Object Storage**: MinIO (S3-compatible), accessed through the shared `taca_storage` package and exposed publicly via NGINX at `/files/`.
- **Reverse proxy and TLS**: NGINX + Certbot (Let's Encrypt TLS certificates).

## Operational patterns

- Services emit metrics and logs; centralized dashboards monitor availability and performance.
- Public reads are served from dedicated Read Models kept up-to-date by the Read Model Updater for low-latency responses.
