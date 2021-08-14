var gImgs = _createImgs();

function _createImgs() {
    var imgs = [];
    for (var i = 1; i <= 15; i++) {
        imgs.push(_createImg(i));
    }
    return imgs;
}

function _createImg(id) {
    return {
        id,
        url: `../img/${id}.jpg`,
        keywords: ['happy']
    }
}

function getImgsId() {
    return gImgs.map(function (img) {
        return img.id;
    })
}