var gKeywords = { 'happy': 0, 'sad': 0, 'angry': 0, 'man': 0, 'woman': 0, 'animal': 0 }
var gMeme = _createMeme();
addLine();

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

function addLine() {
    var newLine = {
        txt: 'Hello',
        size: 20,
        align: 'left',
        y: 80,
        color: 'black'
    }
    gMeme.lines.push(newLine);
}

function getMemeImgId() {
    return gMeme.selectedImgId;
}

function getMemeTxt(line) {
    return gMeme.lines[line].txt;
}

function updateMemeTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function updateMemeImg(id) {
    gMeme.selectedImgId = id;
}

function getMemeFontSize(line) {
    return gMeme.lines[line].size;
}

function changeMemeFontSize(change) {
    gMeme.lines[gMeme.selectedLineIdx].size += change;
}

function getMemeY(line) {
    return gMeme.lines[line].y;
}

function changeMemeY(change) {
    gMeme.lines[gMeme.selectedLineIdx].y += change;
}

function getGMeme() {
    return gMeme;
}

function getCurrLine() {
    return gMeme.selectedLineIdx;
}

function switchLine() {
    if (gMeme.selectedLineIdx === (gMeme.lines.length - 1)) gMeme.selectedLineIdx = 0;
    else gMeme.selectedLineIdx++;
}