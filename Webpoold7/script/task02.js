const foot = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];




 function wname() {

    txt = window.prompt("What’s your name ?");
    while (txt == "" || txt == null) {
        var txt = window.prompt("What’s your name ?");

    }

    
    if (confirm("Are you sure that " + txt + " is your name ?") ){
    alert("Hello " + txt + "!");

    foot.innerHTML = "Hello " + txt + "!";
    }


 }
foot.addEventListener("click", wname);
