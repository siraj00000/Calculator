
function getNumber(num){
    var result = document.getElementById("result")
    result.value += num;
}
function clr(){
    var result = document.getElementById("result")
    result.value = "";
}
function getAnswer (){
    var result = document.getElementById("result")
    result.value = eval(result.value);
}
function numSquare(num){
    var result = document.getElementById("result")    
    var s = sqrt(getNumber());
    result.value = s;
}
function sqr(num) { 
    var c = document.getElementById("result"); 
    var v = Math.sqrt(c.value); 
    c.value = v; 
}
function logit(num) { 
    var c = document.getElementById("result"); 
    var v = Math.log(c.value); 
    c.value = v; 
}
function trigSin(num,oprtr) {
    var m = document.getElementById("result"); 
    var v = Math.sin(m.value); 
    m.value = v; 
}
function trigTan(num,oprtr) {
    var m = document.getElementById("result"); 
    var v = Math.tan(m.value); 
    m.value = v; 
}
function trigCos(num,oprtr) {
    var m = document.getElementById("result"); 
    var v = Math.cos(m.value); 
    m.value = v; 
}