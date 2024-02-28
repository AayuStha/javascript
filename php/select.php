<?php
$server = "localhost:3306";
$username = "admin";
$password = "pass";
$database = "php_mysql";

$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) {
    echo("Connection failed: " . mysqli_connect_error());
} 
else {
    echo 'Connected successfully<br/>';
}
    $sql = 'SELECT * FROM emp5';
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "ID: " . $row["id"] . " - Name: " . $row["name"] . "<br/>";
        }
    } else {
        echo "No records found.";
    }


mysqli_close($conn);
?>