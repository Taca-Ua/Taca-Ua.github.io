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

- **Core Administrator** — manages teams, players and match results.
- **General Administrator** — manages sports/modalities, courses and tournaments.
- **Public User** — views matches, results, rankings and regulations.

## Key layers and components

- **Edge / Reverse Proxy**: NGINX secures and routes incoming traffic.
- **API Gateway (Competition API Gateway)**: validates JWT/OIDC tokens, emits events and generates links to object storage.
- **Microservices**: domain services (Matches, Tournament, Modalities, Ranking, Read Model Updater) responsible for business logic and persistence.
- **Frontends**: Admin dashboard (Frontend Admin) and public site (Frontend Public).
- **Storage**: Postgres for persistent state and read models; Redis for caching; CDN / Object Storage for PDFs and regulations.
- **Event Streaming**: Kafka for event-driven communication between services; Dead Letter Queues for failed messages.

## Core Microservices

- **Matches Service**: Manages matches and results; Creates and updates matches; Emits events like `MatchCreated`, `MatchUpdated`, `ResultPosted`.
- **Ranking Service**: Processes scores and overall rankings; Consumes result events to update rankings; Updates read models for the frontend.
- **Tournament Service**: Manages tournaments, stages, brackets, and journeys; Emits events related to tournament structure.
- **Modalities Service**: Manages sports/modalities, rules, and specific configurations; Provides calculation rules to other services.
- **Read Model Updater**: Consumes events from Kafka; Updates Redis for low-latency access; Guarantees cache invalidation.


## Observability and identity

- **Observability**: Prometheus (metrics), Grafana (dashboards) and Loki (logs).
- **Identity**: Keycloak as the identity provider and RBAC for administrative areas.

## Technology and deployment choices

- **Containerization / Orchestration**: Kubernetes is recommended for production microservices.
- **Messaging**: Apache Kafka for event streaming.
- **Authentication**: Keycloak (OIDC / JWT).
- **Reverse proxy and TLS**: NGINX + Certbot (for TLS certificates).

## Operational patterns

- Services emit metrics and logs; centralized dashboards monitor availability and performance.
- Public reads are served from dedicated Read Models kept up-to-date by the Read Model Updater for low-latency responses.
