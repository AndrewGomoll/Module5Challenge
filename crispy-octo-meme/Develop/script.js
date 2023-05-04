//sets todayDate to currenyDay id in index.html
var todayDate = document.getElementById("currentDay");
//sets currentDate to the current Date on loading
var currentDate = new Date();
//day and month set to the current day and month
var day = String(currentDate.getDate()).padStart(2, '0');
var month = String(currentDate.getMonth() + 1).padStart(2, '0');
//switch statement changes the month from a number to the 
switch(month)
{
    case '00':
        month = "January";
        break;

    case '01':
        month = "Febuary";
        break;

    case '02':
        month = "March";
        break;

    case '03': 
        month = "April";
        break;
    
    case '04':
        month = "May";
        break;
    
    case '05':
        month = "June";
        break;
    
    case '06':
        month = "July";
        break;

    case '07':
        month = "August";
        break;

    case '08':
        month = "September";
        break;
    
    case '09':
        month = "October";
        break;

    case '10': 
        month = "November";
        break;

    case '11':
        month = "December";
        break;
    
}
//sets correct format to display in html
currentDate = month + ' ' + day;

todayDate.innerHTML = currentDate;


$(document).ready(function () {
    //sets the time and inputed text to local storage
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
   //compares the current time to each time block and displays the correct css based on the time
    function timeTracker() {
        var currentTime = new Date();

        var currentHour = currentTime.getHours();

        $(".time-block").each(function () {
            var timeBlock = parseInt(Math.abs($(this).attr("id").split("hour")[1]));

            if (timeBlock < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    timeTracker();
//calls all data stored in local storage and sets it to the it's time block
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));


});