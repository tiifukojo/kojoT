const { format } = require("/xampp/htdocs/electron/config/db")

var price = {
    fbc:25,
    mps:10,
    hb_electrophoresis:50,
    sicking:15,
    blood_group:20,
    widal_test:15,
    lipidprofile:60,
    lft:80,
    kft:80,
    hb:15,
    upt:10,
    vdrl:15,
    retrosecreening:20


}

console.log(typeof price)

price.find

function pricevalue(price,param){
    if(arguments.length !== 2) {

        throw new Error(`arguments must be two in legnth`);

    }else if(typeof param !== "string") {

       throw new TypeError(`type string expected`);

   }else{

       for(key in price){
           if(key == param){

            return price[key];
           }
       }
   }
  
}


console.log(pricevalue(price,"mps"))