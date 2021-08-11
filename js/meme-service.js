var gKeywords = { 'happy': 0, 'sad': 0, 'angry': 0, 'man': 0, 'woman': 0, 'animal': 0 }
var gMeme = _createMeme();


function _createMeme(selectedLineIdx = 0, txt = 'Hello', size = '20', align = 'left', color = 'black') {
    return {
        selectedImgId: 1,
        selectedLineIdx,
        lines: [{
            txt,
            size,
            align,
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