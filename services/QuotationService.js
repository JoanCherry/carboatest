const QuotationService = (obj) => {
    return new Promise((res, rej) =>                  
        setTimeout(() => {
            res(obj)
        }, 50)  
    ).then(() => 35000)
 }
 module.exports = QuotationService;