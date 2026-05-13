const menuImages = {
    'ru': 'images/menu_ru.webp',
    'sr': 'images/menu_sr.webp',
    'en': 'images/menu_en.webp',
    'zh': 'images/menu_zh.webp'
};

function setLanguage(lang) {
    const imgElement = document.getElementById('menu-img');
    imgElement.src = menuImages[lang];

    // Показываем контент, скрываем выбор языка
    document.getElementById('language-overlay').classList.add('hidden');
    document.getElementById('top-nav').classList.remove('hidden');
    document.getElementById('menu-container').classList.remove('hidden');
    
    // Скроллим в начало страницы
    window.scrollTo(0, 0);
}

function showOverlay() {
    document.getElementById('language-overlay').classList.remove('hidden');
}
