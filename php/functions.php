<?php

// function add($x, $y){
//     $sum = $x + $y;
//     echo"Sum of two numbers is = $sum <br>";
// }

// add(467,943);

// function subtract($x, $y){
//     $diff = $x - $y;
//     echo"Diff of two numbers is = $diff <br><br>";
// }

// subtract(467,943);

// function add(...$num){
//     $sum = 0;
//     foreach($num as $n){
//         $sum+=$n;
//     }
//     return $sum;
// }
// echo add(1,2,3,4);

// //call by value 
// function adder($str2){
//     $str2 .= "call by value";
// }
// $str = "HEllo";
// adder($str);
// echo $str;

//call by reference
// function adder(&$str2){
//     $str2 .= "call by reference";
// }
// $str = 'This is ';
// adder($str);
// echo $str;

//default arguments
// function sayHello ($name = "Ram"){
//     echo "Hello $name ";
// }
// sayHello("Shyam");
// sayHello();
// sayHello("Hari");

//recursive function
// function display($number){
//     if($number <=20){
//         echo "$number <br/>";
//         display($number +1);  
//     }
// }
// display(5);

// function combined(){
//     $num_arg = func_num_args();
//     echo"Number of args: " .$num_arg . "\n";
// }
// combined('A', 'B' ,'C');