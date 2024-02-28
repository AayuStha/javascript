<?php
$server = "localhost:3306";
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

$sql= 'INSERT INTO emp5(name,emp_salary) VALUES ("sonoo", 9000)';
if (mysqli_query($conn, $sql)) {
    echo "Record inserted successfully";
} else {
    echo "Couldnot insert record: " . $mysqli_error($conn);
}

mysqli_close($conn);
?>
