# Nelson Community Tool Shed - Backend API

## Project Overview
The Nelson Community Tool Shed is a digital platform designed for a fictitious community tool library based in Nelson, New Zealand. The platform allows community members (donors) to list tools they own and enables beneficiaries (borrowers) to find and borrow tools using a fair, token-based system.

This repository contains the Milestone 1 technical design documentation and the initial Express.js RESTful API stubs for the backend service. This project is developed as part of the WEB701 Web Technologies course at Nelson Marlborough Institute of Technology (NMIT) / Te Pukenga.

## Project Links
* GitHub Project Board: https://github.com/Siyara11/Community-Tool-Shed/projects
* Documentation: Nelson Community Tool Shed Website Project Documentation (PDF located in repo root)
* Local API Base URL: http://localhost:3000

## Repository Contents
* `index.js` - Express.js application defining all server routes and API stubs.
* `package.json` - Node.js project metadata and dependencies.
* `package-lock.json` - Dependency lockfile.
* `README.md` - Repository overview and setup instructions.
* Project Documentation PDF - Full Information Architecture analysis, database CRUD design, and Postman test evidence.

## Getting Started

### Prerequisites
* Node.js (version 18.0.0 or higher recommended)
* npm (Node Package Manager)

### Installation
1. Clone the repository to your local machine:
   git clone https://github.com/Siyara11/Community-Tool-Shed.git

2. Navigate into the project directory:
   cd Community-Tool-Shed

3. Install the required dependencies:
   npm install

### Running the Application
Start the development server:
node index.js

The server will initialize and listen on:
http://localhost:3000

## API Endpoint Reference

### Authentication and User Management
* POST /api/users/register - Register a new user account (donor or borrower).
* POST /api/auth/login - Authenticate credentials and return a session/JWT token.
* POST /api/auth/logout - Invalidate user session and clear authentication state.
* PUT /api/users/profile - Update user account information and preferences.

### Token Management
* POST /api/tokens/acquire - Claim or allocate monthly digital borrowing tokens to a beneficiary.

### Tool Catalog Management
* GET /api/tools - Retrieve all available tool listings.
* POST /api/tools - Create a new tool listing (donor feature).
* GET /api/tools/:id - Retrieve full details for a specific tool by ID.
* PUT /api/tools/:id - Update an existing tool's details or condition.
* DELETE /api/tools/:id - Remove a tool listing from the inventory.

### Borrowing and Transactions
* POST /api/tools/:id/borrow - Initiate a tool loan, deduct a token from the borrower, and set tool status to borrowed.
* POST /api/tools/:id/return - Confirm tool return, close the loan record, accept the transaction, and restore tool availability.

## Testing
All endpoints can be tested locally using Postman. Verification screenshots showing successful HTTP responses (200 OK and 201 Created) against the live server are provided in Chapter 4 of the project documentation report.