// events are wrote in Html so this not a good practice
function addStyle(){
   const element =  document.getElementById("add")
   element.className = 'addStyle';
}
function removeStyle(){
    const element =  document.getElementById("add")
    element.className = 'removeStyle';

}

const belement =  document.getElementById("one").onclick=function(){
          alert("You Clicked Me!!!");
          
          // belement.onclick = function(){
              //     alert("You Clicked Me!!!");
              //}
          
        }
        console.log(belement);


