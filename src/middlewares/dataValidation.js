const states = [
    "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA",
   	"PB","PR","PE","PI","RJ","RN","RS", "RO", "RR","SC","SP","SE","TO"
]

/**
 * Verify if they are compatible.
 * @param {string} dateString - A date following the format 'YYYY-MM-DD'. 
 * @param {dateTime} dateTime - A date time
 */
function verifyDate(dateString, dateTime){
    const day = dateString[2], month = dateString[1], year = dateString[0];
    return dateTime.getDate() === parseInt(day) && dateTime.getMonth()+1 === parseInt(month) && dateTime.getFullYear() === parseInt(year)
}

 /**
  * Receives and validates the dates.
  * @param {string} dateStart -  A date following format 'YYYY-MM-DD'.
  * @param {string} dateEnd -  A date following format 'YYYY-MM-DD'.
  */

function validateDate (dateStart, dateEnd){
    if(dateStart === null || dateEnd === null) return false;
   
    const splitStart = dateStart.split('-');
    const splitEnd = dateEnd.split('-');

    if(splitStart === null|| splitEnd === null) return false;

    const dayStart = splitStart[2], monthStart = splitStart[1]-1, yearStart = splitStart[0];
    const dayEnd = splitEnd[2], monthEnd = splitEnd[1]-1,yearEnd = splitEnd[0];
   
    const currentDate = new Date();
    const tryDateStart = new Date(yearStart, monthStart, dayStart);
    const tryDateEnd = new Date(yearEnd, monthEnd, dayEnd);
    
    if(tryDateEnd < tryDateStart || tryDateStart > currentDate || tryDateEnd > currentDate) return false;

    return  verifyDate(splitStart, tryDateStart) && verifyDate(splitEnd, tryDateEnd);
}

/**
 * This is a middleware function responsible
 * to validate the request body by checking if
 * the state, dateStart and endStart are valid.
 */
module.exports = async(req,res,next)=>{
    try {
        const{state, dateStart, dateEnd}  = req.query;
        
        const stateExist = states.find(element => element === state);

        if(!(validateDate(dateStart,dateEnd))) {
            return res.status(400).json({message: "Invalid Date"});
        }

        if(!stateExist) {
            return res.status(400).json({message:"State does not exist"});
        }
    
        return next();
    }catch(error) {
        return res.status(500).json({message:"Something went wrong"});
    }
}

