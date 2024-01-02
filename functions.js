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

// displayItems ("Dog", "Cat", "Pony", "Hamster", "Tortoise");
// function displayItems(){
//     for (j=0; j<displayItems.arguments.length;j++)
//     document.write(displayItems.arguments[j]+ "<br>");
// }

//returning a value
// document.write(fixNames("the", "DALLAS", "CowBoys"))
// function fixNames()
// {
//     var s = "";
//     for (j = 0; j < fixNames.arguments.length; ++j)
//     s+= fixNames.arguments[j].charAt (0). toUpperCase()+ fixNames.arguments[j].substr(1).toLowerCase()+"";

//     return s.substr(0, s.length-1);
// }

//returning a array
var words = fixNames("the", "DALLAS", "CowBoys");
for (j = 0; j < words.length ; ++j)
    document.write(words[j]+ "<br>")
function fixNames()
{
    var s = new Array();
    for (j = 0; j < fixNames.arguments.length; ++j)
    s[j]= fixNames.arguments[j].charAt (0). toUpperCase()+ fixNames.arguments[j].substr(1).toLowerCase()+"";

    return s;
}