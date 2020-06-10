'use strict'


var gCanvas = document.querySelector('#my-canvas');
var gCtx = gCanvas.getContext('2d');







renderPhotos()

function renderPhotos() {
    var strHTML = '';
    var elCardsContainer = document.querySelector('.cards-container')
    var imgs = getImgs();
    imgs.forEach(function(img) {
        strHTML += `<div><img class="meme-img" onclick="renderModal(${img.id})" src="${img.url}"></div>`
    })

    elCardsContainer.innerHTML = strHTML

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

}