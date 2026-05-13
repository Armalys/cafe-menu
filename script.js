const translations = {
    'ru': {
        img: 'images/menu_ru.webp',
        mapText: '📍 Мы на карте',
        changeLang: '🇷🇺 Язык',
        modalTitle: 'Выберите язык'
    },
    'sr': {
        img: 'images/menu_sr.webp',
        mapText: '📍 Mi smo na mapi',
        changeLang: '🇷🇸 Jezik',
        modalTitle: 'Izaberite jezik'
    },
    'en': {
        img: 'images/menu_en.webp',
        mapText: '📍 Open Map',
        changeLang: '🇬🇧 Language',
        modalTitle: 'Select Language'
    },
    'zh': {
        img: 'images/menu_zh.webp',
        mapText: '📍 谷歌地图',
        changeLang: '🇨🇳 语言',
        modalTitle: '选择语言'
    }
};

function setLanguage(lang) {
    const data = translations[lang];

    // 1. Устанавливаем картинку
    const imgElement = document.getElementById('menu-img');
    imgElement.src = data.img;

    // 2. Обновляем тексты кнопок
    document.getElementById('map-btn').innerText = data.mapText;
    document.getElementById('lang-btn').innerText = data.changeLang;
    document.getElementById('modal-title').innerText = data.modalTitle;

    // 3. Управляем видимостью
    document.getElementById('language-overlay').classList.add('hidden');
    document.getElementById('top-nav').classList.remove('hidden');
    document.getElementById('menu-container').classList.remove('hidden');

    // 4. Скроллим в начало (важно для длинных меню)
    window.scrollTo(0, 0);
}

function showOverlay() {
    document.getElementById('language-overlay').classList.remove('hidden');
}