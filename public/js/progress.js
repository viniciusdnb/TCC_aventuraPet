"use strict";

function progressBar(nivel){
    var progress = document.querySelector("#progress-bar");
    var intNivel = parseInt(nivel);
    progress.style.setProperty("width", `${intNivel}%`)
}
