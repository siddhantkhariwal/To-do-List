
module.exports.getDate = getDate;

function getDate(){

var today = new Date();
    var options = {
        weekday :"long",
        day : "numeric",
        month : "long"
    };

    var day = today.toLocaleDateString("en-US", options);
//the options parameter is passed in for passing options object to the date, and encoding it in english us(which is the locale thats why to locale date string, can write hi-IN for hindi as well).
return day;
}

module.exports.getDay = getDay;

function getDay(){

    var today = new Date();
        var options = {
            weekday :"long"
        };
    
        var day = today.toLocaleDateString("en-US", options);
    //the options parameter is passed in for passing options object to the date, and encoding it in english us(which is the locale thats why to locale date string, can write hi-IN for hindi as well).
    return day;
    }