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

function drawText(text, x, y) {
    drawImgFromlocal(gId)
    gText = text;
    gMeme.lines[gLineIdx].txt = text
    var x = gMeme.lines[gLineIdx].x;
    var y = gMeme.lines[gLineIdx].y;
    text = text.toUpperCase()
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].strokeColor;
    gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color;
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px sans-serif`;
    gCtx.textAlign = gMeme.lines[gMeme.selectedLineIdx].align

    setTimeout(function() {
        gCtx.fillText(text, x, y);
        gCtx.strokeText(text, x, y);
    }, 0.1)
}

var gMeme = {
    selectedLineIdx: gLineIdx,
    lines: [{ txt: gText, size: 40, align: 'center', color: gColor, strokeColor: gStrokeColor, x: 300, y: 70 }]
}




function addLine() {
    gMeme.lines.push({ txt: '', size: 40, align: 'center', color: gColor, strokeColor: gStrokeColor, x: 300, y: 300 })
    switchLines();

}

function lineUp() {
    gMeme.lines[gLineIdx].y -= 50;
    drawText(gMeme.lines[gLineIdx].txt, gMeme.lines[gLineIdx].x, gMeme.lines[gLineIdx].y)
}


function lineDown() {;
    gMeme.lines[gLineIdx].y += 50
    drawText(gMeme.lines[gLineIdx].txt, gMeme.lines[gLineIdx].x, gMeme.lines[gLineIdx].y)

}

function fontSize(val) {
    gMeme.lines[gLineIdx].size += val
    drawText(gMeme.lines[gLineIdx].txt, gMeme.lines[gLineIdx].x, gMeme.lines[gLineIdx].y)

}


function deleteLine() {
    gMeme.lines.splice(gLineIdx, 1);
    gLineIdx--;
    if (gLineIdx < 0) {
        gLineIdx = 0;
    }
    drawText('', 0, 0);

}

function switchLines() {
    if (gLineIdx < gMeme.lines.length - 1) {
        gLineIdx++
    } else {
        gLineIdx = 0;
    }
}