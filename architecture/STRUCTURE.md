# Movie Vault: To'liq Loyiha Strukturasi

Ushbu hujjat loyihaning barcha qismlari, ularning vazifalari va bir-biri bilan bog'liqligini to'liq tushuntirib beradi.

## 1. Umumiy Tuzilish (File Tree)

```text
movie-vault/
├── index.html                     # Asosiy HTML qobig'i
├── css/                           # Barcha dizayn fayllari
│   ├── style.css                  # Barcha CSS-larni birlashtiruvchi markaz
│   ├── base/                      # Bazaviy uslublar
│   │   ├── reset.css              # Brauzer standartlarini tozalash
│   │   └── variables.css          # Ranglar va o'lchamlar (CSS Variables)
│   ├── layout/                    # Sahifa tuzilishi
│   │   └── layout.css             # Konteyner va responsivlik
│   └── components/                # Har bir blok uchun alohida dizayn
│       ├── filters.css            # Janrlar qismi dizayni
│       ├── footer.css             # Pastki qism dizayni
│       ├── header.css             # Qidiruv va logo dizayni
│       ├── hero.css               # Banner (reklama) qismi dizayni
│       ├── modal.css              # Ma'lumot oynasi dizayni
│       └── movie-card.css         # Kino kartochkasi dizayni
├── js/                            # Ilovani ishlatuvchi kodlar
│   ├── main.js                    # Ilovaning asosiy "dvigateli"
│   ├── config.js                  # API kalitlari va URL-lar
│   ├── api.js                     # TMDB serveri bilan aloqa
│   ├── storage.js                 # LocalStorage (xotira) bilan ishlash
│   └── components/                # Dinamik HTML yaratuvchi qismlar
│       ├── Filters.js             # Janrlarni ekranga chiqarish
│       ├── Footer.js              # Pastki qismini generatsiya qilish
│       ├── Header.js              # Qidiruv panelini ishlatish
│       ├── Hero.js                # Bannerni ko'rsatish
│       ├── MovieCard.js           # Har bir kino uchun HTML blok
│       ├── MovieGrid.js           # Barcha kinolarni to'plash (ro'yxat)
│       └── MovieModal.js          # Kino haqida to'liq ma'lumot oynasi
└── architecture/
    └── STRUCTURE.md               # Ushbu tushuntirish hujjati
```

## 2. Fayllarning Ishlash Vazifasi

| Fayl/Papka | Vazifasi |
| :--- | :--- |
| `index.html` | Saytning asosi. Barcha CSS va JS fayllar shu yerda ulanadi. |
| `js/api.js` | Serverdan kinolarni qidiradi va olib keladi. |
| `js/storage.js` | Brauzer yopilsa ham, sevimli kinolarni eslab qoladi. |
| `js/main.js` | Ilovaning tartibini boshqaradi (masalan: "Kino ustiga bosilsa, modalni och"). |
| `css/base/variables.css` | Saytdagi ranglarni (ko'k, oq, to'q fon) bir joyda boshqarish. |
| `js/components/` | HTML kodini JS orqali yaratadi, bu saytni tez ishlashiga yordam beradi. |

## 3. Texnologiyalar

Loyiha hech qanday og'ir kutubxonalarsiz (React, Vue kabi) yaratilgan:
- **HTML5**: Semantik struktura.
- **Pure CSS3**: Glassmorphism dizayni va Flexbox/Grid.
- **Vanilla JavaScript (ES6+)**: Dinamik ishlov berish.
- **TMDB API**: Dunyodagi eng katta kino ma'lumotlar bazasi.

---
*Ushbu struktura loyihani kelajakda kengaytirishni (masalan, akkaunt tizimi qo'shishni) osonlashtiradi.*
