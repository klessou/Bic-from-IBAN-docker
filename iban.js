var BICFromIBAN = require ("./Bic-from-IBAN/BICFromIBAN.js");

// Return a String with a Bic code 
var BIC = BICFromIBAN.getBIC("DZ4000400174401001050486");

console.log(BIC);
