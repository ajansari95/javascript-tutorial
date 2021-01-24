var loggedIn = true;
var isEmailVerified = true;
var cardValid = false;
var allowPurchase;

if(loggedIn && isEmailVerified && cardValid){
    allowPurchase = true;
}else{
    allowPurchase = false;
}

console.log("allowPurchase--> " + allowPurchase);
