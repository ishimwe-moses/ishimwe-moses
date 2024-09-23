const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Dummy route for search
app.get('/summarize', async (req, res) => {
    const query = req.query.q;
    
    // Call your AI tool or external API
    const response = await fetch(`https://api.openai.com/v1/summarize`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`
        },
        body: JSON.stringify({ query: query })
    });

    const data = await response.json();
    res.json({ summary: data.summary });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
