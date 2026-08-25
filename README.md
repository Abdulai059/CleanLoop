# CleanLoop 🌱

> A digital circular-economy platform designed to reduce single-use plastic waste through household participation, schools, recovery operations, rewards, and recycling partnerships.

CleanLoop is a Ghana-focused environmental and WASH platform that helps communities reduce single-use plastic waste by connecting **households, schools, students, recovery agents, recycling partners, and administrators** through one digital system.

The platform turns plastic recovery into measurable participation and rewards users for contributing to a cleaner environment.

---

## 🚧 Project Status

**Current status:** Active development — MVP

CleanLoop is currently being built as a **React Native mobile application** with a Node.js/Express backend and PostgreSQL database.

### Currently being implemented

* Authentication
* User onboarding
* Ghana location hierarchy
* Household registration
* Household membership
* Offline-first mobile architecture
* Plastic recovery workflows

### Planned

* Recovery verification
* CleanPoints wallet
* Rewards
* School competitions
* Campaigns
* Recycler marketplace
* Notifications
* Analytics
* Administration dashboard
* Environmental impact reporting

> The project is intentionally being developed incrementally. Features are implemented as complete vertical slices rather than building the entire frontend or backend independently.

---

# 1. Problem

Single-use plastic waste is a major environmental and sanitation challenge in Ghana.

Plastic waste can:

* Block drainage systems.
* Contribute to flooding.
* Pollute communities and water bodies.
* Create unhealthy environmental conditions.
* Enter food and water systems as microplastics.
* Increase pressure on already limited waste-management infrastructure.
* Reduce the potential for recovering valuable recyclable materials.

Traditional waste-management systems often focus on collection after waste has already been generated.

CleanLoop takes a different approach:

> **Create incentives for people to prevent, recover, sort, and properly channel plastic waste into the recycling ecosystem.**

---

# 2. Solution

CleanLoop creates a digital ecosystem where participants can:

1. Register.
2. Join or create a household.
3. Participate in plastic recovery activities.
4. Submit recovered materials.
5. Have recoveries verified.
6. Earn CleanPoints.
7. Redeem eligible rewards.
8. Participate in community and school competitions.
9. Connect recovered materials to recycling partners.
10. Track environmental impact.

The platform creates a feedback loop:

```text
Plastic Waste
      ↓
Community Participation
      ↓
Recovery
      ↓
Verification
      ↓
CleanPoints
      ↓
Rewards
      ↓
More Participation
      ↓
More Plastic Recovered
      ↓
Recycling
```

---

# 3. Core Users

CleanLoop is designed around several user groups.

## Household

Households are one of the primary participants.

They can:

* Create a household.
* Add household members.
* Participate in recovery activities.
* Submit recoveries.
* Track CleanPoints.
* View recovery history.
* Redeem rewards.
* Participate in campaigns.

---

## Student

Students participate through schools and environmental activities.

They can:

* Join their school.
* Participate in recovery activities.
* Earn points.
* Participate in school competitions.
* View school rankings.
* Track personal contribution.

---

## Teacher

Teachers coordinate school participation.

They can:

* Manage school participation.
* Register students.
* Monitor activities.
* View school performance.
* Participate in competitions.
* Track environmental impact.

---

## Recovery Agent

Recovery Agents are responsible for physical recovery operations.

They can:

* View assigned recovery activities.
* Record recovered materials.
* Capture weights.
* Capture evidence.
* Verify recoveries.
* Submit recovery records.
* Work offline and synchronize when connectivity returns.

---

## Recycler

Recycling partners receive recovered materials.

They can eventually:

* View available recyclable inventory.
* Create purchase requests.
* Schedule collections.
* Confirm collected materials.
* Track transactions.

---

## Administrator

Administrators manage the platform.

They can:

* Manage users.
* Manage communities.
* Manage schools.
* Manage recovery hubs.
* Manage materials.
* Manage rewards.
* Manage campaigns.
* Monitor recoveries.
* Monitor inventory.
* View reports.
* Manage platform configuration.

---

# 4. Product Architecture

CleanLoop consists of three major applications.

```text
                    CleanLoop Platform
                           │
             ┌─────────────┴─────────────┐
             │                           │
       Mobile Application          Administration
        React Native                 Dashboard
             │                           │
             └─────────────┬─────────────┘
                           │
                    REST API
                           │
                  Node.js + Express
                           │
                  Application Services
                           │
                     Prisma ORM
                           │
                     PostgreSQL
                           │
              ┌────────────┴────────────┐
              │                         │
            Redis                 External Services
              │
          Job Queues
```

---

# 5. Technology Stack

## Mobile

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| React Native     | Mobile application                |
| Expo             | React Native development platform |
| TypeScript       | Type safety                       |
| React Navigation | Navigation                        |
| TanStack Query   | Server state and API caching      |
| Zustand          | Local application state           |
| React Hook Form  | Form management                   |
| Zod              | Validation                        |
| Axios            | API communication                 |
| SQLite           | Offline local database            |
| MMKV             | Fast local storage                |

---

## Backend

| Technology | Purpose                          |
| ---------- | -------------------------------- |
| Node.js    | Runtime                          |
| Express    | HTTP API                         |
| TypeScript | Type safety                      |
| Prisma     | ORM                              |
| PostgreSQL | Primary database                 |
| Zod        | Request validation               |
| JWT        | Authentication                   |
| Argon2     | Password hashing                 |
| Redis      | Queue and caching infrastructure |
| BullMQ     | Background jobs                  |
| Pino       | Logging                          |
| Vitest     | Testing                          |
| Supertest  | API testing                      |

---

## Planned Administration Dashboard

The administration platform will be built as a separate web application.

It will provide:

* Operational monitoring
* User management
* Recovery management
* School management
* Campaign management
* Reward management
* Inventory management
* Reporting
* Analytics
* Platform configuration

---

# 6. Repository Structure

The repository is organized around the three major platform components.

```text
cleanloop/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── modules/
│   │   ├── shared/
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── migrations/
│   │   └── seed.ts
│   │
│   ├── tests/
│   ├── package.json
│   └── tsconfig.json
│
├── mobile/
│   ├── src/
│   │   ├── app/
│   │   ├── navigation/
│   │   ├── features/
│   │   ├── shared/
│   │   ├── services/
│   │   └── types/
│   │
│   ├── assets/
│   ├── app.json
│   └── package.json
│
├── admin/
│   └── ...
│
├── docs/
│   ├── PRD.md
│   ├── architecture.md
│   ├── database.md
│   └── api.md
│
├── .github/
│   └── workflows/
│
├── .gitignore
├── README.md
└── LICENSE
```

---

# 7. Backend Architecture

The backend follows a modular architecture.

```text
Request
   ↓
Route
   ↓
Middleware
   ↓
Controller
   ↓
Service
   ↓
Prisma
   ↓
PostgreSQL
```

### Controller

Responsible for:

* Receiving HTTP requests.
* Reading request parameters.
* Calling services.
* Returning HTTP responses.

Controllers should remain thin.

### Service

Responsible for:

* Business logic.
* Validation of business rules.
* Transactions.
* Coordination between domains.

### Prisma

Responsible for:

* Database access.
* Queries.
* Transactions.
* Relationships.

---

# 8. Backend Module Structure

Each business domain should have its own module.

```text
modules/
│
├── auth/
├── locations/
├── households/
├── recoveries/
├── wallet/
├── rewards/
├── schools/
├── competitions/
├── campaigns/
├── recyclers/
├── inventory/
├── notifications/
└── reports/
```

Each module should generally contain:

```text
module/
├── controller.ts
├── service.ts
├── routes.ts
├── schema.ts
├── types.ts
└── index.ts
```

Additional files may be introduced when a domain becomes more complex.

---

# 9. Current Authentication Flow

Authentication is intentionally simple for the MVP.

```text
Register
   ↓
Login
   ↓
JWT
   ↓
Authenticated Request
   ↓
Protected API
```

Current core endpoints:

```http
POST /auth/register
POST /auth/login
GET  /auth/me
POST /auth/logout
```

Authentication is kept deliberately small during MVP development.

Additional functionality such as:

* OTP verification
* Password reset
* Advanced session management
* Social authentication
* Additional identity verification

can be introduced later without blocking the core product.

---

# 10. Current Location Architecture

CleanLoop uses a hierarchical Ghana location structure.

```text
Region
   ↓
District
   ↓
Community
```

The mobile application does not hardcode locations.

Instead, it retrieves them from the backend.

```http
GET /locations/regions

GET /locations/regions/:regionId/districts

GET /locations/districts/:districtId/communities
```

This allows location data to be maintained centrally.

---

# 11. Household Architecture

A household belongs to a community.

```text
Region
   ↓
District
   ↓
Community
   ↓
Household
   ↓
Household Members
```

The authenticated user who creates the household automatically becomes the household head.

The application should never trust a client-provided `userId` for household ownership.

The backend obtains the authenticated identity from the JWT.

---

# 12. Household API

Current household endpoints:

```http
POST   /households
GET    /households/me
PATCH  /households/me
POST   /households/me/members
DELETE /households/me/members/:userId
```

The household creation workflow is:

```text
Authenticated User
        ↓
Select Community
        ↓
Create Household
        ↓
Create Household Member
        ↓
Assign HEAD role
        ↓
Return Household
```

The household creation operation should execute inside a database transaction.

---

# 13. Core Recovery Flow

Recovery is the central business process of CleanLoop.

The planned flow is:

```text
Plastic Recovered
       ↓
Recovery Recorded
       ↓
Materials Selected
       ↓
Weight Captured
       ↓
Evidence Captured
       ↓
Verification
       ↓
Recovery Confirmed
       ↓
CleanPoints Calculated
       ↓
Wallet Credited
       ↓
User Notified
```

This flow will be implemented incrementally.

---

# 14. Offline-First Architecture

Offline functionality is a major requirement for CleanLoop because recovery operations may happen in locations with unreliable connectivity.

The mobile application should not assume continuous internet access.

When offline:

```text
User Action
    ↓
Local SQLite
    ↓
Pending Sync
```

When connectivity returns:

```text
Internet Available
       ↓
Sync Queue
       ↓
Backend
       ↓
Success
       ↓
Mark Local Record Synced
```

The application should clearly communicate synchronization status.

Example:

```text
✓ Synced

⟳ Syncing...

⚠ Waiting for connection

✕ Sync failed
```

---

# 15. CleanPoints

CleanPoints are the platform's internal reward points.

Points should never be changed directly by the mobile client.

Instead:

```text
Verified Recovery
       ↓
Point Calculation
       ↓
Wallet Transaction
       ↓
Wallet Balance
```

The wallet should use a transaction-based ledger rather than allowing arbitrary balance modifications.

---

# 16. School Competition

Schools are an important part of CleanLoop.

Schools can participate in environmental competitions where students contribute to verified recovery activities.

Example:

```text
School A
   ↓
Students
   ↓
Plastic Recovery
   ↓
Verified Points
   ↓
School Score
```

The leaderboard can compare:

* Total plastic recovered.
* Total CleanPoints.
* Participation rate.
* Number of active students.
* Campaign performance.

Competition rules should be defined before a competition starts and remain stable for the duration of that competition.

---

# 17. Recycler Marketplace

The future marketplace connects recovered inventory to recycling partners.

```text
Recovery
    ↓
Verification
    ↓
Inventory
    ↓
Recycler
    ↓
Purchase Order
    ↓
Collection
    ↓
Inventory Reduced
```

This creates the connection between community recovery and the recycling economy.

---

# 18. Development Philosophy

CleanLoop is being built using a **vertical-slice development approach**.

Instead of building the entire backend first and the entire mobile application later, each major feature should be completed end-to-end.

Example:

```text
Database
   ↓
Backend
   ↓
API
   ↓
React Native
   ↓
Testing
   ↓
Complete Feature
```

This allows the team to continuously produce working software.

---

# 19. MVP Development Order

The current development roadmap is:

```text
1. Foundation
       ↓
2. Authentication
       ↓
3. Location
       ↓
4. Household
       ↓
5. Recovery
       ↓
6. Verification
       ↓
7. CleanPoints / Wallet
       ↓
8. Rewards
       ↓
9. Schools
       ↓
10. Competitions
       ↓
11. Campaigns
       ↓
12. Recycler Marketplace
       ↓
13. Notifications
       ↓
14. Administration
       ↓
15. Reporting & Analytics
```

The team should avoid implementing future modules before the current vertical slice is stable.

---

# 20. Current Development Milestone

The project has already completed:

* Authentication routes.
* Authentication controllers.
* Location controller.

The immediate objective is:

```text
Authentication
     ↓
Location
     ↓
Household
     ↓
React Native Onboarding
     ↓
Home
```

The next major milestone is the **Recovery module**.

---

# 21. Local Development

## Requirements

Install:

* Node.js
* npm
* PostgreSQL
* Git
* Expo CLI / Expo tooling
* Android Studio for Android development

Redis will be required when background jobs are introduced.

---

# 22. Backend Setup

```bash
cd backend
npm install
```

Create:

```text
.env
```

Example:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/cleanloop"

JWT_SECRET="your-development-secret"

PORT=5000
NODE_ENV=development
```

Never commit `.env`.

---

## Prisma

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Seed the database:

```bash
npx prisma db seed
```

---

## Start Backend

```bash
npm run dev
```

The API should start on the configured development port.

---

# 23. Mobile Setup

```bash
cd mobile
npm install
```

Start Expo:

```bash
npx expo start
```

Then run on:

* Android emulator
* Physical Android device
* iOS simulator where supported

---

# 24. Environment Variables

Never commit secrets to Git.

Use:

```text
.env
.env.local
```

and commit only:

```text
.env.example
```

Example:

```env
API_URL=http://localhost:5000
```

Environment variables must be validated during application startup.

---

# 25. Git Workflow

Use feature branches.

Example:

```bash
git checkout -b feature/household
```

Make focused commits.

Example:

```bash
git commit -m "feat(household): add household creation"
```

Recommended commit prefixes:

```text
feat:
fix:
refactor:
test:
docs:
chore:
```

Avoid large commits containing unrelated changes.

---

# 26. Testing Strategy

Every business module should eventually contain:

### Unit Tests

Test business logic independently.

### Integration Tests

Test services against the database.

### API Tests

Test HTTP endpoints.

### Mobile Tests

Test critical user flows.

Critical workflows must have automated regression tests before being considered complete.

---

# 27. API Design Principles

All APIs should:

* Validate input.
* Authenticate protected requests.
* Authorize privileged operations.
* Return consistent responses.
* Use meaningful HTTP status codes.
* Never expose passwords or secrets.
* Handle errors centrally.
* Log unexpected server errors.

Example success response:

```json
{
  "success": true,
  "data": {}
}
```

Example error:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request"
  }
}
```

---

# 28. Database Principles

PostgreSQL is the system of record.

Important rules:

* Use foreign keys.
* Use appropriate indexes.
* Use unique constraints where required.
* Use transactions for multi-step business operations.
* Never trust client-side calculations for financial/reward values.
* Avoid deleting important historical transactions.
* Preserve auditability.

---

# 29. Security Principles

CleanLoop follows:

* Least privilege.
* Secure authentication.
* Password hashing.
* JWT-based authentication.
* Input validation.
* Authorization checks.
* HTTPS in production.
* Secure secret management.
* Audit logging.
* Rate limiting.
* Database constraints.

Never commit:

```text
.env
API keys
JWT secrets
Database passwords
Private credentials
```

---

# 30. Data Ownership

The backend is authoritative for:

* User identity.
* Household membership.
* Recovery verification.
* CleanPoints.
* Wallet transactions.
* Reward redemption.
* Inventory.
* Competition scores.

The mobile application may cache data locally but must not become the authoritative source for these values.

---

# 31. Error Handling Philosophy

Errors should be predictable.

The backend should distinguish between:

### Validation Errors

Example:

```text
Invalid weight
```

### Authentication Errors

```text
Invalid credentials
```

### Authorization Errors

```text
User does not have permission
```

### Business Errors

```text
Household already exists
```

### Not Found

```text
Community not found
```

### System Errors

```text
Unexpected server error
```

Internal implementation details should never be exposed to users.

---

# 32. Observability

The platform will eventually monitor:

* API latency.
* Error rate.
* Database performance.
* Queue size.
* Failed jobs.
* Recovery volume.
* Wallet transactions.
* Synchronization failures.
* Mobile crashes.

Operational logs should contain enough context to diagnose problems without exposing sensitive information.

---

# 33. Documentation

Important engineering documentation lives in:

```text
docs/
├── PRD.md
├── architecture.md
├── database.md
├── api.md
└── development.md
```

Documentation should evolve with the implementation.

The README explains **what the project is and how to run it**.

Detailed architecture documentation explains **how the system works**.

---

# 34. Contributing

Before contributing:

1. Create a feature branch.
2. Understand the relevant module.
3. Follow existing architecture.
4. Add validation.
5. Add tests for important business logic.
6. Run linting.
7. Run tests.
8. Create a focused pull request.

Avoid introducing new libraries unless there is a clear technical reason.

---

# 35. Definition of Done

A feature is not considered complete simply because the screen works.

A feature is complete when:

```text
Database
   ✓
Backend Service
   ✓
Controller
   ✓
API
   ✓
Validation
   ✓
Authorization
   ✓
Mobile UI
   ✓
Error Handling
   ✓
Offline Behavior (where applicable)
   ✓
Tests
   ✓
Documentation
   ✓
```

---

# 36. Long-Term Vision

CleanLoop is designed to evolve from an MVP into a broader digital circular-economy platform.

Future capabilities may include:

* Advanced recycling marketplace.
* Digital collection centers.
* More sophisticated incentive systems.
* Corporate sustainability programs.
* Municipal partnerships.
* Environmental impact measurement.
* Carbon and plastic recovery reporting.
* Expanded school programs.
* USSD access.
* Advanced analytics.
* AI-assisted waste classification.
* Geographic recovery optimization.

These capabilities should not complicate the MVP.

The MVP should first prove:

> **People will participate in plastic recovery when the process is convenient, measurable, and rewarding.**

---

# 37. Product Success Metrics

The platform should eventually measure:

### Participation

* Registered households.
* Active households.
* Registered schools.
* Active students.
* Active recovery agents.

### Recovery

* Kilograms of plastic recovered.
* Recovery events.
* Recovery frequency.
* Recovery by material type.

### Engagement

* Monthly active users.
* Repeat participants.
* Campaign participation.
* School participation.

### Rewards

* CleanPoints issued.
* CleanPoints redeemed.
* Reward redemption rate.

### Circular Economy

* Material transferred to recyclers.
* Recycler participation.
* Inventory turnover.
* Recovery-to-recycling conversion.

### Environmental Impact

* Plastic diverted from unmanaged waste streams.
* Estimated environmental impact.
* Community participation improvement.

---

# 38. Final Development Principle

CleanLoop should remain simple at the beginning.

The engineering team should prioritize:

```text
Working
   ↓
Correct
   ↓
Tested
   ↓
Reliable
   ↓
Scalable
```

rather than:

```text
Complex
   ↓
Over-engineered
   ↓
Difficult to maintain
```

The objective of the MVP is not to build every feature described in the long-term vision.

The objective is to build a **reliable end-to-end system** that proves the core CleanLoop model.

---

## 🚀 Current Next Step

The next implementation target is:

```text
AUTHENTICATION ✅

LOCATION ✅

HOUSEHOLD 🚧
    ↓
CREATE HOUSEHOLD
    ↓
ADD HOUSEHOLD MEMBER
    ↓
VIEW HOUSEHOLD
    ↓
UPDATE HOUSEHOLD
    ↓
REACT NATIVE ONBOARDING
    ↓
HOME
    ↓
RECOVERY
```

Once the Household flow is complete, development moves directly into the **Recovery module**, which is the core operational workflow of CleanLoop.
