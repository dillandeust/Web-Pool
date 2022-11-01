<?php
function whoami(){
    $name=$_POST['name'];
    $age=$_POST['age'];
    $num= is_numeric($age);
    if($name == "" && $num == 1 ){
    echo "Hi, I have no name and I'm {$age} years old.\n";
    }
    elseif( $name != "" && $num == ""){
        echo "Hi, my name is $name.\n";
    }
    
    elseif(  $name == "" && $num == ""){
        echo "Hi.\n";
    }
    elseif($num == 1 && $name != ""){

     echo "Hi, my name is $name and I'm $age years old.\n";
    }
}
?>


