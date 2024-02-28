<?php

$link= mysqli_connect('localhost', 'admin', 'pass');
if($link){
    echo'Connected Successfully';
}
else{
    echo('Could not connect:'.mysqli_error());
}
mysqli_close($link);

