'use strict'

var gPage = 'home';

function init() {
    initCanvas();
    renderGallery();
    addEventsInput();
    window.addEventListener('resize', resizeCanvas());
}

function addEventsInput() {
    var textInput = document.querySelector('[name=textinput]');
    textInput.addEventListener('keyup', onUpdateValue);
}

function renderGallery() {
    var imgsIds = getImgsId();
    var strHtml = imgsIds.map(function (id) {
        return `<img src="img/${id}.jpg" onclick="onChooseImg(this)" id="${id}">`
    })
    var el = document.querySelector('.gallery-container');
    el.innerHTML = strHtml.join('');
}

function onClickedNavItem(el) {
    const links = document.querySelectorAll('a.active')
    links.forEach(link => {
        link.classList.remove('active')
    })
    el.classList.add('active')
}

function switchHomeEditor(el) {
    if (gPage === 'home' && el.id === 'gallery-a') return
    var elGallery = document.querySelector('.gallery-container');
    var elAbout = document.querySelector('.about');
    var elSearch = document.querySelector('.search-container');
    var elEditor = document.querySelector('.meme-editor');
    var elEditorBg = document.querySelector('.main-editor-bg');
    var elCanvas = document.querySelector('.canvas-container');
    if (gPage === 'home') {
        gPage = 'editor';
        elEditorBg.style.display = 'block';
        elGallery.style.display = 'none';
        elAbout.style.display = 'none';
        elSearch.style.display = 'none';
        elEditor.style.display = 'grid';
        elCanvas.style.display = 'block';
        window.addEventListener('resize', resizeCanvas());
        const links = document.querySelectorAll('.main-nav a')
        links.forEach(link => {
            link.classList.remove('active');
        })
    } else if (gPage === 'editor') {
        window.removeEventListener('resize');
        gPage = 'home';
        elEditorBg.style.display = 'none';
        elGallery.style.display = 'grid';
        elAbout.style.display = 'flex';
        elSearch.style.display = 'flex';
        elEditor.style.display = 'none';
        elCanvas.style.display = 'none';
    }


}

function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}

function toggleBtn() {
    var elToggle = document.querySelector('.btn-menu-toggle')
    if (document.body.className === 'menu-open') elToggle.innerHTML = '&#10005';
    else elToggle.innerHTML = '&#9776';
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    if (elContainer.offsetHeight === 0 || elContainer.offsetWidth === 0) return
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetWidth;
}

