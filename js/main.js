/** Movie Vault - Main Application Module */

const App = {
    current_media_type: 'movie',
    current_category: 'popular',

    init() {
        this.renderShell();
        this.initEventListeners();
        this.loadContent(this.current_media_type, this.current_category);
    },

    renderShell() {
        const app = document.getElementById('app');
        app.innerHTML = `
            ${Header.render()}
            <main>
                ${Hero.render()}
                ${Filters.render()}
                <section id="movieGrid" class="movie-grid"></section>
            </main>
            ${Footer.render()}
        `;
    },

    initEventListeners() {
        Header.onSearch = () => this.performSearch();
        Header.onSearchInput = (val) => this.handleSearchInput(val);
        Header.onFavoritesClick = () => this.showFavorites();
        Header.init();

        Filters.onFilterClick = (dataset) => this.handleFilter(dataset);
        Filters.init();
    },

    async loadContent(type, category) {
        this.showLoader();
        let contents = [];
        try {
            if (category === 'trending') {
                contents = await API.get_trending();
            } else if (category === 'game') {
                const r1 = await API.search_content('game');
                const r2 = await API.search_content('gaming');
                contents = [...r1, ...r2].filter((v, i, a) => a.findIndex(t => t.movie_id === v.movie_id) === i);
            } else {
                contents = await API.fetch_movies(type, category);
            }
            this.renderMovies(contents);
        } catch (error) {
            console.error("Load error:", error);
            this.renderMovies([]);
        }
    },

    async performSearch() {
        const query = document.getElementById('searchInput').value.trim();
        Hero.toggle(query.length === 0);

        if (query.length > 2) {
            this.showLoader();
            const results = await API.search_content(query);
            this.renderMovies(results);
        } else if (query.length === 0) {
            this.loadContent(this.current_media_type, 'popular');
        }
    },

    searchTimer: null,
    handleSearchInput(val) {
        clearTimeout(this.searchTimer);
        if (val.trim().length > 2) {
            this.searchTimer = setTimeout(() => this.performSearch(), 600);
        } else if (val.trim().length === 0) {
            this.loadContent(this.current_media_type, 'popular');
        }
    },

    async handleFilter(dataset) {
        const { category, genre } = dataset;
        this.showLoader();
        let contents = [];

        if (genre) {
            contents = await API.fetch_by_genre(genre);
            this.current_media_type = 'movie';
        } else if (category === 'trending') {
            contents = await API.get_trending();
        } else if (category === 'game') {
            const r1 = await API.search_content('game');
            const r2 = await API.search_content('gaming');
            contents = [...r1, ...r2].filter((v, i, a) => a.findIndex(t => t.movie_id === v.movie_id) === i);
        } else {
            this.current_media_type = category;
            contents = await API.fetch_movies(category, 'popular');
        }

        this.renderMovies(contents);
        document.getElementById('searchInput').value = '';
        Hero.toggle(true);
    },

    showFavorites() {
        const saved = Storage.get_favorites();
        this.renderMovies(saved, true);
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('searchInput').value = '';
    },

    renderMovies(movies, isFavView = false) {
        this.hideLoader();
        const grid = document.getElementById('movieGrid');
        grid.innerHTML = MovieGrid.render(movies, isFavView);

        MovieGrid.init(movies,
            (id) => this.handleMovieClick(id, movies),
            (id, icon) => this.handleFavToggle(id, icon, movies, isFavView),
            (id) => this.handleMovieClick(id, movies)
        );
    },

    handleMovieClick(id, list) {
        const movie = list.find(m => m.movie_id == id);
        if (movie) MovieModal.show(movie, (m, btn) => this.handleModalFavToggle(m, btn));
    },

    handleFavToggle(id, icon, list, isFavView) {
        const movie_id = parseInt(id);
        const movie = list.find(m => m.movie_id == movie_id);

        if (Storage.is_favorite(movie_id)) {
            Storage.remove_favorite(movie_id);
            icon.classList.remove('active');
            icon.querySelector('i').className = 'fa-regular fa-heart';
            if (isFavView) this.showFavorites();
        } else if (movie) {
            Storage.save_favorite(movie);
            icon.classList.add('active');
            icon.querySelector('i').className = 'fa-solid fa-heart';
        }
    },

    handleModalFavToggle(movie, btn) {
        if (Storage.is_favorite(movie.movie_id)) {
            Storage.remove_favorite(movie.movie_id);
            btn.textContent = 'Saqlash';
        } else {
            Storage.save_favorite(movie);
            btn.textContent = 'Olib tashlash';
        }
        const gridIcon = document.querySelector(`.fav-icon[data-id="${movie.movie_id}"]`);
        if (gridIcon) {
            gridIcon.classList.toggle('active');
            gridIcon.querySelector('i').className = Storage.is_favorite(movie.movie_id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        }
    },

    showLoader() {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'block';
        const grid = document.getElementById('movieGrid');
        if (grid) grid.innerHTML = '';
    },

    hideLoader() {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
