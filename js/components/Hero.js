const Hero = {
    render() {
        return `
            <section id="heroBanner" class="hero-banner">
                <div class="banner-container">
                    <div class="banner-image">
                        <img src="assets/images/banner.png" alt="Banner">
                    </div>
                    <div class="banner-content">
                        <h2>Movie Vault - Premium Kino Olami</h2>
                        <p>Eng sara kinolar, seriallar va multfilmlar to'plami bir joyda!</p>
                    </div>
                </div>
            </section>
        `;
    },

    toggle(show) {
        const banner = document.getElementById('heroBanner');
        if (banner) {
            if (show) banner.classList.remove('hidden');
            else banner.classList.add('hidden');
        }
    }
};
