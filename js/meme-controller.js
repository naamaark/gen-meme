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
        drawTexts();
    }
}

function drawText(txt, line) {
    var fontSize = getMemeFontSize(line);
    var memeY = getMemeY(line);
    gCtx.font = `${fontSize}px Impact`;
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white'
    gCtx.fillText(txt, 50, memeY);
    gCtx.strokeText(txt, 50, memeY)
}

function drawTexts() {
    var lineCount = 0;
    var meme = getGMeme();
    meme.lines.forEach(function (line) {
        drawText(line.txt, lineCount);
        lineCount++;
    })
}

function onChangeImg(img) {
    updateMemeImg(img.id);
    drawMeme();
}

function onChangeFontSize(change) {
    var line = getCurrLine();
    var newFontSize = getMemeFontSize(line) + change;
    if (newFontSize < 10 || newFontSize > 56) return
    changeMemeFontSize(change);
    drawMeme();
}

function onChangeY(change) {
    var line = getCurrLine();
    var newMemeY = getMemeY(line) + change;
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

function onSwitchLine() {
    switchLine();
}
