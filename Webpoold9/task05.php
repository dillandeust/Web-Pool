<?php
function form_is_submitted(){
   if (isset($_POST['submit'])){
    return 1;
   }
   else {return 0;}
} 


function whoami(){
    $name=$_POST['name'];
    $age=$_POST['age'];
    $cv=$_POST['curriculum'];
    $num= is_numeric($age);
    if($name == "" && $num == 1 ){
    echo "Hi, I have no name and I'm {$age} years old.\n";
    }
    elseif( $name != "" && $num == "" && $cv == ""){
        echo "Hi, my name is $name.\n";
    }
    
    elseif(  $name == "" && $num == "" && $cv == ""){
        echo "Hi.\n";
    }
    elseif($num == 1 && $name != "" && $cv == ""){

     echo "Hi, my name is $name and I'm $age years old.\n";
    }
    elseif($name == "" && $num == 1 && $cv != "" ){
        echo "Hi, I have no name and I'm {$age} years old. I'm a student of $cv.\n";
        }
        elseif( $name != "" && $num == "" && $cv != ""){
            echo "Hi, my name is $name. I'm a student of $cv.\n";
        }
        
        elseif(  $name == "" && $num == "" && $cv != ""){
            echo "Hi. I'm a student of $cv.\n";
        }
        elseif($num == 1 && $name != "" && $cv != ""){
    
         echo "Hi, my name is $name and I'm $age years old. I'm a student of $cv.\n";
        }

}