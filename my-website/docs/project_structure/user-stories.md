# User Stories

This document contains all user stories organized by functional area.

---

## Authentication and User Management

### US1.1 - Administrator Authentication

**As a General Administrator, I want to authenticate on the platform, to manage competitions and configurations securely.**

**Acceptance Criteria:**
- The system must require and validate email/username and password
- User only accesses administrative area after successful login
- The system must display appropriate message in case of error
- Sessions must automatically expire after defined period of inactivity

### US1.2 - Permission Management

**As a General Administrator, I want to assign different access permissions to each administrator type, to ensure control and security.**

**Acceptance Criteria:**
- Core Administrators only access entities related to their course
- General Administrators have global access to all functionalities
- The system blocks any attempt at improper access
- Permission changes take effect immediately

### US1.3 - Public Access

**As a public user, I want to access public information without authentication, to consult results, rankings, and calendars.**

**Acceptance Criteria:**
- The system provides calendar, results, game information, and rankings without login
- Administrative areas remain inaccessible to the public
- Public pages load without requiring critical cookies

### US1.4 - Core Administrator Management

**As a General Administrator, I want to manage (create, edit, remove, etc.) Core Administrators, to maintain organizational control.**

**Acceptance Criteria:**
- Creating an administrator requires username, password, and associated course
- Editing must allow updating data and course permission
- Removal immediately revokes all permissions
- Administrator list must update automatically

---

## Competition Management

### US2.1 - Course Management

**As a General Administrator, I want to create, edit, and remove courses, to allow participation of new academic programs.**

**Acceptance Criteria:**
- Platform must allow creating courses by entering name and required information
- System must validate that no duplicate courses exist
- Must be possible to edit any previously created course
- Must be possible to remove courses not yet associated with teams or competitions
- All changes must be immediately reflected in the system

### US2.2 - Course Administrator Association

**As a General Administrator, I want to associate a Core Administrator to each course, to delegate local management responsibilities.**

**Acceptance Criteria:**
- System must allow selecting a user and associating them with a course
- Only users with valid profile can be assigned
- System must prevent the same user from having access to unassigned courses
- Association must be registered immediately

### US2.3 - Regulations Management

**As a General Administrator, I want to manage and publish general regulations and sport-specific regulations, to ensure transparency and uniformity.**

**Acceptance Criteria:**
- System must allow uploading and removing regulations
- Public must be able to view published regulations without authentication
- Each sport must be able to have its own regulations
- System must be able to show versions from previous years

### US2.4 - Season Management

**As a General Administrator, I want to start and end sports seasons, to define the competitive cycle of each Taça UA edition.**

**Acceptance Criteria:**
- Platform must allow starting a new season indicating the year
- Only one season can be active at a time
- When ending a season, all associated competitions must be marked as completed
- Final season data must be locked for editing

---

## Tournament and Sport Management

### US3.1 - Tournament Creation

**As a General Administrator, I want to create and configure tournaments by sport, to structure the competitive calendar.**

**Acceptance Criteria:**
- System must allow creating tournaments indicating name, sport, and rules
- Must validate that no duplicate tournaments exist for the same season
- Must allow selecting participating teams
- Tournament must become available for game creation

### US3.2 - Game Scheduling

**As a General Administrator, I want to schedule and edit games (teams, location, date, time), to manage competition logistics.**

**Acceptance Criteria:**
- System must allow creating games indicating teams, location, date, and time
- System must prevent game overlap at same location/time
- Must be possible to edit any game not yet started
- Updated calendar must become immediately available to public

### US3.3 - Calendar Management

**As a General Administrator, I want to manage the game calendar, to ensure consistent updates without schedule conflicts.**

**Acceptance Criteria:**
- Calendar must display all games organized by sport and date
- Game changes must update calendar automatically
- Must allow filtering by sport, course, or date
- Public must have permanent access to updated version

### US3.4 - Result Registration

**As a General Administrator, I want to register and update game results, to reflect rankings in real-time.**

**Acceptance Criteria:**
- System must allow entering results after game ends
- Update must recalculate sport ranking
- Results must become immediately visible to public
- Must be possible to correct results with administrative permission

### US3.5 - Scoring System Configuration

**As a General Administrator, I want to define the scoring system per tournament, to ensure correct point allocation according to regulations.**

**Acceptance Criteria:**
- System must allow configuring points by position or result
- Must support different systems for different tournaments
- Defined scoring must be automatically applied to results
- Changes to scoring system can only be made before tournament starts

---

## Team Management

### US4.1 - Player Management

**As a Core Administrator, I want to create and manage players from my course, to organize participating teams.**

**Acceptance Criteria:**
- System must allow registering players with minimum required data
- Players must be listed by course
- Must be possible to edit and remove players, except if enrolled in games
- Players must become available for team selection

### US4.2 - Team Management by Sport

**As a Core Administrator, I want to create and manage teams by sport, to organize course representation.**

**Acceptance Criteria:**
- System must allow creating teams indicating sport and members
- A team cannot be created without players
- Must be possible to edit team composition
- Team must appear available for tournaments of corresponding sport

### US4.3 - Athlete Enrollment

**As a Core Administrator, I want to enroll athletes in teams, including student ID number, to validate identity and academic registration.**

**Acceptance Criteria:**
- System must require valid student ID number
- Must prevent enrollment of same athlete in incompatible teams
- Team must immediately reflect athlete addition
- Athlete data must be validated before enrollment

### US4.4 - Membership Validation

**As a Core Administrator, I want the platform to automatically validate if the athlete is an AAUAv member, to ensure eligibility.**

**Acceptance Criteria:**
- System must compare student ID number with list uploaded by General Administrator
- Non-member athletes must be visually marked (e.g., red dot)
- Verification must occur automatically when adding or editing a player
- Administrator must easily see membership status

---

## Public Access and Transparency

### US5.1 - Calendar Consultation

**As a Public User, I want to consult the complete game calendar, to follow the competition.**

**Acceptance Criteria:**
- Calendar must show all games with date, time, location, and teams
- Must be automatically updated whenever a game changes or is added
- Must be available without login

### US5.1.1 - Calendar Filtering

**As a Public User, I want to filter the calendar by sport or course, to find what I'm looking for more easily.**

**Acceptance Criteria:**
- Must have filters by sport and course
- Filtered list must update automatically
- Filters must be combinable
- Must only show games matching criteria

### US5.2 - Real-Time Results

**As a Public User, I want to see updated results in real-time, to follow game progress.**

**Acceptance Criteria:**
- Results must be displayed immediately after publication
- Page must indicate sport, game, and final result
- Must be possible to filter by sport or course
- Old game results must remain accessible

### US5.3 - Sport Rankings

**As a Public User, I want to consult rankings by sport, to see each course's performance.**

**Acceptance Criteria:**
- Rankings must list teams ordered by score
- Must be automatically recalculated after each game
- Must be available without authentication

### US5.4 - General Ranking

**As a Public User, I want to consult the general ranking, to see the total Taça UA ranking.**

**Acceptance Criteria:**
- Must show total score aggregated by course
- Ranking must be recalculated whenever a sport ends
- Must display sum of scores by sport

### US5.5 - Regulations Access

**As a Public User, I want to access general and specific regulations, to understand competition rules.**

**Acceptance Criteria:**
- Must be possible to view general and specific regulations
- Must be able to view regulations from past years
- Must be accessible without login

### US5.6 - Historical Data

**As a Public User, I want to consult results and rankings from previous years, to compare historical performances.**

**Acceptance Criteria:**
- Must be possible to select a previous season
- Must show results, rankings, and champions from that season
- Data must be locked for editing

---

## Automatic Calculation

### US6.1 - Sport Score Calculation

**As a System, I want to automatically calculate course scores by sport, to update rankings immediately.**

**Acceptance Criteria:**
- Calculation must follow scoring system defined in tournament
- Must occur automatically after last game of sport
- Score must become available for general ranking
- Must ensure absence of duplication or sum errors

### US6.2 - General Ranking Update

**As a System, I want to automatically update the Taça UA General Ranking, to reflect global results without manual intervention.**

**Acceptance Criteria:**
- Update must aggregate scores from all sports
- Must occur whenever a sport is completed
- Must prevent inconsistencies between sports and general ranking

---

## Game Management

### US7.1 - Player Assignment to Games

**As a Core Administrator, I want to assign eligible players to games, to define teams that will compete.**

**Acceptance Criteria:**
- System must list only players registered in sport team
- Administrator must be able to select participants
- Selected players must automatically appear in game sheet
- System must prevent selecting more players than allowed

### US7.2 - Equipment Number Assignment

**As a Core Administrator, I want to assign equipment numbers to players, to ensure proper identification during the game.**

**Acceptance Criteria:**
- System must allow defining a number for each player
- Must prevent duplicate numbers within same team
- Numbers must appear in game sheet
- Must be possible to edit number before game

### US7.3 - Game Sheet Generation

**As a Core Administrator, I want to generate a game sheet in PDF, to print and deliver to the game desk.**

**Acceptance Criteria:**
- System must generate PDF containing players, numbers, team, and game data
- PDF must be downloaded locally
- Must be formatted according to organization requirements, using format provided by AAUAv

---
