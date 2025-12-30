const MovieCard = {
    render(movie) {
        const is_fav = Storage.is_favorite(movie.movie_id);
        return `
            <div class="movie-card" data-id="${movie.movie_id}">
                <img src="${movie.poster_path}" alt="${movie.movie_title}" class="movie-poster" loading="lazy">
                <div class="info-icon" data-id="${movie.movie_id}" title="Batafsil ma'lumot">
                    <i class="fa-solid fa-circle-info"></i>
                </div>
                <div class="fav-icon ${is_fav ? 'active' : ''}" data-id="${movie.movie_id}">
                    <i class="fa-${is_fav ? 'solid' : 'regular'} fa-heart"></i>
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.movie_title}</h3>
                    <div class="movie-meta">
                        <span>${movie.release_year}</span>
                        <span class="rating"><i class="fa fa-star"></i> ${movie.rating_score}</span>
                    </div>
                </div>
            </div>
        `;
    }
};
