// script.js - redirect-site

const sites = [
    "https://en.seusite.com", 
    "https://es.seusite.com", 
    "https://ru.seusite.com", 
    "https://seusite.com" 
];

window.addEventListener("load", () => {
    const randomIndex = Math.floor(Math.random() * sites.length);
    setTimeout(() => {
        window.location.href = sites[randomIndex];
    }, 3000); // Redireciona após 3 segundos
});
