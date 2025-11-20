# Personas and Scenarios

This page showcases the main personas and their interaction scenarios with the Taça UA platform.

---

## Persona 1 - Michael Hondt (Student/Participant)

**Age:** 22 years  
**Course:** Chemistry  
**Role:** Taça UA Participant / Platform User  
**Motivation:** View results, schedules, rankings, and support his course  
**Frustrations:** Scattered information, late updates  
**Goals:** Quickly access schedules and results, follow course ranking

**Description:** Michael participates annually in Taça UA. He spends a lot of time checking game schedules and results for his course, but currently information is released late or on different platforms. He wants everything centralized and updated in real-time.

### Scenario P1S1 - View Course Game Calendar

**Objective:** Quickly check upcoming games for his course  
**Context:** Michael is on campus and wants to know where he's playing today

**Steps:**
1. Access the website
2. Select "Game Calendar"
3. Filter by course "Chemistry"

**Expected Result:** List of Chemistry games with date, time, and location  
**Success Criteria:** Information found in ≤ 3 clicks and < 15 seconds

### Scenario P1S2 - View General Ranking

**Objective:** See course rankings in Taça UA  
**Context:** Michael wants to see where his course stands in the general ranking

**Steps:**
1. Access the website
2. Select "General Ranking"

**Expected Result:** Table with each course's position and respective points  
**Success Criteria:** Information found in ≤ 2 clicks and < 10 seconds

---

## Persona 2 - Lahra Cough (Organization/General Administrator)

**Age:** 26 years  
**Position:** Member of AAUAv Board  
**Role:** General Administrator  
**Motivation:** Optimize competition management and communication with participants  
**Frustrations:** Dependency on Excel, forms, and external apps  
**Goals:** Manage sports, courses, teams, and regulations in one place

**Description:** Lahra is part of the Organizing Committee. Currently, she uses Excel spreadsheets and manual messages to coordinate sports and teams. She needs to manage everything digitally without losing control or time.

### Scenario GAS1 - Create Sport

**Objective:** Create Basketball to be used in registrations and calendars  
**Context:** Lahra is configuring the next Taça UA edition

**Steps:**
1. Login as General Administrator
2. Access "Sports"
3. Click "Add Sport"
4. Insert data and confirm

**Expected Result:** Sport available for general and core admins  
**Success Criteria:** Sport visible immediately in the system

### Scenario GAS2 - Create Course

**Objective:** Register a new course to participate in Taça UA  
**Context:** The organization included courses that never participated before

**Steps:**
1. Login as General Administrator
2. Access "Courses"
3. Select "Add Course"
4. Insert data and confirm

**Expected Result:** New course becomes available for course admins to create teams  
**Success Criteria:** Newly created course appears immediately in system options, without inconsistencies

### Scenario GAS3 - Assign Administrator to a Course

**Objective:** Define the person responsible for managing a course's teams  
**Context:** At the season's start, course boards provide representatives

**Steps:**
1. Login as General Administrator
2. Access "Administrators"
3. Edit Teelor
4. Select "Computer Engineering"
5. Save changes

**Expected Result:** Teelor now exclusively manages that course  
**Success Criteria:** Permissions applied correctly without improper access

### Scenario GAS4 - Create Core Administrator

**Objective:** Create a new user with low administrative permissions to support team management  
**Context:** A new person was designated to manage a course and needs system access

**Steps:**
1. Login as General Administrator
2. Access "Administrators"
3. Select "Add New Administrator"
4. Insert user data
5. Associate with responsible course
6. Save and confirm operation

**Expected Result:** User is immediately available in system with permissions restricted to assigned course  
**Success Criteria:** New administrator can login and view only functionalities and entities under their responsibility

---

## Persona 3 - Zach Daniel (General Administrator)

**Age:** 24 years  
**Position:** Member of AAUAv Administration  
**Role:** Responsible for sports (In this case Futsal)  
**Motivation:** Have control and agility in organizing calendars and results  
**Frustrations:** Delays in updating rankings and manual corrections  
**Goals:** Create tournaments, schedule games (teams/day/time/location), update results, and view automatic rankings

**Description:** Zach manages sport games and coordinates referees and teams. He needs everything to be simple, fast, and error-free, ensuring automatic rankings and immediate communication to participants.

### Scenario SMS1 - Create Tournament and Calendar

**Objective:** Schedule games and organize the Futsal tournament  
**Context:** Period of creating competitive calendar

**Steps:**
1. Login as General Administrator
2. Access "Tournaments"
3. Select "New Tournament"
4. Choose Sport
5. Add necessary rules
6. Add teams from various courses belonging to the sport
7. Create games with date and location
8. Save and confirm operation

**Expected Result:** Calendar visible to public after confirmation  
**Success Criteria:** All games registered without errors and automatically published

### Scenario SMS2 - Register Game Results

**Objective:** Update final score and reflect in ranking  
**Context:** Game ended; data needs to be published quickly

**Steps:**
1. Login as General Administrator
2. Access "Tournaments"
3. Choose tournament
4. Access "Games"
5. Select game
6. Enter result
7. Confirm publication

**Expected Result:** Result visible to public and tournament ranking adjusted  
**Success Criteria:** Update available in ≤ 30 seconds

### Scenario SMS3 - End Tournament

**Objective:** Allow General Administrator to officially finalize a tournament after the last game  
**Context:** All tournament games have concluded and results are registered

**Steps:**
1. Login as General Administrator
2. Select desired tournament from active tournaments list
3. Select "End Tournament" option
4. Confirm operation in warning message (e.g., "This action is irreversible. Do you wish to confirm?")

**Expected Result:** Tournament changes to Completed state. Final scores are automatically calculated and assigned to respective courses. Data becomes public and locked for editing (except by General Admin intervention in special cases)  
**Success Criteria:** Sport ranking is marked as final and correctly reflects results. Taça UA General Ranking is automatically updated

---

## Persona 4 - Teelor Shift (Core Administrator)

**Age:** 24 years  
**Course:** Computer Engineering  
**Role:** Course Representative  
**Motivation:** Have total control over course teams in a single system  
**Frustrations:** Confusing organization with scattered communication. Late schedule updates affecting team logistics  
**Goals:** Register course teams and organize tiers

**Description:** Teelor is responsible for enrolling male, female, and mixed teams in the official system. She needs to manage teams by sport.

### Scenario CAS1 - Create Teams by Sport

**Objective:** Register Chemistry team to compete in Futsal  
**Context:** Registration and course organization period

**Steps:**
1. Login as Core Administrator
2. Select "Teams"
3. Select "New Team"
4. Select Sport
5. Select students belonging to the team
6. Save and confirm operation

**Expected Result:** Team available for tournaments  
**Success Criteria:** Team appears for Zach in Futsal management

### Scenario CAS2 - Add Student to Course

**Objective:** Allow Core Administrator to register students in system and associate them with their course  
**Context:** Core Administrator is creating or updating teams and needs to add new students who will participate

**Steps:**
1. Login as Core Administrator
2. Select "Students"
3. Select "New Student"
4. Enter student data
5. Submit form

**Expected Result:** Student is registered in system and associated with chosen course. Student becomes available to be selected in course teams  
**Success Criteria:** Student appears in course student list and can be added to teams without errors

### Scenario CAS3 - Configure Game Team

**Objective:** Allow Core Administrator to select which students present in the team will play  
**Context:** A new game will take place and Core Administrator needs to choose which students from each team will participate

**Steps:**
1. Login as Core Administrator
2. Select "Games"
3. Select game
4. Select "Change Game Team"
5. Select students who will participate
6. (Optional) Associate equipment number
7. Save and confirm operation

**Expected Result:** Students are successfully associated with the game  
**Success Criteria:** It's possible to see students associated with the game in question

### Scenario CAS4 - Download Game Sheet

**Objective:** Allow Core Administrator to download a PDF of their team's game sheet  
**Context:** A new game will take place and Core Administrator needs to generate the game sheet to provide to the desk

**Steps:**
1. Login as Core Administrator
2. Select "Games"
3. Select game
4. Select "Download Game Sheet"
5. Accept download from computer

**Expected Result:** Sheet is generated and downloaded to Core Administrator's computer, being printable  
**Success Criteria:** Sheet is found on Core Administrator's computer disk

---

## Persona 5 - Clara Almeida (Fan/Non-Participating Student)

**Age:** 19 years  
**Course:** Mechanical Engineering  
**Role:** Public User  
**Motivation:** Support her course, see games she wants to attend  
**Frustrations:** Difficult to find updated schedules or game locations  
**Goals:** Quickly check what's happening

**Description:** Doesn't directly participate in teams, but likes to follow games with friends and support her course. Wants an easy-to-use platform with quickly visible information.

### Scenario P2S1 - View Day's Games

**Objective:** Discover which games she can watch today  
**Context:** Clara is available to watch a game today and wants to see the most interesting ones

**Steps:**
1. Access website
2. Click "Calendars"
3. Choose current day

**Expected Result:** List of games organized by sport, time, and location  
**Success Criteria:** Content presented clearly and quickly interpretable

---