<?php
class MyTestClass{
	function __construct(){
		print "Constructor called \n";
		$this->name ="MyClass";
	}
	function __destruct(){
		print "Destroying " . $this->name;
	}
}
$obj = new MyTestClass();
