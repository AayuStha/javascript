<?php

function checkNumber($num){
	if($num>=1){
		//throw an exception
		throw new Exception ("Value must be less than 1");
	}
	return true;
}
//trigger an exception in a "try" block
try{
	checkNumber(0);
	//If the exception throws, below text wont display
	echo"If you see this text, the passed value is less than 1";
}
//catch exception
catch(Exception $e){
	echo"Exception Message:".$e->getMessage();
}
