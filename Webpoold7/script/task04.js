var bouton1 = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].getElementsByTagName("button")[0];
var bouton2 = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].getElementsByTagName("button")[1];
var select = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].getElementsByTagName("select")[0];


bouton1.onclick = function plus() {


    font = document.getElementsByTagName("body")[0];
    style = window.getComputedStyle(font, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    font.style.fontSize = (currentSize + 5) + 'px';

}
bouton2.onclick = function moins() {

    font = document.getElementsByTagName("body")[0];
    style = window.getComputedStyle(font, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    font.style.fontSize = (currentSize - 5) + 'px';

}

select.onchange = function slcbckg() {
    var clr = select.selectedIndex;
    document.body.style.background = select.options[clr].value;
}
