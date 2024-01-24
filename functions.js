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
// var words = fixNames("the", "DALLAS", "CowBoys");
// for (j = 0; j < words.length ; ++j)
//     document.write(words[j]+ "<br>")
// function fixNames()
// {
//     var s = new Array();
//     for (j = 0; j < fixNames.arguments.length; ++j)
//     s[j]= fixNames.arguments[j].charAt (0). toUpperCase()+ fixNames.arguments[j].substr(1).toLowerCase()+"";

//     return s;
// }

//object with no properties or methods
// var emptyObject = {};

//object wit single property
// var person = {firstName: "John"};

//object with single methods
// var message={
//     showMessage : function(val){
//     alert(val);
//     }
// };
// message.showMessage("Hello World");

//object with properties and methods
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 15,
//     getFullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };
// document.write(person.getFullName());

// //attach properties and methods to person 
// var person = new Object();
// person.firstName = "James"; person["lastName"]="Bond";
// person.age = 25;
// person.getFullName = function(){
//     return this.firstName + ' ' + this.lastName;
// };
// document.write(person.getFullName());

//using constructor
// function emp(id,name,salary){
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
// }
// e = new emp(103,"Vimal Jaiswal",30000);
// document.write(e.id + ' ' + e.name + ' ' + e.salary);

//Accessing objects properties and methods
// var person = {
// firstName: "James",
// lastName : "Bond",
// age : 25,
// getFullName : function(){
//     return this.firstName + ' ' + this.lastName;
// },
// secondPerson:{
//     address: "ktm" , temp_add:"Bkt"}
// };
// document.write(person.secondPerson.address);

//passing Objects to function
// function changeFirstName(per){
//     per.firstName = "Steve";
// }
// var person = {firstName : "Bill"};
// changeFirstName(person);
// document.write(person.firstName);

// var person = {firstName : "John"};
// var anotherPerson = person;
// anotherPerson.firstName = "Bill";
// document.write(person.firstName);

//date object 
// var varName = new Date();
// document.write(varName);

// var myDate = new Date(milliseconds)

// var myDate = new Date();
// console.log(myDate.toDateString());

// var myDate = new Date();
// console.log(myDate.toTimeString());

// //prototype object
// function Person(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
// }
// Person.prototype.address = "Ktm";   
// a = new Person("Vimal", "Jaiswal" ,30 , "Ktm");
// console.log(a.firstName, a.lastName, a.age, a.address);

// Date.prototype.myMet = function (){
//     if (this.getMonth() == 0){this.myProp = "January"};
//     if (this.getMonth() == 1){this.myProp = "February"};
//     if (this.getMonth() == 2){this.myProp = "March"};
//     if (this.getMonth() == 3){this.myProp = "April"};
//     if (this.getMonth() == 4){this.myProp = "May"};
//     if (this.getMonth() == 5){this.myProp = "June"};
//     if (this.getMonth() == 6){this.myProp = "July"};
//     if (this.getMonth() == 7){this.myProp = "August"};
//     if (this.getMonth() == 8){this.myProp = "September"};
//     if (this.getMonth() == 9){this.myProp = "October"};
//     if (this.getMonth() == 10){this.myProp = "November"};
//     if (this.getMonth() == 11){this.myProp = "December"}  
// };
// var d = new Date();
// d.myMet();
// var monthname = d.myProp;
// console.log(monthname);


function student (id, name , address, phone){
    this.id = id;
    this.name = name;
    this.address = address;
    this. phone= phone;
}
studentOne = new student (1,"Aayush","Lubhu",9864673159 );
studentTwo = new student (1,"Mayank","Imadol",9864673159 );
console.log (studentOne.phone);
console.log (studentTwo.phone);

delete studentOne.phone;
delete studentTwo.phone;


console.log (studentOne.phone);
console.log (studentTwo.phone);


