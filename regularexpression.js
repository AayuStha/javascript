var str = "Hello World";
var n = str.search(/world/i); 

var str = "Hello World!";
var res = str.replace(/[o]/i, "Worlds");

var str = "Hello World!";
var red = str.search(/\s/i);

// document.write(n);
// document.write(res);
// document.write(red);

function myfunction(){
    var str = "Helloo World! Hello javascript";
    var patt1 = /lo*/g; //returns looo,l,lo
    var result= str.match(patt1);
    document.getElementById("demo").innerHTML = result;
}

function test1(){
    // var test = /a/.test("Helloo World! Hello javascript"); //returns true
    // return true;
    var tes = /a/.exec("Helloo World! Hello javascript"); 
    return tes

}
document.write(test1());

