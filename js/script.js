var timer = () => {
    let time = new Date();
    let hour = (time.getHours() % 12).toString();
    let minute = time.getMinutes().toString();
    let second = time.getSeconds().toString();
    let getTimer = document.getElementById('timer');

    //2length
    if (hour.length < 2) {
        hour = "0" + hour;
    }
    if (minute.length < 2) {
        minute = "0" + minute;
    }
    if (second.length < 2) {
        second = "0" + second;
    }
    //12hours
    if (time.getHours() < 12) {
        getTimer.innerHTML = hour + ":" + minute + ":" + second + "AM";
    } else {
        getTimer.innerHTML = hour + ":" + minute + ":" + second + "PM";
    }
    if (time.getHours() == 12) {
        getTimer.innerHTML = hour + ":" + minute + ":" + second + "PM";
    }
    //minute condition
    if (time.getMinutes() === 9) {
        window.open('https://www.w3schools.com/');
    }
    //color 
    let color = hour + minute + second;
    document.body.style.background = "#" + color;
    //date
    let day = time.getDay();
    let dates = time.getDate();
    let moths = time.getMonth();
    let year = time.getFullYear();
    let date = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let moth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let getDays = document.getElementById('date');
    let outputMoth = '';
    let inputDay = '';
    let outputDates = '';
    //day of week
    for (let i = 0; i < date.length; i++) {
        switch (day) {
            case i:
                inputDay = date[i];
                break;
        }
    }
    //ti of week
    switch (dates) {
        case 1:
        case 21:
        case 31:
            outputDates = "st";
            break;
        case 2:
        case 22:
            outputDates = "nd";
        case 3:
            outputDates = "rd";
            break;
        default:
            outputDates = "th";
            break;
    }
    //Month 
    for (let i = 0; i< moth.length; i++) {
        switch (moths) {
            case i:
                outputMoth = moth [i];
                break;
        }
    }
    getDays.innerHTML = inputDay + " " + dates +" " + "<sup>" + outputDates + "</sup>" + " " + outputMoth + " " + year;
     //condition
    if (inputDay == date[1] || date [2]) {
        document.getElementById('event').innerHTML = "Aerobic Time!";
    }
    if (inputDay == date[3]) {
        document.getElementById('event').innerHTML = "Sport Time!";
    }
    if (inputDay == date[4]) {
        document.getElementById('event').innerHTML = "Normal Day!";
    }
    if (inputDay == date[5]) {
        document.getElementById('event').innerHTML = "Movie Time!";
    }
    if (inputDay == date[0]) {
        document.getElementById('event').innerHTML = "Weekend!";
    }
    if (inputDay == date[6]) {
        document.getElementById('event').innerHTML = "Weekend!";
    }
    
}
setInterval(timer, 1000);
