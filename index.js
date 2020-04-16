const fs = require('fs');
let fichier = fs.readFileSync('annonce.json');
let annonce = JSON.parse(fichier);
const QuotationService = require('./services/QuotationService');
const BlacklistService = require('./services//BlacklistService');
const checkName = require("./controllers/checkName");
const checkEmail = require("./controllers/checkEmail");
const addToObject = require("./controllers/addToObject");

!checkName(annonce) ? addToObject("Contact name error", annonce.reference) : null;
!checkEmail(annonce.contacts.email) ? addToObject("Contact email error", annonce.reference) : null;
    
QuotationService(annonce.vehicle)
.then((val) => { 
    if ((annonce.price > val * 1.2) || (annonce.price < val * 0.8)) addToObject("QuotationService error", annonce.reference);
})
.then(() => BlacklistService(annonce.vehicle.registerNumber))
.then((val) => {
    if (!val) addToObject("BlacklistService error", annonce.reference);
})
.then(() => console.log(errorObject));

module.exports = addToObject;
