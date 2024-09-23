// search.js
document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value;
    
    if (query.length > 2) { // Minimal length for triggering search
        // Call your AI summarization API or local search function here
        fetchSummarizedContent(query);
    }
});

function fetchSummarizedContent(query) {
    // This is where you would use an API or local logic for content search
    // Example: Fetch from an API
    fetch(`https://api.example.com/summarize?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            // Assume the API returns a summarized result
            document.getElementById('results').innerHTML = `
                <p><strong>Search Results:</strong></p>
                <p>${data.summary}</p>`;
        })
        .catch(error => {
            console.error('Error fetching summary:', error);
        });
}
