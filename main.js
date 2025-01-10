// Получение элементов кнопок и root
const lightModeButton = document.querySelector(".header_btn_lightmode");
const darkModeButton = document.querySelector(".header_btn_darkmode");
const root = document.documentElement;

// Функция для включения светлого режима
function enableLightMode() {
    root.style.setProperty("--background-color", "rgb(196, 181, 165)");
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--button-color", "rgb(251, 152, 47)");
}

// Функция для включения темного режима
function enableDarkMode() {
    root.style.setProperty("--background-color", "black");
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--button-color", "gray");
}

// Добавление обработчиков событий
lightModeButton.addEventListener("click", enableLightMode);
darkModeButton.addEventListener("click", enableDarkMode);


