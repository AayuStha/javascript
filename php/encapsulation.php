<?php

class person{
	public $name;
	public $age;
	function __construct($n,$a){
		$this->name = $n;
		$this->age=$a;
	}

public function setAge($ag){
	$this->ag = $ag;
}

public function display(){
	echo"Welcome ".$this->name."\n";
	return $this->age-$this->ag;
}
}
$person= new person ("Aayush", 28);
$person ->setAge(45);
echo"You are ".$person -> display()." years old";