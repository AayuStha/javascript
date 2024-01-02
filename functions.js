// function myFunction(a,b) {
//   return a*b;
// }
// var x = myFunction(4,3);
// document.write(x);

// var x = function(a,b) {return a*b};
// var z = x(4,3);
// document.write(z);

// displayItems ("Dog", "Cat", "Pony", "Hamster", "Tortoise");
// function displayItems(v1, v2, v3 ,v4, v5){
//     document.write(arguments[0] + "<br>");
//     document.write(v2 + "<br>");
//     document.write(v3 + "<br>");
//     document.write(v4 + "<br>");
//     document.write(v5 + "<br>");

// }

displayItems ("Dog", "Cat", "Pony", "Hamster", "Tortoise");
function displayItems(){
    for (j=0; j<displayItems.arguments.length;j++)
    document.write(displayItems.arguments[j]+ "<br>");
}