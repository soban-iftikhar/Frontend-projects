const apiKey = "6b482d81";
const baseUrl = "http://www.omdbapi.com/";

const searchButton = document.querySelector('button');
const searchInput = document.querySelector('#search');
const resultDiv = document.querySelector('#result');

searchButton.addEventListener('click', () => {
    const movieName = searchInput.value.trim();

    resultDiv.style.display = "block";
    resultDiv.innerHTML = "<p>Loading...</p>";

    if (!movieName) {
        resultDiv.innerHTML = "<p>Please enter a movie name!</p>";
        return;
    }

    const url = `${baseUrl}?apikey=${apiKey}&t=${encodeURIComponent(movieName)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Error!");
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === "True") {
                resultDiv.innerHTML = `
          <h3>${data.Title} (${data.Year})</h3>
          <p><strong>Director:</strong> ${data.Director}</p>
          <p><strong>Actors:</strong> ${data.Actors}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
          <p><strong>Rating:</strong> ${data.imdbRating}</p>
          <p><strong>Genre:</strong> ${data.Genre}</p>
          <p><strong>Runtime:</strong> ${data.Runtime}</p>
          <p><strong>Released:</strong> ${data.Released}</p>
          <p><strong>Language:</strong> ${data.Language}</p>
          <p><strong>Country:</strong> ${data.Country}</p>
            
          <img src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/200?text=No+Image"}" 
               alt="${data.Title} Poster">
        `;
            } else {
                resultDiv.innerHTML = `<p>${data.Error}</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            resultDiv.innerHTML = "<p>Failed to fetch movie data. Please try again later.</p>";
        });

    searchInput.value = "";
});
