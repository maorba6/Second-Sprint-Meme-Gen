'use strict'


var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gId;
var gLineIdx = 0;
var gText;
var gImgs = [{ id: 1, url: 'meme-imgs (square)/1.jpg', keywords: ['happy'] }, { id: 2, url: 'meme-imgs (square)/2.jpg', keywords: ['happy'] }, { id: 3, url: 'meme-imgs (square)/3.jpg', keywords: ['happy'] }, { id: 4, url: 'meme-imgs (square)/4.jpg', keywords: ['happy'] }, { id: 5, url: 'meme-imgs (square)/5.jpg', keywords: ['happy'] }, { id: 6, url: 'meme-imgs (square)/6.jpg', keywords: ['happy'] }, { id: 7, url: 'meme-imgs (square)/7.jpg', keywords: ['happy'] }, { id: 8, url: 'meme-imgs (square)/8.jpg', keywords: ['happy'] }, { id: 9, url: 'meme-imgs (square)/9.jpg', keywords: ['happy'] }, { id: 10, url: 'meme-imgs (square)/10.jpg', keywords: ['happy'] }, { id: 11, url: 'meme-imgs (square)/11.jpg', keywords: ['happy'] }, { id: 12, url: 'meme-imgs (square)/12.jpg', keywords: ['happy'] }, { id: 13, url: 'meme-imgs (square)/13.jpg', keywords: ['happy'] }, { id: 14, url: 'meme-imgs (square)/14.jpg', keywords: ['happy'] }, { id: 15, url: 'meme-imgs (square)/15.jpg', keywords: ['happy'] }, { id: 16, url: 'meme-imgs (square)/16.jpg', keywords: ['happy'] }, { id: 17, url: 'meme-imgs (square)/17.jpg', keywords: ['happy'] }, { id: 18, url: 'meme-imgs (square)/18.jpg', keywords: ['happy'] }, ];
var gColor = 'black';
var gStrokeColor = 'black';

function getImgs() {
    return gImgs;
}


var gMeme = {
    selectedLineIdx: gLineIdx,
    lines: [{ txt: gText, size: 40, align: 'center', color: gColor, strokeColor: gStrokeColor, x: 300, y: 70 }]
}

function text() {
    gMeme.lines.forEach(function(line) {
        gCtx.fillText(line.txt, line.x, line.y);
        gCtx.strokeText(line.txt, line.x, line.y);
    })
}


function addLine() {
    gMeme.lines.push({ txt: '', size: 40, align: 'center', color: gColor, strokeColor: gStrokeColor, x: 300, y: 300 })
    switchLines();
    text()

}

function lineChange(val) {
    gMeme.lines[gLineIdx].y += val;
    drawText(gMeme.lines[gLineIdx].txt, gMeme.lines[gLineIdx].x, gMeme.lines[gLineIdx].y)
    text()

}



function fontSize(val) {
    gMeme.lines[gLineIdx].size += val
    drawText(gMeme.lines[gLineIdx].txt, gMeme.lines[gLineIdx].x, gMeme.lines[gLineIdx].y)
    text()

}


function deleteLine() {
    gMeme.lines.splice(gLineIdx, 1);
    gLineIdx--;
    if (gLineIdx < 0) {
        gLineIdx = 0;
    }
    drawText('', 0, 0);
    text()

}

function switchLines() {
    if (gLineIdx < gMeme.lines.length - 1) {
        gLineIdx++
    } else {
        gLineIdx = 0;
    }
    text()

}

function searchKey(val) {

    var keywords = gImgs.filter(function(img) {

        if (img.keywords.includes(val)) {
            return img
        }
    }, )
    renderPhotos(keywords)
    if (val === '') {
        renderPhotos()
    }
}