const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the parent directory (project root)
app.use('/content/resources/math-lib', express.static(path.join(__dirname, '../')));

// Fake educational landing page for the root URL to help with categorization
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Math Solver - Educational Tools</title>
        <meta name="description" content="Free educational math tools for students. Solve calculus, algebra, and geometry problems online.">
        <style>
            body { font-family: sans-serif; background-color: #f4f4f9; color: #333; padding: 20px; text-align: center; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            h1 { color: #4CAF50; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Math Solver Educational Suite</h1>
            <p>Welcome to the Math Solver. Access our suite of advanced mathematical tools designed to assist with calculus, algebra, and trigonometry.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>System Status:</strong> Operational</p>
            <p>Please use your assigned direct link to access the specific solver tools.</p>
            <p style="margin-top: 40px; color: #777; font-size: 0.8em;">&copy; 2024 Educational Math Tools Inc.</p>
        </div>
    </body>
    </html>
  `);
});

// Fake data for the activity feed
const activityFeed = [
  {
    id: 1000,
    title: 'New Photo Uploaded',
    body: 'Alice uploaded a new photo to her album.'
  },
  {
    id: 2000,
    title: 'Comment on Post',
    body: "Bob commented on Charlie's post."
  },
  {
    id: 13,
    title: 'Status Update',
    body: 'Charlie updated their status: "Excited about the new project!"'
  }
];

app.get('/feed', (req, res) => {
  res.json(activityFeed);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);

  // Print the correct URL to the console so you don't have to guess
  if (process.env.CODESPACE_NAME && process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN) {
    console.log(`\n>>> ACCESS GAME HERE: https://${process.env.CODESPACE_NAME}-${port}.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}/content/resources/math-lib/ <<<\n`);
  } else {
    console.log(`\n>>> ACCESS GAME HERE: http://localhost:${port}/content/resources/math-lib/ <<<\n`);
  }
});