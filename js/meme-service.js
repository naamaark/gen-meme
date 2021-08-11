var gKeywords = { 'happy': 0, 'sad': 0, 'angry': 0, 'man': 0, 'woman': 0, 'animal': 0 }
var gMeme = _createMeme();


function _createMeme(selectedLineIdx = 0, txt = 'Hello', size = 20, align = 'left', y = 50, color = 'black') {
    return {
        selectedImgId: 1,
        selectedLineIdx,
        lines: [{
            txt,
            size,
            align,
            y,
            color
        }]
    }
}

function getMemeImgId() {
    return gMeme.selectedImgId;
}

function getMemeTxt() {
    return gMeme.lines[0].txt;
}

function updateMemeTxt(txt) {
    gMeme.lines[0].txt = txt;
}

function updateMemeImg(id) {
    gMeme.selectedImgId = id;
}

function getMemeFontSize() {
    return gMeme.lines[0].size;
}

function changeMemeFontSize(change) {
    gMeme.lines[0].size += change;
}

function getMemeY() {
    return gMeme.lines[0].y;
}

function changeMemeY(change) {
    gMeme.lines[0].y += change;
}