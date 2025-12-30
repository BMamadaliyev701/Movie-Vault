const Header = {
    render() {
        return `
            <header>
                <div class="logo">
                    <i class="fa-solid fa-film"></i>
                    <h1>MOVIE <span>VAULT</span></h1>
                </div>
                <div class="header-actions">
                    <button id="favoritesBtn" title="Saqlanganlar">
                        <i class="fa-regular fa-heart"></i>
                        <span class="btn-text">Saqlanganlar</span>
                    </button>
                </div>
                <div class="search-bar">
                    <i class="fa fa-search"></i>
                    <input type="text" id="searchInput" placeholder="Qidirish...">
                    <button id="searchBtn" title="Izlash">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </header>
        `;
    },

    init() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const favoritesBtn = document.getElementById('favoritesBtn');

        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.onSearch();
            });
            searchInput.addEventListener('input', (e) => this.onSearchInput(e.target.value));
        }

        if (searchBtn) searchBtn.addEventListener('click', () => this.onSearch());
        if (favoritesBtn) favoritesBtn.addEventListener('click', () => this.onFavoritesClick());
    },

    onSearch() { },
    onSearchInput(value) { },
    onFavoritesClick() { }
};
