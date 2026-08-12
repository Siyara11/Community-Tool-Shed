
// 1. SETUP - Import and initialize  Express application

const express = require('express');
const app = express();
const port = 3000;

// 2. MIDDLEWARE - A crucial step for handling JSON data

// This middleware tells Express app to automatically parse incoming
// request bodies as JSON. We will need this for POST and PUT requests.
app.use(express.json());

// 3. API ROUTES (STUBS) - The core of Milestone 1

// --- Root Route ---
// A simple welcome message to confirm the server is running.
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Community Tool Shed API!');
});


// --- User & Authentication Routes (from User Stories #1 and #2) ---

// POST /api/users/register - Create a new user account
app.post('/api/users/register', (req, res) => {
  const userData = req.body;
  console.log('Received user registration data:', userData);
  res.status(201).json({ message: 'Success: User account would be created here.' });
});

// POST /api/auth/login - Log in a registered user
app.post('/api/auth/login', (req, res) => {
  // In a real app, we would verify credentials from req.body.
  const loginCredentials = req.body;
  console.log('Received login attempt:', loginCredentials);
  res.status(200).json({ message: 'Success: User would be logged in here, returning an auth token.' });
});


// --- Tool Routes (from User Stories #3, #4, #5) ---
// This section demonstrates the full CRUD cycle for tools.

// GET /api/tools - Read all available tools
app.get('/api/tools', (req, res) => {
  res.status(200).json({ message: 'Success: All available tools would be retrieved from the database and sent here.' });
});

// POST /api/tools - Create a new tool listing
app.post('/api/tools', (req, res) => {
  // The new tool's details (name, description, etc.) would be in the request body.
  const toolData = req.body;
  console.log('Received data for new tool:', toolData);
  res.status(201).json({ message: 'Success: A new tool listing would be created in the database.' });
});

// GET /api/tools/:id - Read a single, specific tool
app.get('/api/tools/:id', (req, res) => {
  const toolId = req.params.id; // Get the ID from the URL parameter
  res.status(200).json({ message: `Success: Retrieved details for tool with ID: ${toolId}` });
});

// PUT /api/tools/:id - Update a tool listing
app.put('/api/tools/:id', (req, res) => {
  const toolId = req.params.id;
  // The updated tool details would be in the request body.
  const updatedToolData = req.body;
  console.log(`Received update for tool ${toolId}:`, updatedToolData);
  res.status(200).json({ message: `Success: Tool with ID ${toolId} would be updated in the database.` });
});

// DELETE /api/tools/:id - Remove a tool listing
app.delete('/api/tools/:id', (req, res) => {
  const toolId = req.params.id;
  res.status(200).json({ message: `Success: Tool with ID ${toolId} would be deleted from the database.` });
});


// --- Action Routes (from User Stories #6 and #7) ---

// POST /api/tools/:id/borrow - Action to borrow a tool
app.post('/api/tools/:id/borrow', (req, res) => {
    const toolId = req.params.id;
    res.status(200).json({ message: `Success: A user would borrow tool with ID ${toolId}, and their tokens would be updated.` });
});

// 4. SERVER START

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log('Test these endpoints with Postman.');
});