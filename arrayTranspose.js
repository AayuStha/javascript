        // var emp = ["Ram", "Shyam", "Hari"];
        // emp[0] = "Ramesh";
        // emp[1] = "<br>Aayush";
        // emp[2] = "<br>sakshi";
        // document.write(emp[0]);
        // document.write(emp[1]);
        // document.write(emp[2]);

        // var fruits = ["Banana", "Orange", "Apple", "Mango"];
        // document.write("The length of array is : " +  fruits.length);

        //Associative Array
        // var person = {fname:"John", lname: "doe", age:25};
        // console.log(person);
        // document.write(person.fname);

        // var person =[];
        // person ["firstname"] = "John"
        // person ["lastname"] = "Doe"
        // person ["age"] = 21

        // // var x = person.length;  //person.length will return 0

        // person [0] = "John"
        // person [1] = "Doe"
        // person [2] = 21
        
        // var y = person[0];    //person [0] will return john
        // document.write(y);

        //multidimensional array
        // var person = [
        //     ['Work', 9],
        //     ['Eat', 1],
        //     ['Commute', 2],
        //     ['Play Game', 1],
        //     ['Sleep', 7]
        // ];
        // // document.write(person);
        
        // //access element of array
        // console.log(person[0][1]);
        // console.log(person[1][1]);
        // console.log(person[2][1]);
        // console.log(person[3][1]);
        // console.log(person[4][1]);

        //PUSH and pop
        // var arr = ["JS", "NodeJs"];
        // document.write("Original array: "+arr+"<br>");
        // document.write("Extracted elements: "+arr.pop()+"<br>");
        // document.write("Remaining elements:" +arr);

        //shift and unshift
        // var arr = [ "JS", "NodeJs", "Angular"];
        // var result = arr.shift();
        // // var result = arr.unshift("JS");
        // document.write(arr);

        // //splice (pos, deleteCount, .....items)
        // var arr = ["Monday", "Tuesday", "Thursday", "Friday"];
        // var result = arr.splice(2, 0, "Wednesday");
        // document.write(arr);

        // //slice (start, end)
        // var arr = ["Monday", "Tuesday", "Thursday", "Friday"];
        // var result = arr.slice(1, 3);
        // document.write(result);

        // //concat (..items)
        // var arr1 = ["Monday", "Tuesday", "Thursday", "Friday"];
        // var arr2 = ["Saturday", "Sunday"];
        // var result = arr1.concat(arr2);
        // document.write(result);

        //indexOf/lastIndexOf (item, pos)
        // var arr = ["Monday", "Tuesday", "Thursday", "Tuesday"];
        // var result = arr.lastIndexOf("Tuesday");
        // document.write(result);

        // //includes (value)
        // var arr = ["Monday", "Tuesday", "Thursday", "Tuesday"];
        // var result = arr.includes("Tuesday");
        // document.write(result);
        
        //find/filer (function)
                                                                // number 1  === .find
        // function isPRIME(value, index, arr){
        //     var start = 2;
        //     while (start <= Math.sqrt(value)){
        //         if (value % start++ < 1){
        //             return false;
        //         }
        //     }
        //     return value > 1;
        // }
        // document.write([8, 4, 7, 22].find(isPRIME));   //Ans = 7


                                                                //number 2  ==== .findIndex
        // function isPRIME(value, index, arr){
        //     var start = 2;
        //     while (start <= Math.sqrt(value)){
        //         if (value % start++ < 1){
        //             return false;
        //         }
        //     }
        //     return value > 1;
        // }
        // document.write([8, 4, 7, 22].findIndex(isPRIME));   //Ans = 2  

                                                                //number 2  ==== .forEach
        // var arr = ["C", "C++", "Python"];
        // arr.forEach(function(fetch){
        //     document.write(fetch);
        // });

        //map (func)
        // var arr = [2.1, 3.5, 4.7];
        // var result = arr.map(Math.round);
        // document.write(result);

        //sort (func)
        // var arr = [2,3,1,5,8];
        // var result = arr.sort(function compare (a,b){
        //     return b-a;
        // });
        // document.write(result);

        //reverse(func)
        // var arr = ["Zendaya", "Holland", "Cruise"];
        // var result = arr.reverse();
        // document.write(result);

        //split/join
        // var arr = ["Wanda", "Cap", "Vison"];
        // var result = arr.join("-");
        // document.write(result);

        //reduce (func, initial)
        // var arr =["2,3,1,5"];
        // var result = arr.reduce(function(accumulator, currentValue){
        //     return accumulator + currentValue;
        // },0 );
        // document.write (result);