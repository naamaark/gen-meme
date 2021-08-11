var gKeywords = { 'happy': 0, 'sad': 0, 'angry': 0, 'man': 0, 'woman': 0, 'animal': 0 }
var gImgs = [_createImg];
var gMemes = _createMeme();


function _createImgs() { }

function _createImg() {
    return {
        id: 1,
        url: 'img/1.jpg',
        keywords: ['happy']
    }
}

function _createMeme(selectedLineIdx = 0, txt = 'Hello', size = '20', align = 'left', color = 'black') {
    return {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [{
            txt,
            size,
            align,
            color
        }]
    }
}
