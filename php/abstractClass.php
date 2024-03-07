<?php

abstract class shape{
	abstract protected function area();
}
class rectangle extends shape{
	var $l, $b;
	public function __construct($x,$y){
		$this->l = $x;
		$this->b = $y;
	}
	public function area(){
		$a=$this->l*$this->b;
		return $a;
	}
}

class circle extends shape{
	var $r;
	public function __construct($x){
		$this->r=$x;
	}
	public function area(){
		$pi= 3.142;
		$a=pow($this->r,2)*$pi;
		return $a;
	}
}
$r1= new rectangle (10,20);
$area=$r1->area();
echo"rectangle area=$area \n";
$c1=new circle(10);
$area=$c1->area();
echo"Circle area=$area \n";
