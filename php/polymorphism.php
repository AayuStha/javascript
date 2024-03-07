<?php

interface vehicle{
	public function choose();
}
class MyBike implements vehicle{
	public function choose(){
		echo "Bike Choosed"."\n";	
	}	
}

class MyCar implements vehicle{
	public function choose(){
		echo "Car Choosed";
	}
}

$obj = new MyBike();
$obj -> choose();
$obj1= new MyCar();
$obj1 -> choose();
