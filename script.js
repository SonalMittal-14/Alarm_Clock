let timeRef = document.querySelector(".timer-display");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const activeAlarms = document.querySelector(".activeAlarms");
let alarmsArray = [];
let alarmSound = new Audio("./alarm.mp3");

let initialHour = 0,
    initialMinute = 0,
    alarmIndex = 0;

const appendZero = (value) => (value < 10 ? "0" + value : value);

const searchObject = (parameter, value) => {
    let alarmObject,
    objIndex,
    exists = false;

    alarmsArray.forEach((alarm, index) => {
        if(alarm[parameter] == value) {
            exists = true;
            alarmObject = alarm;
            objIndex = index;
            return false;
        }
    });
    return [exists, alarmObject, objIndex];
};

function displayTimer() {
    let date = new Date();
    let [hours, minute, seconds] = [
        appendZero(date.getHours()),
        appendZero(date.getMinutes()),
        appendZero(date.getSeconds())
    ];
    timeRef.innerHTML = `${hours}:${minutes}:${seconds}`;

    alarmsArray.forEach((alarm,index) => {
        if(alarm.isActive) {
            if(`${alarm.alarmHour}:${alarm.alarmMinute}`  === `${hours}:${minutes}`){
                alarmSound.play();
                alarmSound.loop = true;
            }
        }
    });
}

const 