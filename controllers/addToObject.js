const errorObject = {
    "reference": "",
    "scam": false,
    "rules": [] 
};

const addToObject = (rule, ref) => {
    errorObject.rules.push(rule);
    errorObject.scam = true;
    errorObject.reference = ref;
    return errorObject;
};

module.exports = addToObject;
global.errorObject = errorObject;