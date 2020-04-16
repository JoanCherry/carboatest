
const mockAnnonce = require("../mock/mockAnnonce.json");
const addToObject = require("./addToObject");

const errorObjectMocked = {
  "reference": "",
  "scam": false,
  "rules": [] 
};

test('errorObject.rules.length should be if error',() => { 
  expect(addToObject("my error", mockAnnonce.reference, errorObjectMocked)).toStrictEqual({
    "reference": "B300053623",
    "rules": [
      "my error",
    ],
    "scam": true,
  })

  
  })
 