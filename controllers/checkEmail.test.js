const checkEmail = require('./checkEmail')

describe('should return false if more than 70% of alphanum and less than 30% of numeric', () => {
    it('should return false', () => {
        const emailToTest = "j3su1s1t3st1234@montest.fr";
        const emailPartToTest = emailToTest.split("@")[0];
        const testResult = checkEmail(emailPartToTest);
        expect(testResult).toBe(false);
    });

    it('should return true', () => {
        const emailToTest = "jesuis1t3st@montest.fr";
        const emailPartToTest = emailToTest.split("@")[0];
        const testResult = checkEmail(emailPartToTest);
        expect(testResult).toBe(true);
    })
})