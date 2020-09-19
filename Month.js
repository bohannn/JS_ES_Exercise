export default function monthName(month) {

    var days = 0;
    var name;

    const monthnames = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'Devember'
    ];

    name = monthnames[month - 1];

    if (month == 2) {
        days = 28;
    }else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        days = 31;
    } else {
        days = 30;
    }

    return name, days;
}


