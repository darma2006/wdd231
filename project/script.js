let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = lastModifiedDate;


const apiKey = 'dc075553d05499f20e764e29c885d0ae';


const movieList = document.getElementById('movie-list');
const modal = document.getElementById('movie-modal');
const closeModal = document.getElementById('close-modal');


async function fetchMovies() {
  try {

    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    const data = await response.json();


    displayMovies(data.results);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}


function displayMovies(movies) {
  movieList.innerHTML = '';
  movies.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');


    movieItem.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" loading="lazy">
      <h3>${movie.title}</h3>
      <button onclick="viewMovieDetails(${movie.id})">View Details</button>
      <button onclick="saveFavorite('${movie.id}', '${movie.title}')">Add to Favorites</button>
    `;


    movieList.appendChild(movieItem);
  });
}


async function viewMovieDetails(id) {
  try {

    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
    const movie = await response.json();


    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-overview').textContent = movie.overview;


    modal.style.display = 'block';
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
}


closeModal.onclick = () => {
  modal.style.display = 'none';
}


function saveFavorite(id, title) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push({ id, title });
  localStorage.setItem('favorites', JSON.stringify(favorites));
  alert('Movie added to favorites!');
}


window.onload = fetchMovies;
