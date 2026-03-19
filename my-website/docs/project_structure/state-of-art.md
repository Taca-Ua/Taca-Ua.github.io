# State of Art

This document presents a comparative analysis between existing solutions and the Taça UA platform.

---

## Comparison Table

| Criterion | FADU | Sportlyzer | Taça UA (Current) | Taça UA (Project) |
|-----------|------|------------|-------------------|-------------------|
| **Tournament/Sport Management** | YES | NO | PARTIAL (Excel + Google Forms) | YES |
| **Core Management** | NO | NO | MANUAL (Via Representative) | YES |
| **Administrative Hierarchy** | NO | NO | INFORMAL MANAGEMENT | YES |
| **Game Scheduling** | YES | YES | MANUAL | YES |
| **Result Registration** | YES | NO | MANUAL (Social Media) | YES |
| **Automatic Scoring per Sport** | NO | NO | EXCEL | YES |
| **Inter-Sport General Ranking** | NO | NO | EXCEL | YES |
| **Athlete Registration** | YES | YES | FORMS | YES |
| **Member Validation** | NO | NO | MANUAL | YES |
| **Game Sheets (PDF)** | NO | NO | MANUALLY CREATED | YES |
| **Multi-Season History** | YES | NO | EXCEL | YES |
| **Public Calendar with Filters** | YES | YES | NO | YES |

---

## Analysis

### FADU
FADU provides basic tournament management and game scheduling capabilities. However, it lacks automatic scoring systems, inter-sport rankings, and membership validation features. The platform does not support hierarchical administration or PDF game sheet generation.

### Sportlyzer
Sportlyzer focuses on athlete registration and calendar management but does not offer tournament management, result registration, or any scoring/ranking capabilities. It's primarily designed for individual athlete tracking rather than comprehensive competition management.

### Taça UA (Current)
The current Taça UA system relies heavily on manual processes using Excel spreadsheets, Google Forms, and social media for communication. While functional, this approach is time-consuming, error-prone, and lacks real-time updates. Historical data is maintained in Excel, making it difficult to analyze trends or provide public access.

### Taça UA (Project)
The Taça UA platform addresses all identified gaps by providing:
- **Comprehensive Management:** Full tournament, sport, and team management with a two-tier administrative hierarchy (General Administrator + Core/Nucleo Administrator)
- **Automation:** Automatic scoring via configurable escalão (tier) point tables, ranking calculation driven by domain events, and member validation
- **Transparency:** Public calendar with filters, real-time results, and historical data access
- **Efficiency:** PDF game sheet generation, integrated file storage for regulations (MinIO), and streamlined workflows
- **Scalability:** Multi-season support with complete data preservation and event-sourced read models

The platform consolidates all competition management activities into a single integrated system built on a microservices architecture, eliminating manual processes and providing real-time information to all stakeholders.

---
