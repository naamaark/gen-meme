'use strict'
var gCanvas;
var gCtx;

function init() {
    initCanvas();
    renderGallery();
    addEventsInput();
}

function initCanvas() {
    gCanvas = document.getElementById('main-canvas')
    gCtx = gCanvas.getContext('2d')
    drawMeme(getMemeImgId());
}

function renderGallery() {
    var imgsIds = getImgsId();
    var strHtml = imgsIds.map(function (id) {
        return `<img src="../img/${id}.jpg" onclick="onChangeImg(this)" id="${id}">`
    })
    var el = document.querySelector('.gallery-container');
    el.innerHTML = strHtml.join('');
}

function addEventsInput() {
    debugger
    var textInput = document.querySelector('[name=textinput]');
    textInput.addEventListener('keydown', onUpdateValue());
}

function onUpdateValue(e) {
    clearText();
    updateMemeTxt(e.target.value);
    drawText(getMemeTxt());
}

function clearText() {
    updateMemeTxt('');
    drawMeme(getMemeImgId());
}
function drawMeme(imgId) {
    var img = new Image();
    img.src = `img/${imgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText(getMemeTxt());
    }
}

function drawText(txt) {
    gCtx.font = '48px Impact';
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.fillText(txt, 50, 50);
    gCtx.strokeText(txt, 50, 50)
}

function onChangeImg(img) {

}