'use strict'
var gCanvas;
var gCtx;
var gInterval;

function init() {
    initCanvas();
    renderGallery();
    addEventsInput();
}

function initCanvas() {
    gCanvas = document.getElementById('main-canvas')
    gCtx = gCanvas.getContext('2d')
    drawMeme();
}

function renderGallery() {
    var imgsIds = getImgsId();
    var strHtml = imgsIds.map(function (id) {
        return `<img src="img/${id}.jpg" onclick="onChangeImg(this)" id="${id}">`
    })
    var el = document.querySelector('.gallery-container');
    el.innerHTML = strHtml.join('');
}

function addEventsInput() {
    var textInput = document.querySelector('[name=textinput]');
    textInput.addEventListener('keyup', onUpdateValue);
}

function onUpdateValue(ev) {
    clearText();
    updateMemeTxt(ev.target.value);
    drawText(getMemeTxt());
}

function clearText() {
    updateMemeTxt('');
    drawMeme();
}
function drawMeme(imgId) {
    var img = new Image();
    var imgId = getMemeImgId();
    img.src = `img/${imgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText(getMemeTxt());
    }
}

function drawText(txt) {
    var fontSize = getMemeFontSize();
    var memeY = getMemeY();
    gCtx.font = `${fontSize}px Impact`;
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white'
    gCtx.fillText(txt, 50, memeY);
    gCtx.strokeText(txt, 50, memeY)
}

function onChangeImg(img) {
    updateMemeImg(img.id);
    drawMeme();
}

function onChangeFontSize(change) {
    var newFontSize = getMemeFontSize() + change;
    if (newFontSize < 10 || newFontSize > 56) return
    changeMemeFontSize(change);
    drawMeme();
}

function onChangeY(change) {
    var newMemeY = getMemeY() + change;
    if (newMemeY < 0 || newMemeY > gCanvas.height) return
    changeMemeY(change);
    drawMeme();
}

function onConChangeY(change) {
    gInterval = setInterval(onChangeY, 100, change)
}

function onConChangeSize(change) {
    gInterval = setInterval(onChangeFontSize, 100, change)
}

function stopChange() {
    clearInterval(gInterval);
}