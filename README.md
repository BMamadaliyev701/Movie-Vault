# Movie Vault - Premium Kino Portali

Movie Vault — bu filmlar, seriallar va kreativ kontentlarni qidirish hamda saqlash uchun mo'ljallangan zamonaviy veb-ilova. Loyiha TMDB API bilan integratsiya qilingan va premium "glassmorphism" dizayniga ega.

## 🚀 Imkoniyatlar

- **Kino Qidiruvi**: TMDB bazasidan istalgan filmni topish.
- **Filtrlash**: Kino, Serial, O'yin va Trenddagilar bo'yicha saralash.
- **Sevimlilar**: Yoqqan filmlarni "Sevimlilar" ro'yxatiga qo'shish (LocalStorage yordamida saqlanadi).
- **Modal Ko'rinish**: Har bir film haqida batafsil ma'lumot (reyting, tavsif, yil).
- **Responsive Dizayn**: Mobil qurilmalar uchun to'liq moslashtirilgan (2 ustunli ko'rinish).
- **Premium UI**: Shaffof dizayn, silliq animatsiyalar va qorong'u rejim (Dark Mode).

## 🛠 Texnologiyalar

- **HTML5**: Semantik struktura.
- **Vanilla CSS3**: Glassmorphism va Flex/Grid tizimi.
- **Vanilla JavaScript**: API bilan ishlash va DOM manipulatsiyasi.
- **TMDB API**: Kino ma'lumotlari manbasi.

## 📂 Loyiha Tuzilishi

```text
movie-vault/
├── css/
│   └── style.css
├── js/
│   ├── api.js       # TMDB API so'rovlari
│   ├── config.js    # API kalit va sozlamalar
│   ├── main.js      # Asosiy mantiq va eventlar
│   ├── render.js    # UI elementlarini chizish
│   └── storage.js   # Sevimlilar bilan ishlash
└── index.html
```

## ⚙️ Sozlash

1. [TMDB](https://www.themoviedb.org/) saytidan ro'yxatdan o'ting va API kalit oling.
2. `js/config.js` faylini oching va `API_KEY` o'rniga o'z kalitingizni qo'ying.
3. `index.html` faylini brauzerda oching.
