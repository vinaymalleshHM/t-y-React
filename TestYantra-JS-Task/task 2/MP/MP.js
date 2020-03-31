


var markup = function(id, name, author, image){
    
    return `
    
    
    <div class="card">
        
        <div class="panel">
        
        <div class="title">
            ${name}
        </div>
        
        <div class="author">
            ${author}
        </div>
        
        <div class="control">
            
            <button onclick="mint()" class="prev">
            
            <i class="material-icons">fast_rewind</i>
                
                
            </button>
            
            <button id="playbtn${id}" onclick="play(this, ${id})" class="playbtn">
            
            <i class="material-icons">play_arrow</i>
                
            </button>
            
            <button onclick="maxt()" class="next">
            
             <i class="material-icons">fast_forward</i>
                
            </button>
            
        </div>
            
        </div>
        
        <div class="image">
        
        <img src="${image}"/>
            
        </div>
        
            
        </div>
        
        
        `;
    
};

var aud = new Audio(); 

var lastsong = null;


    

var songs = [


{
    name: "Turkish march",
    artist: "Wolfgang Amadeus Mozart",
    poster: "https://cdn.pixabay.com/photo/2014/05/21/15/47/piano-349928_1280.jpg",
    song: "https://getuserip.000webhostapp.com/Turkish%20March.mp3",
    isPlay: false
},



{
    name: "Dance of the knights",
    artist: "Sergey Prokofiev",
    poster: "https://cdn.pixabay.com/photo/2016/12/25/22/32/gladiator-1931077_1280.jpg",
    song: "https://getuserip.000webhostapp.com/Prokofiev%20Dance%20Of%20The%20Knights.mp3",
    isPlay: false
},



{
    name: "Largo al factotum",
    artist: "Joacchino Rossini",
    poster: "https://cdn.pixabay.com/photo/2017/05/12/12/42/dresden-2306937_1280.jpg",
    song: "https://getuserip.000webhostapp.com/%D0%A5%D0%B2%D0%BE%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%94._-_%D0%9A%D0%B0%D0%B2%D0%B0%D1%82%D0%B8%D0%BD%D0%B0%20%D0%A4%D0%B8%D0%B3%D0%B0%D1%80%D0%BE%20%D0%B8%D0%B7%20%D0%BE%D0%BF%D0%B5%D1%80%D1%8B%20_%D0%A1%D0%B5%D0%B2%D0%B8%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9%20%D1%86%D0%B8%D1%80%D1%8E%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA_.mp3",
    isPlay: false
    
    
    
    
    // link:   https://youtu.be/Ens1M77Jc7o
    
    
    
    
    
    /*
    
    text: "
Largo al factotum della citta.
Presto a bottega che l'alba e gia.
Ah, che bel vivere, che bel piacere
per un barbiere di qualita!
Ah, bravo Figaro!
Bravo, bravissimo!
Fortunatissimo per verita!
Pronto a far tutto,
la notte e il giorno
sempre d'intorno in giro sta.
Miglior cuccagna per un barbiere,
vita piu nobile, no, non si da.
Rasori e pettini
lancette e forbici,
al mio comando
tutto qui sta.
V'e la risorsa,
poi, de mestiere
colla donnetta... col cavaliere...
Tutti mi chiedono, tutti mi vogliono,
donne, ragazzi, vecchi, fanciulle:
Qua la parruca... Presto la barba...
Qua la sanguigna...
Presto il biglietto...
Qua la parruca, presto la barba,
Presto il biglietto, ehi!
Figaro! Figaro! Figaro!, ecc.
Ahime, che furia!
Ahime, che folla!
Uno alla volta, per carita!
Figaro! Son qua.
Ehi, Figaro! Son qua.
Figaro qua, Figaro la,
Figaro su, Figaro giu,
Pronto prontissimo son come il fumine:
sono il factotum della citta.
Ah, bravo Figaro! Bravo, bravissimo;
a te fortuna non manchera.
"
    
    */
    
},

{
    name: "Symphony  #40",
    artist: "Wolfgang Amadeus Mozart",
    poster: "https://cdn.pixabay.com/photo/2017/11/13/22/37/violin-2946994_1280.jpg",
    song: "https://getuserip.000webhostapp.com/%D0%9C%D0%BE%D1%86%D0%B0%D1%80%D1%82_-_%D0%A1%D0%B8%D0%BC%D1%84%D0%BE%D0%BD%D1%96%D1%8F%20N40.mp3",
    isPlay: false
}

];


window.onscroll = function (){
    
    var nav = document.getElementById("nav");
    var textb = document.getElementById("text");
    
      textb.style.transform = "translate(0, -"+window.scrollY/2+"px)"
    
    if(window.scrollY >= 145){
    
    nav.style.background = "#07CFD4";
    
  
    
    }else {
    
    nav.style.background = "transparent";
        
    }
    
}



window.onload = function (){
    
    var container = document.getElementById("container");
    
    for(var i=0; i<=songs.length - 1; i++){
    
    container.innerHTML += markup(i, songs[i].name, songs[i].artist, songs[i].poster);
    
    }
    var pre = document.getElementById("pre");
   
   pre.style.display = "none";
   
   
}


function opensearch(){

   document.getElementById("sbar").style.right = "0";
   
   scrollTo(0, 145);
    
}

function openm(){
    
    document.getElementById("drop").style.left = "0";
    
}

function closem(){
    
    document.getElementById("drop").style.left = "-300px";
    
}

function closesearch(){

   document.getElementById("sbar").style.right = "-100%";
   
   document.getElementById("inp").value = "";
   
  var cardc = document.getElementsByClassName("card");
  
  for(var i = 0; i<=cardc.length-1; i++){
      
      cardc[i].style.display = "";
      
  }
    
}


function search(){
    var m = document.getElementsByClassName("card");
    var inp = document.getElementById("inp").value.toUpperCase();
for (var i = 0; i <= m.length-1; i++){
    if(m[i].innerHTML.toUpperCase().indexOf(inp) != -1 ){
        m[i].style.display = "";
    }else {
         m[i].style.display = "none";
    }
  }
}


function mint(){
var isPlaying = aud.currentTime > 0 && !aud.paused && !aud.ended && aud.readyState > 2; 
    
    if (isPlaying) {  
    aud.currentTime = aud.currentTime-10;
    }
}


function maxt(){
var isPlaying = aud.currentTime > 0 && !aud.paused && !aud.ended && aud.readyState > 2; 
    
    if (isPlaying) {  
    aud.currentTime = aud.currentTime+10;
    }
}






function play(e, i){


    
    if(songs[i].isPlay == false){
    
    var loadmusic = document.getElementById("loadmusic");
    
    loadmusic.style.transform = "scaleY(1)";
    
    
    aud.addEventListener('loadeddata', function() {
    
    loadmusic.style.transform = "scaleY(0)";
       
    }, false);
    
    
    if(lastsong == null){
        
        e.innerHTML = "<i class='material-icons'>pause</i>";
        
        aud.src = songs[i].song;
        
        aud.play();
        
        songs[i].isPlay = true;
        
        lastsong = i;
        
        }else {
            
            songs[lastsong].isPlay = false;
            
            document.getElementById("playbtn"+lastsong).innerHTML = "<i class='material-icons'>play_arrow</i>";
            
            e.innerHTML = "<i class='material-icons'>pause</i>";
        
        aud.src = songs[i].song;
        
        aud.play();
        
        songs[i].isPlay = true;
        
        lastsong = i;
            
        }
        
        
        
    }else {
    
    var isPlaying = aud.currentTime > 0 && !aud.paused && !aud.ended && aud.readyState > 2; 
    
    if (isPlaying) {  
        
        e.innerHTML = "<i class='material-icons'>play_arrow</i>";
        
        songs[i].isPlay = false;
        
        aud.pause();
        
        lastsong = null;
        
        }
    }
}



