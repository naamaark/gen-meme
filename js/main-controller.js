'use strict'
function init() {
    initCanvas();
    renderGallery();
    addEventsInput();
}

function renderGallery() {
    var imgsIds = getImgsId();
    var strHtml = imgsIds.map(function (id) {
        return `<img src="img/${id}.jpg" onclick="onChooseImg(this)" id="${id}">`
    })
    var el = document.querySelector('.gallery-container');
    el.innerHTML = strHtml.join('');
}

function switchHomeToEditor() {
    var elGrid = document.querySelector('.layout');
    var elGallery = document.querySelector('.gallery-container');
    var elAbout = document.querySelector('.about');
    var elSearch = document.querySelector('.search');
    var elEditor = document.querySelector('.meme-editor');
    var elCanvas = document.querySelector('.canvas-container');
    elGrid.classList.remove('home-layout');
    elGrid.classList.add('editor-layout');
    elGallery.style.display = 'none';
    elAbout.style.display = 'none';
    elSearch.style.display = 'none';
    elEditor.style.display = 'block';
    elCanvas.style.display = 'block';
}