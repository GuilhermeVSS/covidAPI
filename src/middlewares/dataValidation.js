const states = [
    "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA",
   	"PB","PR","PE","PI","RJ","RN","RS", "RO", "RR","SC","SP","SE","TO"
]


/**
 * Receive one date and validates it.
 * @returns {boolean} - Returns true if the date is valid, otherwise returns false.
 * @param {string} date - A date following format 'YYYY-MM-DD'.
 */ 
function validateDate (date){
    if(date === null) return false;
    const newDate = date.split('-');
    if(newDate === null) return false;

    const day = newDate[2];
    const month = newDate[1];
    const year = newDate[0];

    var tryDate = new Date(year, month, day);

    return tryDate.getDate() === parseInt(day) && tryDate.getMonth() === parseInt(month) && tryDate.getFullYear() === parseInt(year)
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

        if(!(validateDate(dateStart) && validateDate(dateEnd))) {
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

