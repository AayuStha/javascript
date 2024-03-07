<?php

trait Trait1 {
    public function method1() {
        echo "Trait1 method1";
    }
}

trait Trait2 {
    public function method2() {
        echo "Trait2 method2";
    }
}

class MyClass {
}

$obj = new MyClass();
$obj->method1(); // Output: Trait1 method1
$obj->method2(); // Output: Trait2 method2