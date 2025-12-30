const MovieModal = {
    render(movie) {
        const is_fav = Storage.is_favorite(movie.movie_id);
        return `
            <div id="movieModal" class="modal">
                <div class="modal-content glass">
                    <span class="close-modal">&times;</span>
                    <div id="modalBody" class="modal-body">
                        <img src="${movie.poster_path}" alt="${movie.movie_title}" class="modal-poster">
                        <div class="modal-details">
                            <h2 style="text-transform: capitalize;">${movie.movie_title}</h2>
                            <div class="modal-meta">
                                <span>Yil: ${movie.release_year}</span>
                                <span class="rating"><i class="fa fa-star"></i> ${movie.rating_score}/10</span>
                            </div>
                            <div class="modal-plot">
                                <h3>Syujet:</h3>
                                <p class="modal-overview">${movie.plot_summary}</p>
                            </div>
                            <div class="modal-actions">
                                <button class="btn-primary" id="watchBtn">Hozir ko'rish</button>
                                <button class="btn-secondary toggle-fav" data-id="${movie.movie_id}">
                                    ${is_fav ? "Olib tashlash" : "Saqlash"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    show(movie, onFavToggle) {
        // Remove existing modal if any
        const existing = document.getElementById('movieModal');
        if (existing) existing.remove();

        document.body.insertAdjacentHTML('beforeend', this.render(movie));
        const modal = document.getElementById('movieModal');
        modal.style.display = 'block';

        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.onclick = () => modal.remove();

        window.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };

        const watchBtn = modal.querySelector('#watchBtn');
        watchBtn.onclick = () => {
            const query = encodeURIComponent(`${movie.movie_title} ${movie.release_year} trailer`);
            window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
        };

        const favBtn = modal.querySelector('.toggle-fav');
        favBtn.onclick = () => {
            onFavToggle(movie, favBtn);
        };
    }
};
