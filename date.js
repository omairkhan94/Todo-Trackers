


module.exports.getDate = getDate;

function getDate(){
    const today = new Date();
    const options = {
    month : "long",
    day : "numeric",
    year : "numeric"

}
    return today.toLocaleDateString("en-US", options);

}



module.exports.getDay = getDay;

function getDay(){
    const today = new Date();
    const options = {
    weekDay : "long"
    }
    return today.toLocaleDateString("en-US", options);
   
    }
    

    console.log(module.exports);

