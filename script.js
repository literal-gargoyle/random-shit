function searchWeb() {
    const query = document.getElementById('searchQuery').value;
    const proxyUrl = 'https://your-proxy-service-url.com';
    const searchUrl = `${proxyUrl}/search?q=${encodeURIComponent(query)}`;

    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            data.results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.innerHTML = `<h3>${result.title}</h3><p>${result.snippet}</p><a href="${result.link}" target="_blank">Read more</a>`;
                resultsDiv.appendChild(resultItem);
            });
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
}
