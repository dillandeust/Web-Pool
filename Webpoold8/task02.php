<?php

function dog_bark($woof_nb){
    if ($woof_nb < 0){
        echo "\n";
        
    }
    else{
       str_repeat( "woof", $woof_nb);
       
       $s = rtrim(str_repeat( "woof ", $woof_nb), " ");
       echo $s;
       echo "\n";
    
}
}
?>