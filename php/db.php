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

$sql = "CREATE TABLE emp5(id INT AUTO_INCREMENT, 
        name VARCHAR(20) NOT NULL,
        emp_salary INT NOT NULL, 
        primary key(id))";

if (mysqli_query($conn, $sql)) {
    echo "Table emp5 created successfully";
} else {
    echo "Error creating table: " . $mysqli_error($conn);
}

mysqli_close($conn);
?>

