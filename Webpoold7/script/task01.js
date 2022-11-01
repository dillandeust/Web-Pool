var nombreClics = 0;
const foot = document.getElementsByTagName("footer")[0];

function comptage() {
    nombreClics++;
    foot.innerHTML  = nombreClics;
}

foot.addEventListener("click", comptage);