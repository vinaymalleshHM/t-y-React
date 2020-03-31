var d = document.getElementById('what');
var i = 100
function colrchange(){
    var n = Math.random()*i;
    var m = Math.random()*i;
    var o = Math.random()*i;
    var col = "rgb("+m+","+o+","+n+")";
    console.log(i);
    document.body.style.backgroundColor = col;
    document.getElementById('what').style.color = col;
}
function brght(){
    i += 5;
    document.getElementById('show').style.width = i+"px";
}
function lwr(){
    i -=5;
    document.getElementById('show').style.width = i+"px";
}
function update(){
    document.getElementById('show').style.width = i+"px";
}
setInterval(update, 100);