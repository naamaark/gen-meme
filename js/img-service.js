var gImgs = _createImgs();

function _createImgs() {
    return [
        _createImg(1),
        _createImg(2)
    ]
}

function _createImg(id) {
    return {
        id,
        url: `../img/${id}.jpg`,
        keywords: ['happy']
    }
}

function getImgsId() {
    return [gImgs[0].id, gImgs[1].id]
}