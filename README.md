
# CleanLoop Backend

Backend API for **CleanLoop**, a plastic recovery and rewards platform initially focused on the Ghanaian market.

CleanLoop enables households and recovery agents to record recyclable material collections, calculate CleanPoints, manage user wallets, and redeem available rewards.

The backend is built as a REST API and serves the CleanLoop mobile application.

---

## 1. Project Overview

CleanLoop is designed around a simple recovery cycle:

```text
Collect
   ↓
Verify
   ↓
Record
   ↓
Earn Points
   ↓
Redeem Rewards
```

The backend provides the services required to support this cycle.

### Current MVP focus

The Ghana MVP focuses on:

* User authentication
* Ghanaian location management
* Household management
* Recyclable material management
* Recovery recording
* Points calculation
* Wallet management
* Rewards
* Reward redemption

School competitions, campaigns, leaderboards, notifications, and advanced administration are planned for later phases.

---

# 2. Architecture

The backend follows a layered architecture:

```text
                    Mobile App
                        │
                        ▼
                   REST API
                        │
                        ▼
                    Routes
                        │
                        ▼
                  Middleware
                        │
                        ▼
                   Controllers
                        │
                        ▼
                    Services
                        │
                        ▼
                 Prisma Client
                        │
                        ▼
                   PostgreSQL
```

### Layer responsibilities

#### Routes

Defines the API endpoints and attaches required middleware.

Routes should remain lightweight and should not contain business logic.

#### Middleware

Handles cross-cutting concerns such as:

* Authentication
* Authorization
* Request validation
* Error handling

#### Controllers

Responsible for HTTP-level concerns:

* Reading request data
* Calling services
* Returning responses

Controllers should not contain database queries.

#### Services

Contains the application's business logic.

Examples:

```text
AuthService
LocationService
HouseholdService
RecoveryService
WalletService
RewardService
RedemptionService
```

#### Prisma

Prisma provides the database access layer between the application and PostgreSQL.

---

# 3. Technology Stack

| Technology    | Purpose               |
| ------------- | --------------------- |
| Node.js       | Runtime               |
| Express       | HTTP API framework    |
| TypeScript    | Type safety           |
| PostgreSQL    | Primary database      |
| Prisma        | ORM / database access |
| Zod           | Request validation    |
| JWT           | Authentication        |
| bcrypt/Argon2 | Password hashing      |

---

# 4. Project Structure

The backend follows a modular structure.

```text
backend/
│
├── src/
│   ├── config/
│   │
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── location.controller.ts
│   │   ├── household.controller.ts
│   │   ├── recovery.controller.ts
│   │   ├── wallet.controller.ts
│   │   ├── reward.controller.ts
│   │   └── redemption.controller.ts
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── location.service.ts
│   │   ├── household.service.ts
│   │   ├── recovery.service.ts
│   │   ├── wallet.service.ts
│   │   ├── reward.service.ts
│   │   └── redemption.service.ts
│   │
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── location.routes.ts
│   │   ├── household.routes.ts
│   │   ├── recovery.routes.ts
│   │   ├── wallet.routes.ts
│   │   ├── reward.routes.ts
│   │   └── redemption.routes.ts
│   │
│   ├── middleware/
│   │
│   ├── schemas/
│   │
│   ├── utils/
│   │
│   ├── app.ts
│   └── server.ts
│
├── prisma/
│   └── schema.prisma
│
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

The exact filenames may change as the project evolves, but the separation of responsibilities should remain consistent.

---

# 5. Core Modules

The current backend is organized around the following modules:

```text
Authentication
      ↓
Locations
      ↓
Households
      ↓
Materials
      ↓
Recoveries
      ↓
Points & Wallet
      ↓
Rewards
      ↓
Redemptions
```

---

# 6. Authentication

Authentication provides the identity layer for the application.

### Supported functionality

* Registration
* Login
* Access tokens
* Refresh tokens
* Logout
* Password hashing
* User status
* Roles and permissions

### Main endpoints

```http
POST /auth/register
POST /auth/login
POST /auth/refresh
POST /auth/logout
```

Protected endpoints require:

```http
Authorization: Bearer <access-token>
```

---

# 7. Location Management

CleanLoop uses a Ghanaian geographic hierarchy:

```text
Region
   ↓
District
   ↓
Community
```

Locations are used to associate users and households with their communities.

### Endpoints

```http
GET /locations/regions

GET /locations/regions/:regionId/districts

GET /locations/districts/:districtId/communities
```

---

# 8. Household Management

A household represents a collection unit within a community.

```text
Region
   ↓
District
   ↓
Community
   ↓
Household
```

A household can have multiple members.

### Core functionality

* Create household
* View household
* Update household
* Add members
* Remove members
* View members

Household membership is represented separately from the `User` entity so that one user can be associated with household participation without duplicating user information.

---

# 9. Materials

Materials represent the recyclable materials supported by CleanLoop.

Examples include:

```text
PET bottles
Plastic sachets
HDPE
Other supported plastics
```

### Endpoint

```http
GET /materials
```

Material definitions are maintained by the backend rather than being hardcoded into the mobile application.

---

# 10. Recoveries

A recovery represents a verified collection of recyclable material.

The recovery flow is:

```text
Recovery Agent
      ↓
Select Collection Unit
      ↓
Select Material
      ↓
Record Weight
      ↓
Submit Recovery
      ↓
Backend Validation
      ↓
Calculate Points
      ↓
Wallet Transaction
```

### Current endpoints

```http
GET /materials

POST /recoveries

GET /recoveries/me

GET /recoveries/:id

GET /recoveries
```

The backend is responsible for calculating the points associated with a recovery.

The mobile application must not be trusted to determine the number of points earned.

---

# 11. Points & Wallet

CleanLoop uses **CleanPoints** as the internal reward currency.

Points are earned from verified recovery activities.

```text
Recovery
   ↓
Material
   ↓
Weight
   ↓
Point Rule
   ↓
CleanPoints
   ↓
Wallet
```

The backend maintains the authoritative wallet balance.

### Important rule

A client must never be allowed to directly modify a user's wallet balance.

Incorrect:

```http
POST /wallet/credit
```

Instead:

```text
Recovery
   ↓
Backend calculates points
   ↓
Wallet transaction
   ↓
Updated balance
```

This protects the points system from client-side manipulation.

---

# 12. Wallet Transactions

Wallet changes should be represented through transactions.

Typical transaction types include:

```text
EARN
REDEEM
ADJUSTMENT
REVERSAL
```

Example:

```text
Starting Balance
      ↓
+100 EARN
      ↓
+50 EARN
      ↓
-75 REDEEM
      ↓
Current Balance
```

Transactions provide an audit trail for changes to the user's points.

---

# 13. Rewards

Rewards are items or services that users can obtain using CleanPoints.

Examples may include:

* Airtime
* Data bundles
* Vouchers
* Partner rewards
* Physical household items

### Endpoints

```http
GET /rewards

GET /rewards/:id
```

A reward may contain:

```text
id
name
description
pointsCost
image
availability
status
```

The reward cost is controlled by the backend.

---

# 14. Redemptions

A redemption represents a user's request to exchange CleanPoints for a reward.

### Endpoints

```http
POST /redemptions

GET /redemptions/me

GET /redemptions/:id
```

### Redemption flow

```text
User
 ↓
Select Reward
 ↓
Submit Redemption
 ↓
Validate Reward
 ↓
Validate Wallet Balance
 ↓
Deduct Points
 ↓
Create Wallet Transaction
 ↓
Create Redemption
```

The wallet deduction and redemption creation should occur inside a database transaction.

This prevents situations where points are deducted without a redemption being created, or a redemption is created without deducting the points.

---

# 15. Database

The application uses:

```text
PostgreSQL
```

with:

```text
Prisma ORM
```

The Prisma datasource is configured for PostgreSQL.

```prisma
datasource db {
  provider = "postgresql"
}
```

The Prisma client is generated for application use.

---

# 16. Core Database Models

The current database contains the major entities required by the MVP.

### Authentication

```text
User
Role
Permission
UserRole
RolePermission
RefreshToken
```

### Locations

```text
Region
District
Community
```

### Households

```text
Household
HouseholdMember
```

### Recovery

```text
MaterialType
Recovery
RecoveryItem
```

### Points

```text
PointRule
Wallet
WalletTransaction
```

### Rewards

```text
Reward
Redemption
```

The database is designed so that the application can be expanded without changing the fundamental architecture.

---

# 17. API Design

The API is REST-based.

The recommended production API prefix is:

```text
/api/v1
```

Example:

```http
GET /api/v1/rewards
```

Versioning allows future API versions to be introduced without immediately breaking existing mobile clients.

---

# 18. Response Format

Successful responses should follow a consistent structure.

### Single resource

```json
{
  "success": true,
  "data": {}
}
```

### Collection

```json
{
  "success": true,
  "data": [],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### Error

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request",
    "details": {}
  }
}
```

Keeping responses consistent makes integration with the React Native application easier.

---

# 19. Validation

Request validation is handled using **Zod**.

The expected request flow is:

```text
Request
   ↓
Zod Schema
   ↓
Validation
   ↓
Controller
   ↓
Service
   ↓
Database
```

Validation should happen before business logic is executed.

The backend should validate:

* Request body
* Route parameters
* Query parameters

The client is never assumed to be trusted.

---

# 20. Error Handling

The backend should use centralized error handling.

Application errors should be converted into consistent HTTP responses.

Common categories include:

```text
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Validation Error
500 Internal Server Error
```

Controllers should pass unexpected errors to the centralized error middleware rather than handling every error independently.

---

# 21. Authentication & Authorization

The MVP uses role-based authorization.

Current roles are intentionally limited:

```text
member
sanitation_worker
admin
fstp_staffer
```

The system should avoid creating additional roles until they are required by the actual product.

Authorization should be enforced on the backend.

The mobile application should only control what is displayed in the UI; it must not be responsible for enforcing security rules.

---

# 22. Security Principles

The backend follows these principles:

### Password security

Passwords are never stored in plain text.

Only secure password hashes are persisted.

### JWT authentication

Access tokens are used for authenticated requests.

### Refresh tokens

Refresh tokens are persisted securely and can be revoked.

### Input validation

All external input is validated.

### Authorization

Protected operations require appropriate permissions.

### Server-side calculations

Points, wallet balances, and redemption values are determined by the backend.

### Database transactions

Operations that modify multiple related records should be atomic.

---

# 23. Offline-First Mobile Architecture

The CleanLoop client is being developed as a **React Native offline-first application**.

The backend remains the authoritative server.

The mobile application may temporarily operate without an internet connection.

The expected architecture is:

```text
                  React Native
                       │
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
         Local Storage       API Client
              │                 │
              │                 ▼
              │             Backend
              │                 │
              │                 ▼
              │             PostgreSQL
              │
              ▼
          Sync Queue
              │
              ▼
       Network Available
              │
              ▼
            Sync
```

For example:

```text
Agent goes offline
       ↓
Records recovery
       ↓
Recovery saved locally
       ↓
UI updates immediately
       ↓
Internet returns
       ↓
Recovery synchronizes
       ↓
Backend becomes source of truth
```

The backend therefore needs to support reliable synchronization patterns as the mobile application is developed.

---

# 24. Current Development Status

## Completed

```text
Authentication       ✅
Location             ✅
Households           ✅
Materials            ✅
Recoveries           ✅
Points & Wallet      ✅
Rewards              ✅
Redemptions          ✅
```

The core backend required for the first mobile MVP is therefore in place.

---

# 25. Current Development Direction

Backend development is currently being **paused at the core MVP boundary**.

The next phase is the React Native application.

The mobile application will consume the existing API and validate the complete product flow.

The initial mobile flow is:

```text
Authentication
      ↓
Home
      ↓
Household
      ↓
Recovery
      ↓
Points & Wallet
      ↓
Rewards
      ↓
Redemption
```

This approach allows the team to identify real integration requirements before expanding the backend.

---

# 26. Future Backend Modules

The following modules will be implemented after the core mobile MVP has been validated.

## Schools

Schools will participate in plastic collection without requiring individual student accounts.

The physical process is:

```text
Students collect plastic
        ↓
School stores collection
        ↓
Recovery Agent arrives
        ↓
Agent weighs collection
        ↓
School Collection recorded
```

Students are **not required to have phones or CleanLoop accounts** for the MVP.

---

## School-wide Campaigns

CleanLoop will support competitions between schools.

Example:

```text
School A
School B
School C
School D
```

The system can rank schools according to verified collection performance.

---

## Class Competitions

Schools can also organize class-level collection competitions.

Example:

```text
JHS 1A
JHS 1B
JHS 2A
JHS 2B
```

The system records the class as the collection participant rather than creating individual student accounts.

---

## Planned future modules

```text
Schools
School Classes
School Collections
Campaigns
Campaign Participants
Leaderboards
Notifications
Administration
Recycling Partners
Analytics
```

These modules will be added only when required by the product.

---

# 27. Development Workflow

The project follows a **vertical-slice development approach**.

Instead of completing every backend feature before touching the mobile application, functionality is developed and tested end-to-end.

Example:

```text
Backend API
     ↓
React Native Screen
     ↓
API Integration
     ↓
Offline Behaviour
     ↓
Testing
     ↓
Backend Improvements
```

This reduces unnecessary backend development and exposes integration problems early.

---

# 28. Local Development

Install dependencies:

```bash
npm install
```

Create environment configuration:

```bash
cp .env.example .env
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start development server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Run production:

```bash
npm start
```

---

# 29. Environment Variables

Example `.env`:

```env
NODE_ENV=development

PORT=5000

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

JWT_ACCESS_SECRET="your-access-secret"
JWT_REFRESH_SECRET="your-refresh-secret"

JWT_ACCESS_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"
```

Never commit `.env` to version control.

Use `.env.example` to document required variables.

---

# 30. Engineering Principles

The backend follows several core principles.

### Keep controllers thin

```text
Controller
    ↓
Service
```

Controllers should not contain business logic.

### Keep business rules on the server

The client should never determine:

* Wallet balances
* Points earned
* Redemption costs
* Recovery validity

### Use database transactions

Operations involving multiple dependent records should be atomic.

### Keep the MVP small

Only build functionality required by the current product phase.

### Design for expansion

The current architecture should allow future modules to be introduced without rewriting the core system.

### Backend is the source of truth

The mobile application may cache and operate offline, but the backend remains the authoritative system for synchronized data.

---

# 31. Product Principle

The initial CleanLoop MVP is built around one fundamental loop:

```text
          COLLECT
             ↓
          VERIFY
             ↓
           RECORD
             ↓
         EARN POINTS
             ↓
          REDEEM
```

The goal of the first release is to make this loop reliable before expanding into school competitions, campaigns, analytics, and other advanced features.

---

# 32. Repository Status

**Status:** Active Development

**Current phase:** Core backend complete → React Native integration

**Target market:** Ghana MVP

**Primary client:** React Native mobile application

**Backend:** Node.js + Express + TypeScript

**Database:** PostgreSQL

**ORM:** Prisma

---

## Development Direction

The immediate priority is **not to continue adding backend modules**.

The next step is to build the React Native application against the completed backend:

```text
                 CURRENT POINT
                      │
                      ▼
             ┌─────────────────┐
             │  Core Backend   │
             │    COMPLETE     │
             └────────┬────────┘
                      │
                      ▼
             React Native App
                      │
                      ▼
              API Integration
                      │
                      ▼
              Offline Testing
                      │
                      ▼
             MVP Validation
                      │
                      ▼
          Expand Backend Modules
```

This keeps development focused, reduces unnecessary engineering, and ensures that future backend features are based on real mobile application requirements.
