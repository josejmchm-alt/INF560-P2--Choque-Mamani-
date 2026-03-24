/* VARIABLES */
:root {
    --color-primary: #8b1e3f;
    --color-secondary: #d4af37;
    --color-dark: #1a1a1a;
    --color-light: #f5f5f5;
    --color-white: #ffffff;

    --font-main: 'Poppins', sans-serif;
}

/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-main);
    background-color: var(--color-light);
    color: var(--color-dark);
    scroll-behavior: smooth;
}

/* NAVBAR */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: var(--color-primary);
    color: var(--color-white);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links a {
    color: var(--color-white);
    text-decoration: none;
}

/* HAMBURGUESA */
.menu-toggle {
    display: none;
    font-size: 1.8rem;
    cursor: pointer;
}

/* HERO */
.hero {
    position: relative;
    height: 90vh;
}

.hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%);
}

.hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
}

/* SECCIONES */
.section {
    padding: 60px 30px;
    text-align: center;
}

/* CARDS */
.cards {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.card {
    background: white;
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-10px);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

/* GALERÍA */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}

.gallery img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
}

/* LIGHTBOX */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    display: none;
    justify-content: center;
    align-items: center;
}

.lightbox img {
    max-width: 80%;
    max-height: 80%;
}

/* SCROLL ANIMATION */
.hidden {
    opacity: 0;
    transform: translateY(40px);
    transition: 0.6s;
}

.show {
    opacity: 1;
    transform: translateY(0);
}

/* FOOTER */
footer {
    background: var(--color-dark);
    color: white;
    padding: 20px;
    text-align: center;
}

/* RESPONSIVE */
@media (max-width: 768px) {

    .nav-links {
        position: absolute;
        top: 60px;
        right: 0;
        background: var(--color-primary);
        flex-direction: column;
        width: 200px;
        display: none;
    }

    .nav-links.active {
        display: flex;
    }

    .menu-toggle {
        display: block;
    }

    .hero-text h2 {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .hero {
        height: 70vh;
    }

    .card {
        width: 100%;
    }
}