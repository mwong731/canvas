function zoomIn() {
    contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    let capImg = document.getElementById("zoomImg")
    contextReal.drawImage(capImg, 0, 0, canvasReal.width * 1.2, canvasReal.height * 1.2)
    capImg.setAttribute('src', canvasReal.toDataURL("image/png"))
}

function zoomOut() {
    contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    let capImg = document.getElementById("zoomImg")
    contextReal.drawImage(capImg, 0, 0, canvasReal.width * 0.8, canvasReal.height * 0.8)
    capImg.setAttribute('src', canvasReal.toDataURL("image/png"))
}

function to_image() {
    let a = document.getElementById("dlImg");
    a.setAttribute('download', "image.png")
    a.setAttribute('href', canvasReal.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    a.click();
}

function clear() {
    contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    undoArr = []
    undoCount = -1
}


let undoArr = []
let undoCount = -1
let uImg = document.getElementById("undoImg")
let rImg = document.getElementById("redoImg")

function captureUndo() {
    let undoImg = canvasReal.toDataURL("image/png")
    undoArr.push(undoImg)
    undoCount++
    if (undoCount > 0) {
        uImg.setAttribute('src', undoArr[undoCount - 1])
    }
}

function newUndoEventListener() {
    if (undoCount < undoArr.length - 1) {
        undoArr = undoArr.slice(0, undoCount + 1)
    }
}


function undo() {
    if (undoCount > 0) {
        contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        contextReal.drawImage(uImg, 0, 0, canvasReal.width, canvasReal.height)
        undoCount--
        uImg.setAttribute('src', undoArr[undoCount - 1])
        rImg.setAttribute('src', undoArr[undoCount + 1])
    } else if (undoCount == 0) {
        undoCount--
        contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        rImg.setAttribute('src', undoArr[undoCount + 1])
    }
}

function redo() {
    if (undoCount < undoArr.length - 1) {
        contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        contextReal.drawImage(rImg, 0, 0, canvasReal.width, canvasReal.height)
        undoCount++
        if (undoCount < undoArr.length - 1) {
            rImg.setAttribute('src', undoArr[undoCount + 1])
        }
        uImg.setAttribute('src', undoArr[undoCount - 1])
    }
}