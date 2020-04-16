const BlacklistService = (obj) => {
    return new Promise((res, rej) =>                  
        setTimeout(() => {
            res(obj)
        }, 50)  
    ).then(obj => obj !== 'AA123AA')
 }
 module.exports = BlacklistService;