<?php
$server = "localhost";
$username = "admin";
$password = "pass";
$database = "php_mysql";

$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) {
    echo("Connection failed: " . mysqli_connect_error());
}
else{
    echo'Connected successfully<br/>';
}

mysqli_close($conn);
?>