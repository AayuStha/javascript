<?php

class student{
	private $name;
	private $id;
	private $address;
	function __construct($name, $id, $address){
		$this->name = $name;
		$this->id = $id;
		$this->address = $address;
	}
	public function getId(){
		return $this->id;
	}
	
	public function getName(){
		return $this->name;
	}
	
	public function getAddress(){
		return $this->address;
	}
}

// var_dump(new student("Ram", 01, "KTM"));

$Ram = new student("Ram", 01, "KTM");
echo ("Id : " ) . $Ram->getId() . ("\n");
echo ("Name : " ) . $Ram->getName() . ("\n");
echo ("Address : " ) . $Ram->getAddress() . ("\n");


