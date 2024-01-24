function msg() {
    alert("Hello World");
}
function getcube() {
    var number = document.getElementById("number").value;
    alert(number * number * number);
}
function totalelements() {
    var allgenders = document.getElementsByName("gender");
    alert("Total Genders:" + allgenders.length);
}
function countpara() {
    var totalpara = document.getElementsByTagName("p");
    alert("total p tags are:" + totalpara.length);
}
function countClass() {
    var totalClass = document.getElementsByClassName("xyz");
    alert("total class tags are:" + totalClass.length);
}
function showcommentform() {
    var data = "Name: <input type='text' name='name'><br>Comment: <br><textarea row s='5' cols='80'></textarea><br><input type='submit' value='Post Comments'>";
    document.getElementById('mylocate').innerHTML = data;
}
function validate(){
    var msg;
     if (document.myForm.userPass.value.length > 5){
        msg ="good";
    }
    else{
        msg="poor";
    }
    document.getElementById('mylocation').innerText=msg;
}

function clickSpan(){
    alert ("span is clicked");
}