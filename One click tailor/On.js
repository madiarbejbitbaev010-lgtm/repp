function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
function toggleLang() {
    const kz = document.getElementById("lang-kz");
    const ru = document.getElementById("lang-ru");

    kz.classList.toggle("active");
    ru.classList.toggle("active");
}
