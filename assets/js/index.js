let nowDate = moment().format('MM/DD/YYYY');
let nowTime = moment().format("hh:mm:ss A");

// Set the initial date/time.
$("#date").text(nowDate);
$("#clocker").text(nowTime);

// Update the time
function setTime() {
    let nowTime = moment().format("hh:mm:ss A");
    $("#clocker").text(nowTime);
}
// Run our setTime() function
setInterval(setTime, 1000);
