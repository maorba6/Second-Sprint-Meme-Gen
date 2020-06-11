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


function renderPhotos() {
    var strHTML = '';
    var elCardsContainer = document.querySelector('.cards-container')
    var imgs = getImgs();
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




function onAddLine() {
    addLine()
    elTxt.value = '';
}

function onDeleteLine() {
    deleteLine()
    elTxt.value = '';

}

function onSwitchLines() {
    switchLines()
    elTxt.value = '';

}

function onLineChange(val) {
    lineChange(val)
    elTxt.value = '';

}

function onFontSize(val) {
    fontSize(val)
    elTxt.value = '';

}