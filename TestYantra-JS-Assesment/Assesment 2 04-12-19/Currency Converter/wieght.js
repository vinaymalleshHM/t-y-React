function kg() {
    var covkg = document.kgs.gnum.value;
    if (covkg == null || covkg == 0) {
        alert("please enter the KG value");
    } else {
        var gg = covkg * 1000;
        document.getElementById('inp1').value ="";
    }


    document.getElementById("grams").innerHTML = gg + " " + "g";
}


function gram() {
    var covg = document.kgs1.gnum1.value;
    if (covg == null || covg == 0) {
        alert("please enter the Gram value");
    } else {
        var g = covg/ 1000;
        document.getElementById('inp2').value ="";
    }


    document.getElementById("grams").innerHTML = g + " " + "kg";
    
}