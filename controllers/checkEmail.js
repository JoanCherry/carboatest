const alphanumRegex = /[a-zA-Z0-9]/g;
const numRegex = /\d/g;

const checkEmail = (email) => {
    const emailPartToTest = email.split("@")[0];
    const lenghtPartofEmailToTest = emailPartToTest.length;
    const percentageOfAlphanum = emailPartToTest.match(alphanumRegex) ? (emailPartToTest.match(alphanumRegex).length * 100) / lenghtPartofEmailToTest : null;
    const percentageOfNum = emailPartToTest.match(numRegex) ? (emailPartToTest.match(numRegex).length * 100) / lenghtPartofEmailToTest : null;
   
    if (percentageOfAlphanum > 70 && percentageOfNum < 30) 
        return true;
    return false;
}
module.exports = checkEmail;