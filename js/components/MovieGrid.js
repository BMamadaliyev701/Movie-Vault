const MovieGrid = {
    render(movies, isFavorites = false) {
        if (isFavorites && movies.length === 0) {
            return `
                <div class="empty-state">
                    <i class="fa-regular fa-heart"></i>
                    <p>Hali sevimlilar yo'q. Kinolarni saqlab qo'ying!</p>
                </div>
            `;
        }

        if (movies.length === 0) {
            return '<p class="no-results" style="grid-column: 1/-1; text-align: center; padding: 50px;">Hech narsa topilmadi :(</p>';
        }

        return movies.map(movie => MovieCard.render(movie)).join('');
    },

    init(movies, onMovieClick, onFavClick, onInfoClick) {
        const grid = document.getElementById('movieGrid');

        grid.querySelectorAll('.movie-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.fav-icon') || e.target.closest('.info-icon')) return;
                onMovieClick(card.dataset.id);
            });
        });

        grid.querySelectorAll('.info-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.stopPropagation();
                onInfoClick(icon.dataset.id);
            });
        });

        grid.querySelectorAll('.fav-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.stopPropagation();
                onFavClick(icon.dataset.id, icon);
            });
        });
    }
};
