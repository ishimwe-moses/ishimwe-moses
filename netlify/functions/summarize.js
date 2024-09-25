const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    const { text } = JSON.parse(event.body); // Get user input from the body

    // Call Hugging Face API
    const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer YOUR_HUGGING_FACE_API_KEY`, // Replace with your Hugging Face API key
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: text }), // Send user input to the API
    });

    const result = await response.json(); // Get the result from Hugging Face

    // Return the summary as a response
    return {
      statusCode: 200,
      body: JSON.stringify({ summary: result[0].generated_text }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error generating summary' }),
    };
  }
};
