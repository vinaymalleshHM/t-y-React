var playing = false
var page = 0

setTimeout(function(){
    document.getElementById("startmenutext").innerHTML = "Loading UI Buttons."
}, 0)
setTimeout(function(){
    document.getElementById("startmenutext").innerHTML = "Loading UI Buttons.."
}, 1000)
setTimeout(function(){
    document.getElementById("startmenutext").innerHTML = "Loading UI Buttons..."
}, 2000)
setTimeout(function(){
    document.getElementById("startmenutext").innerHTML = "Dots And Boxes"
    document.getElementById("startmenubuttons").style.display = "block"
}, 3000)
function play(){
    playing = true
    if (playing == true){
        document.getElementById("startmenutext").innerHTML = "Loading."
        document.getElementById("startmenubuttons").style.display = "none"
        setTimeout(function(){
            document.getElementById("startmenutext").innerHTML = "Loading.."
        }, 1000);
        setTimeout(function(){
            document.getElementById("startmenutext").innerHTML = "Loading..."
        }, 2000)
        setTimeout(function(){
            document.getElementById("startmenutext").innerHTML = "Started!"
        }, 3000)
        setTimeout(function(){
            document.getElementById("startmenutext").innerHTML = "Dots And Boxes"
            setInterval(loop, 1000 / FPS);
            document.getElementById("undergameuiId").style.display = "block"
        }, 3800)
    }
    console.log("Start")
}
function rules(){
    page = 1
    console.log("Rules")
    document.getElementById("startmenutext").innerHTML = "Loading Rules."
    setTimeout(function(){
        document.getElementById("startmenutext").innerHTML = "Loading Rules.."
    }, 1000);
    setTimeout(function(){
        document.getElementById("startmenutext").innerHTML = "Loading Rules..."
    }, 2000)
    setTimeout(function(){
        document.getElementById("startmenubuttons").style.display = "none"
        document.getElementById("startmenutext").innerHTML = "Rules Menu"
        document.getElementById("backbutton").style.display = "block"
        document.getElementById("ruletextback").style.display = "block"
    }, 3000)
}
function back(){
    if (page == 2){
        document.getElementById("startmenubuttons").style.display = "block"
        document.getElementById("backbutton").style.display = "none"
        document.getElementById("startmenutext").innerHTML = "Dots And Boxes"
        document.getElementById("uicolorpanel").style.display = "none"
        page = 0
    }else if (page == 1){
        document.getElementById("startmenubuttons").style.display = "block"
        document.getElementById("backbutton").style.display = "none"
        document.getElementById("ruletextback").style.display = "none"
        document.getElementById("startmenutext").innerHTML = "Dots And Boxes"
        page = 0
    }
    console.log("Back")
}
function uioptions(){
    page = 2
    console.log("UI OPTIONS")
    document.getElementById("startmenutext").innerHTML = "Loading UI Options."
    setTimeout(function(){
        document.getElementById("startmenutext").innerHTML = "Loading UI Options.."
    }, 1000);
    setTimeout(function(){
        document.getElementById("startmenutext").innerHTML = "Loading UI Options..."
    }, 2000)
    setTimeout(function(){
        document.getElementById("startmenubuttons").style.display = "none"
        document.getElementById("startmenutext").innerHTML = "UI Options Menu"
        document.getElementById("backbutton").style.display = "block"
        document.getElementById("uicolorpanel").style.display = "block"
    }, 3000)
}
function uicolor(color){
    if (color == "Pink"){
        document.getElementById("ruletextback").style.backgroundColor = "#ed3472";
        document.getElementById("uicolorpanel").style.backgroundColor = "#ed3472";
        document.getElementById("body").style.backgroundColor = "#822c49";
        document.getElementById("colormebutton1").style.background = "#b52b5a";
        document.getElementById("colormebutton2").style.background = "#b52b5a";
        document.getElementById("colormebutton3").style.background = "#b52b5a";
        document.getElementById("colormebutton4").style.background = "#b52b5a";
        document.getElementById("colormebutton5").style.background = "#b52b5a";
        document.getElementById("colormebutton6").style.background = "#b52b5a";
        document.getElementById("colormebutton7").style.background = "#b52b5a";
        document.getElementById("colormebutton8").style.background = "#b52b5a";
        document.getElementById("colormebutton9").style.background = "#b52b5a";
        document.getElementById("colormebutton10").style.background = "#b52b5a";
        document.getElementById("backbutton").style.background = "#b52b5a";
    }else if (color == "Blue"){
        document.getElementById("ruletextback").style.backgroundColor = "#0004ff";
        document.getElementById("uicolorpanel").style.backgroundColor = "#0004ff";
        document.getElementById("body").style.backgroundColor = "#131459";
        document.getElementById("colormebutton1").style.background = "#17199c";
        document.getElementById("colormebutton2").style.background = "#17199c";
        document.getElementById("colormebutton3").style.background = "#17199c";
        document.getElementById("colormebutton4").style.background = "#17199c";
        document.getElementById("colormebutton5").style.background = "#17199c";
        document.getElementById("colormebutton6").style.background = "#17199c";
        document.getElementById("colormebutton7").style.background = "#17199c";
        document.getElementById("colormebutton8").style.background = "#17199c";
        document.getElementById("colormebutton9").style.background = "#17199c";
        document.getElementById("colormebutton10").style.background = "#17199c";
        document.getElementById("backbutton").style.background = "#17199c";
    }else if (color == "Orange"){
        document.getElementById("ruletextback").style.backgroundColor = "#ff9d00";
        document.getElementById("uicolorpanel").style.backgroundColor = "#ff9d00";
        document.getElementById("body").style.backgroundColor = "#99630c";
        document.getElementById("colormebutton1").style.background = "#c98820";
        document.getElementById("colormebutton2").style.background = "#c98820";
        document.getElementById("colormebutton3").style.background = "#c98820";
        document.getElementById("colormebutton4").style.background = "#c98820";
        document.getElementById("colormebutton5").style.background = "#c98820";
        document.getElementById("colormebutton6").style.background = "#c98820";
        document.getElementById("colormebutton7").style.background = "#c98820";
        document.getElementById("colormebutton8").style.background = "#c98820";
        document.getElementById("colormebutton9").style.background = "#c98820";
        document.getElementById("colormebutton10").style.background = "#c98820";
        document.getElementById("backbutton").style.background = "#c98820";
    }else if (color == "Purple"){
        document.getElementById("ruletextback").style.backgroundColor = "#a600ff";
        document.getElementById("uicolorpanel").style.backgroundColor = "#a600ff";
        document.getElementById("body").style.backgroundColor = "#450b63";
        document.getElementById("colormebutton1").style.background = "#721aa1";
        document.getElementById("colormebutton2").style.background = "#721aa1";
        document.getElementById("colormebutton3").style.background = "#721aa1";
        document.getElementById("colormebutton4").style.background = "#721aa1";
        document.getElementById("colormebutton5").style.background = "#721aa1";
        document.getElementById("colormebutton6").style.background = "#721aa1";
        document.getElementById("colormebutton7").style.background = "#721aa1";
        document.getElementById("colormebutton8").style.background = "#721aa1";
        document.getElementById("colormebutton9").style.background = "#721aa1";
        document.getElementById("colormebutton10").style.background = "#721aa1";
        document.getElementById("backbutton").style.background = "#721aa1";
    }else if (color == "Default"){
        document.getElementById("ruletextback").style.backgroundColor = "";
        document.getElementById("uicolorpanel").style.backgroundColor = "";
        document.getElementById("body").style.backgroundColor = "";
        document.getElementById("colormebutton1").style.background = "";
        document.getElementById("colormebutton2").style.background = "";
        document.getElementById("colormebutton3").style.background = "";
        document.getElementById("colormebutton4").style.background = "";
        document.getElementById("colormebutton5").style.background = "";
        document.getElementById("colormebutton6").style.background = "";
        document.getElementById("colormebutton7").style.background = "";
        document.getElementById("colormebutton8").style.background = "";
        document.getElementById("colormebutton9").style.background = "";
        document.getElementById("colormebutton10").style.background = "";
        document.getElementById("backbutton").style.background = "";
    }
}