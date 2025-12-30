const Filters = {
    render() {
        return `
            <div class="filters">
                <button class="filter-btn active" data-category="movie" title="Kino">
                    <i class="fa-solid fa-clapperboard"></i>
                    <span class="btn-text">Kino</span>
                </button>
                <button class="filter-btn" data-category="tv" title="Serial">
                    <i class="fa-solid fa-tv"></i>
                    <span class="btn-text">Serial</span>
                </button>
                <button class="filter-btn" data-genre="16" title="Multfilm">
                    <i class="fa-solid fa-child"></i>
                    <span class="btn-text">Multfilm</span>
                </button>
                <button class="filter-btn" data-genre="878" title="Fantastika">
                    <i class="fa-solid fa-atom"></i>
                    <span class="btn-text">Fantastika</span>
                </button>
                <button class="filter-btn" data-genre="27" title="Qo'rqinchli">
                    <i class="fa-solid fa-ghost"></i>
                    <span class="btn-text">Qo'rqinchli</span>
                </button>
                <button class="filter-btn" data-category="trending" title="Trenddagilar">
                    <i class="fa-solid fa-fire"></i>
                    <span class="btn-text">Trenddagilar</span>
                </button>
                <button class="filter-btn" data-category="game" title="O'yin">
                    <i class="fa-solid fa-gamepad"></i>
                    <span class="btn-text">O'yin</span>
                </button>
            </div>
        `;
    },

    init() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.onFilterClick(btn.dataset);
            });
        });
    },

    onFilterClick(dataset) {
        // App logic will override this
    }
};
