const checkName = require('./checkName')

describe('should check the length of the firstname and lastname', () => {
   
    it('should return true', () => {
        const mockContacts = {
            "contacts": {
                "firstName": "monnom",
                "lastName": "monprenom",
                "email": "montest@yopmail.fr",
                "phone1": {
                    "value": "0607080901"
                }
            }
        }
        const testName = checkName(mockContacts)
        expect(testName).toBe(true);
    });

    it('should return false', () => {
        const mockContacts = {
            "contacts": {
                "firstName": "mo",
                "lastName": "monprenom",
                "email": "montest@yopmail.fr",
                "phone1": {
                    "value": "0607080901"
                }
            }
        }
        const testName = checkName(mockContacts)
        expect(testName).toBe(false);
    })
})