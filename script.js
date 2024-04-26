// Get the current time h1 element, content div, select menus, and set alarm button
const currentTime = document.querySelector("h1"),
  content = document.querySelector(".content"),
  selectMenu = document.querySelectorAll("select"),
  setAlarmBtn = document.querySelector("button");

// Initialize variables for alarmTime, isAlarmSet, and ringtone
let alarmTime, isAlarmSet, ringtone = new Audio("./media/clock_alert.mp3");

// Populate the first select menu with hour options (12 to 0)
for (let i = 12; i > 0; i--) {
  let hour = i < 10 ? "0" + i : i;
  let option = `<option value="${hour}">${hour}</option>`;
  selectMenu[0].insertAdjacentHTML("beforeend", option);
}

// Populate the second select menu with minute options (59 to 0)
for (let i = 59; i >= 0; i--) {
  let minute = i < 10 ? "0" + i : i;
  let option = `<option value="${minute}">${minute}</option>`;
  selectMenu[1].insertAdjacentHTML("beforeend", option);
}

// Populate the third select menu with AM/PM options
["AM", "PM"].forEach(ampm => {
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].insertAdjacentHTML("beforeend", option);
});

// Update the current time every second and check if the alarm should ring
setInterval(() => {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

  // Format the hours, minutes, seconds, and AM/PM
  h = h == 0 ? 12 : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  ampm = h >= 12 ? "PM" : "AM";

  // Update the current time h1 element
  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

  // If the alarm is set and the current time matches the alarm time, play the ringtone
  if (isAlarmSet && alarmTime == `${h}:${m}:${s} ${ampm}`) {
    ringtone.play();
  }
}, 1000);

// Set or clear the alarm based on the current select menu values
function setAlarm() {
  if (isAlarmSet) {
    // Clear the alarm
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");
    setAlarmBtn.innerText = "Set Alarm";
    isAlarmSet = false;
  } else {
    // Get the time from the select menus
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

    // Validate the time and set the alarm if it's valid
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
      return alert("Please, select a valid time to set alarm!");
    }

    isAlarmSet = true;
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
  }
}

// Add a click event listener to the set alarm button
setAlarmBtn.addEventListener('click', setAlarm);