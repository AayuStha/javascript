<?php
$server = "localhost:3306";
$username = "admin";
$password = "pass";
$database = "php_mysql";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) {
    echo("Connection failed: " . mysqli_connect_error());
} 
else {
    echo 'Connected successfully<br/>';
}

$sql = "SELECT * FROM emp5 WHERE emp_salary < ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "i", $salary);
$salary = 20000;
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if (mysqli_num_rows($result) > 0) {
    echo "<table border=1 cellpadding= 10 cellspacing=10 >";
    echo "<tr>";
    echo "<th>ID</th>";
    echo "<th>Name</th>";
    echo "<th>Emp_salary</th>";
    echo "</tr>";
    
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row["id"] . "</td>";
        echo "<td>" . $row["name"] . "</td>";
        echo "<td>" . $row["emp_salary"] . "</td>";
        echo "</tr>";
    }
    
    echo "</table>";
} else {
    echo "No records found.";
}


mysqli_close($conn);
