window.onload = fadeIn;

function fadeIn() {
    var opacity = 0
    var interval = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.05
            document.getElementById("content-box").style.opacity = opacity;
        } else {
            clearInterval(interval)
        }
    }, 75) ;
}