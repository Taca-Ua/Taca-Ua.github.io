# Calendar

This page contains the detailed calendar of the Taça UA informatization project, including all development phases and important milestones.

## 📋 Project Calendar

The complete project calendar is available for download:

**[Taça UA Calendar - Complete PDF](/pdf/calendario_taca_ua.pdf)**

## 📅 Schedule Overview

| Phase | Start | End | Description |
|-------|-------|-----|-------------|
| **Preparation Phase** | ... | 19/10 | Preparation of necessary resources (GitHub, Discord, meetings and role division) |
| **Project Planning** | 20/10 | 26/10 | Start of inception phase with creation of presentation, calendar and minisite |
| **1st Milestone** | 27/10 | 02/11 | Minisite deployment and preparation of first milestone deliverables |
| **Architecture and Development** | 03/11 | 09/11 | Creation of architecture, requirements, use cases, personas and definition of the tech stack |
| **Prototype Preparation** | 10/11 | 16/11 | Figma prototype development and usability testing |
| **2nd Milestone** | 17/11 | 23/11 | Results analysis, prototype improvements and start of website development |
| **Initial Development** | 24/11 | 30/11 | Start of construction phase with initial backend and frontend development |
| **Continued Development** | 01/12 | 07/12 | Frontend and backend connection and test creation |
| **Deploy + Demo** | 08/12 | 14/12 | Application deployment, load/performance testing and demo creation |
| **3rd Milestone** | 15/12 | 21/12 | Finalization with MVP release |
| **Production Prep** | 09/01 | 25/01 | Deployment setup, TLS configuration, performance testing |
| **Hardening & Auth** | 26/01 | 15/02 | Keycloak integration, security hardening, structured logging |
| **Final Delivery** | 16/02 | 19/03 | Full system integration, documentation, final presentation |

## 🏁 Second Semester Highlights

- Full Docker Compose production deployment with NGINX + TLS (Let's Encrypt)
- Keycloak authentication with custom theme and RBAC
- MinIO object storage for regulation PDFs
- Structured logging via `structlog` + Loki + Grafana
- Transactional outbox pattern for reliable RabbitMQ event delivery
- Shared internal Python packages (`taca_messaging`, `taca_logging`, `taca_models`, `taca_storage`, `taca_outbox`)

---

*For complete details of each phase, downloads and specific tasks, see the [Calendar PDF](/pdf/calendario_taca_ua.pdf).*
