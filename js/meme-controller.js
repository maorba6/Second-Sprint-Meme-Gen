'use strict'


var gCanvas = document.querySelector('#my-canvas');
var gCtx = gCanvas.getContext('2d');
var elTxt = document.querySelector('.txt')




function init() {

    renderPhotos()
}

function drawText(text, x, y) {
    drawImgFromlocal(gId)
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = gStrokeColor;
    gCtx.fillStyle = gColor;
    gCtx.font = `${gMeme.lines[gLineIdx].size}px sans-serif`;
    gCtx.textAlign = gMeme.lines[gLineIdx].align

    setTimeout(function() {
        texts()
    }, 0.1)
}


function renderPhotos(imgs = gImgs) {
    var strHTML = '';
    var elCardsContainer = document.querySelector('.cards-container')
    imgs.forEach(function(img) {
        strHTML += `<div><img class="meme-img" onclick="renderModal(${img.id})" src="${img.url}"></div>`
    })

    elCardsContainer.innerHTML = strHTML

}

function texts() {
    gMeme.lines.forEach(function(line) {
        gCtx.fillText(line.txt, line.x, line.y);
        gCtx.strokeText(line.txt, line.x, line.y);
    })
}



function renderModal(id) {
    var elModal = document.querySelector('.modal');
    var elMain = document.querySelector('.main-container')
    elModal.classList.remove('hidden')
    elMain.classList.add('hidden')
    drawImgFromlocal(id)
}

function showNav() {
    var elNav = document.querySelector('.lil-nav');
    elNav.classList.remove('hidden');
}

function closeNav() {
    var elNav = document.querySelector('.lil-nav');
    elNav.classList.add('hidden');
}

function closeModal() {
    var elMain = document.querySelector('.main-container')

    var elModal = document.querySelector('.modal');
    elModal.classList.add('hidden')
    elMain.classList.remove('hidden')


}



function drawImgFromlocal(id) {
    gId = id;
    var img = new Image()
    img.src = `./meme-imgs (square)/${id}.jpg`;


    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}


function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}

function onAddLine() {
    addLine()
    elTxt.value = '';

}

function onDeleteLine() {
    deleteLine()

}

function onSwitchLines() {
    switchLines()
    elTxt.value = gMeme.lines[gLineIdx].txt;

}

function onLineChange(val) {
    lineChange(val)

}

function onFontSize(val) {
    fontSize(val)

}

function onSearchKey(val) {

    searchKey(val)
}