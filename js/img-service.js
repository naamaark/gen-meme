var gKeywords = ['happy', 'sad', 'angry', 'man', 'woman', 'animal'];
var gImgs = _createImgs();

function _createImgs() {
    var imgs = [];
    for (var i = 1; i <= 15; i++) {
        imgs.push(_createImg(i));
    }
    return imgs;
}

function _createImg(id) {
    var keyword = getKeyWord();
    return {
        id,
        url: `../img/${id}.jpg`,
        keyword: keyword
    }
}

function getImgsId(filter) {
    var imgs;
    if (filter === 'all') {
        return gImgs.map(function (img) {
            return img.id;
        })
    } else {
        imgs = filterImgs(filter)
        return imgs.map(function (img) {
            return img.id;
        })
    }
}


function filterImgs(filter) {
    return gImgs.filter(function (img) {
        return img.keyword === filter;
    })
}

function getKeyWord() {
    return gKeywords[getRandomInt(0, 6)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}