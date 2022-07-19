import fetchMovies from './fetchMovies';
import { movieCards } from './fetchMovies';
import storage from './storage';
import loadPage from './loadPage';
import { fetchFilms } from './loadPage';

// const API_URL_POPULAR = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`;

// appendMovies(movies.parts);

// function appendMovies(movies) {
//     homeList.insertAdjacentHTML('beforeend', movieCards(movies));
// }

// тут не розумію, що кого?
// fetchMoviesPop().then(({ movies }) => {
//     storage.load('movies', movies);
//     homeList.innerHTML = movieCards(movies);
//     spinner.classList.add('is-hidden');
// });

export function movieCards(movies) {
    return movies
    .map(({ id, poster_path, title, original_title, genres_ids, release_date }) => {
        const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
        const year = new Date(release_date).getFullYear();
        return `<li class="home-card js-modal-open" data-card-movie-id="${id}">
            <a href="#" class="home-card__link">
                <div class="card-info">
                    <img class="home-card__img" src="${imgUrl}" alt="${title}">
                    <h2 class="card-info__title">${original_title}</h2>
                    <p class="card-info_descr">
                        <span>${genres_ids}</span>
                        |
                        <span>${year}</span>
                    </p>
                </div>
            </a>
        </li>`;
    })
        .join('')
};  

export async function fetchMovies(movieName) {
    const searchParams = new URLSearchParams({
    api_key: '659c146febfafc17fd54baa17527f7fa',
    language: 'en-US',
    include_adult: false,
    query: movieName,
    sort_by: popularity.desc,
    });

    return fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}`)
    .then(res => {
        if (res.ok) {
        return res.json();
        }
        throw new Error(res.statusText);
    })
    .then(data => {
        return {
        movies: data.results,
        };
    });
}
