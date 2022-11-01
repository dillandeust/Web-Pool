
window.onload = function() {
var foot = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
var txt = "" ;

document.addEventListener('keypress', function(event) {

    txt = txt + (event.key);

    foot.innerHTML = txt.slice(-42);
});
}