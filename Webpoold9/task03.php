<?php 

function dynamic_body(){
    
     
switch( $_GET['page']){
    case "home";
return file_get_contents("home.html");

case "sql";
return file_get_contents("sql.html");

case "php";
return file_get_contents("php.html");
default :
    return "Unknown page";
    
}
}

?>