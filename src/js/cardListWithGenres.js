import { getGenres } from './modal';
import { arrValuesOfGenres } from './renderLibMovie';

export function markUpWithGenres(arrFromStorage) {
  return arrFromStorage
    .map(
      ({
        id,
        poster_path,
        title,
        original_title,
        genre_ids,
        release_date,
        original_name,
        first_air_date,
      }) => {
        let a = release_date;

        let b = first_air_date;
        if (release_date) {
          a = a.slice(0, 4);
        }
        if (first_air_date) {
          b = b.slice(0, 4);
        }

        const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
        return `<li class="home-card js-modal-open" data-card-movie-id="${id}">
            <a href="#" class="home-card__link">
                <div class="card-info">
                    <img class="home-card__img" src="${imgUrl}" alt="${title}">
                    <h2 class="card-info__title">${original_title || original_name}</h2>
                    <p class="card-info_descr">
                        ${genre_ids.length ? `<span>${getGenres(genre_ids, 3)}</span>` : ''}
                        
                        |
                        <span>${a || b}</span>
                    </p>
                </div>
            </a>
        </li>`;
      }
    )

    .join('');
}
