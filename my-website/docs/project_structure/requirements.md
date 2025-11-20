# Requirements

This document describes the functional and non-functional requirements for the Taça UA sports management platform.

---

## Functional Requirements (FR)

### FR1 - User Management and Authentication

| ID | Description |
|----|-------------|
| FR1.1 | The system must allow authentication for General Administrator and Core Administrators. |
| FR1.2 | The system must assign access permissions according to the administrator type. |
| FR1.3 | The public can access public information without authentication. |
| FR1.4 | The General Administrator can manage Core Administrators. |

### FR2 - Competition Management (General Administrator)

| ID | Description |
|----|-------------|
| FR2.1 | The General Administrator can create, edit, and remove courses. |
| FR2.2 | The General Administrator can create/associate Core Administrators to each course. |
| FR2.3 | The General Administrator can manage and publish general regulations and specific regulations for each sport. |
| FR2.4 | The General Administrator can start and end sports seasons. |

### FR3 - Sport and Tournament Management (General Administrator)

| ID | Description |
|----|-------------|
| FR3.1 | The General Administrator can create and configure tournaments for their sport. |
| FR3.2 | The General Administrator can schedule and edit games (teams, location, date, time). |
| FR3.3 | The General Administrator can manage the sport's game calendar. |
| FR3.4 | The General Administrator can register and update game results. |
| FR3.5 | The General Administrator can define the sport's scoring system (according to regulations) for each tournament type (e.g., 140 points for 1st place in a recurring team sport of tier A). |

### FR4 - Course Team Management (Secondary Administrator - Core Administrator)

| ID | Description |
|----|-------------|
| FR4.1 | The Core Administrator can create and manage players by course. |
| FR4.2 | The Core Administrator can create and manage teams by sport. |
| FR4.3 | The Core Administrator can enroll athletes in a team including their Student ID Number. |
| FR4.4 | The platform automatically verifies if the athlete is a member, based on a list uploaded by the General Administrator. If not a member, the platform visually marks it (e.g., red dot). |

### FR5 - Transparency and Communication (Public and General)

| ID | Description |
|----|-------------|
| FR5.1 | The platform must provide a complete calendar (calendar that redirects to a page depending on the day). |
| FR5.1.1 | The public must have the option to view the calendar filtered by sport or course. |
| FR5.2 | Results must be public and updated. |
| FR5.3 | The public must be able to consult rankings by sport. |
| FR5.4 | The public must be able to consult general rankings. |
| FR5.5 | The public must be able to consult general and specific regulations. |
| FR5.6 | The public must be able to view previous results, as well as past years' rankings. |

### FR6 - Scoring System and General Ranking

| ID | Description |
|----|-------------|
| FR6.1 | The system automatically calculates course scores by sport. |
| FR6.2 | The system calculates and updates the Taça UA General Ranking. |

### FR7 - Game Management (Core Administrator)

| ID | Description |
|----|-------------|
| FR7.1 | The Core Administrator can assign players, present in relevant teams, to the game. Only these players will be eligible to participate in the specific game. |
| FR7.2 | The Core Administrator can assign an equipment number to the player. |
| FR7.3 | The Core Administrator can add comments regarding the game. |
| FR7.4 | The Core Administrator can generate the game sheet in PDF format with the information referenced in the functional requirements described above (FR7.[1\|2\|3]). |

---

## Non-Functional Requirements (NFR)

### NFR1 - Usability

| ID | Description |
|----|-------------|
| NFR1.1 | The system must present a responsive design adapted for desktop, tablet, and smartphone. |
| NFR1.2 | The interface must be intuitive and use terminology recognized by the academic community. |
| NFR1.3 | Automatic data updates, without the need for manual refresh. |
| NFR1.4 | The platform must comply with accessibility standards. |
| NFR1.5 | Navigation must require a maximum of 3 clicks to reach any main functionality. |
| NFR1.6 | There must be an efficient search system and filters for calendar, teams, and results. |

### NFR2 - Performance

| ID | Description |
|----|-------------|
| NFR2.1 | Response time must be less than 2 seconds in 95% of requests. |
| NFR2.2 | Caching techniques must be implemented to reduce load on calendar and results queries. |
| NFR2.3 | The system must support horizontal scalability to accommodate future growth. |

### NFR3 - Security

| ID | Description |
|----|-------------|
| NFR3.1 | All credentials and sensitive data must be encrypted. |
| NFR3.2 | The system must log administrative operations and critical access. |
| NFR3.3 | Access control must follow the principle of least privilege. |
| NFR3.4 | There must be protection against common attacks (SQL Injection, XSS, Bruteforce). |
| NFR3.5 | Administrative accounts must have strong authentication. |

### NFR4 - Reliability and Availability

| ID | Description |
|----|-------------|
| NFR4.1 | Minimum availability of 99.99% during the competitive period. |
| NFR4.2 | The system must perform automatic daily backups. |
| NFR4.3 | The system must avoid inconsistencies in the general ranking, ensuring referential data integrity. |

### NFR5 - Compatibility

| ID | Description |
|----|-------------|
| NFR5.1 | Compatibility with the most used browsers (Chrome, Firefox, Edge, Safari). |

### NFR6 - Maintainability and Evolution

| ID | Description |
|----|-------------|
| NFR6.1 | Code must follow clean development standards (e.g., SOLID, MVC, RESTful). |
| NFR6.2 | The system must allow continuous updates with approximately zero downtime. |
| NFR6.3 | Technical documentation must be updated with each release. |
| NFR6.4 | The system must support future inclusion of new sports and categories without the need for deep restructuring. |
| NFR6.5 | The system must provide application user manuals for non-technical administrators. |

### NFR7 - Monitoring and Auditing

| ID | Description |
|----|-------------|
| NFR7.1 | Logs must be available for auditing throughout the competition. |
| NFR7.2 | The system must issue alerts in case of service failures or critical errors. |
| NFR7.3 | The system must support performance and server load monitoring through tools like Grafana/Prometheus, including metrics such as CPU, memory, number of requests, errors, and latency. |

---

> **Note:** All requirements are measurable and verifiable through functional testing, access reviews, report exports, and real-time notification simulations.
