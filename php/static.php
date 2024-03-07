<?php

class MyClass{
	public static $name = 'Aayush';
	public static function callMe(){
		echo "Hello!";
	}
	public function __construct(){
		self::callMe();
	}
}
echo MyClass::$name."\n";
MyClass::callMe();
echo "\n";
new MyClass();
echo "\n";

