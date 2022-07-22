const values = storage.load('arrow');
export function movieCards(movies) {
  return movies
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
        const genreArr = [];
        let other = '';
        for (const genreId of genre_ids) {
          for (const value of values) {
            if (genreId === value.id) {
              genreArr.push(value.name);
              if (genre_ids.length > 2) {
                other = ',Other';
              }
            }
          }
        }
        let a = release_date;

        let b = first_air_date;
        if (release_date) {
          a = a.slice(0, 4);
        }
        if (first_air_date) {
          b = b.slice(0, 4);
        }
        const imgUrl = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : // : './images/netuNichego.png';
            'https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster';

        return `<li class="home-card js-modal-open placeholdify" data-card-movie-id="${id}">
            <a href="#" class="home-card__link">
                <div class="card-info">
                    <img class="home-card__img" src="${imgUrl}" alt="${title}">
                    <h2 class="card-info__title">${
                      original_title || original_name
                    }</h2>
                    <p class="card-info_descr">
                        <span>${genreArr.splice(0, 2)}  ${other}</span>
                        
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
