//Named Function 
function prime(n){
    for (let i = 0; i < n/2; i++) {
        if (n%i ===0) {
            return false
        }
        
    }
    return true;
}
var res = prime(5);
if (res) {
    console.log("the No is Prime")
}
else{
    console.log("the No is Not Prime")
}
