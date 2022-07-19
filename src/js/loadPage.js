import fetchMovies from './fetchMovies';
import { movieCards } from './fetchMovies';
import storage from './storage';

const KEY = '659c146febfafc17fd54baa17527f7fa';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'week';

// const API_URL_POPULAR = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`;

async function fetchFilms(KEY, MEDIA_TYPE, TIME_WINDOW) {
  let response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}&media_type=${MEDIA_TYPE}&time_window=${TIME_WINDOW}`
  );
  return response.json();
}

fetchFilms(KEY, MEDIA_TYPE, TIME_WINDOW).then(({ results }) => {
  console.log(results);
  storage.save('movies', results);
  document.body.innerHTML = movieCards(results);
});

