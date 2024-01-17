// Exemplo de interatividade simples
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    header.addEventListener("mouseover", function () {
        header.style.backgroundColor = "#555";
    });

    header.addEventListener("mouseout", function () {
        header.style.backgroundColor = "#333";
    });
});
