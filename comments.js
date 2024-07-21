// Create web server
// 1. Load the express module
const express = require('express');
// 2. Create a web server
const app = express();
// 3. Define the port number
const port = 3000;
// 4. Define the route
app.get('/', (req, res) => {
  res.send('Hello World');
});
// 5. Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// 6. Export the app
module.exports = app;