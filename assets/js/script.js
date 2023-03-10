// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));
    // console.log($('#currentDay').text); 




    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
        // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    
$(".saveBtn").on("click", function(){
  // $(this) <== the button element clicked.
  // $(this).siblings('textarea')  <== the textarea element
  // $(this).parent() <== div element which is the parent element of button.
  let textAreaValue = $(this).siblings("textarea").val();
  let timeBlockId = $(this).parent().attr('id');
  ///add text value to the local storage///
  localStorage.setItem(timeBlockId, textAreaValue);
})

///Get information from local storage to save on text area//
let hourNineValue= localStorage.getItem("hour-9")
$("#hour-9 textarea").val(hourNineValue)

let hourTenValue= localStorage.getItem("hour-10")
$("#hour-10 textarea").val(hourTenValue)

let hourElevenValue= localStorage.getItem("hour-11")
$("#hour-11 textarea").val(hourElevenValue)

let hourTwelveValue= localStorage.getItem("hour-12")
$("#hour-12 textarea").val(hourTwelveValue)

let hourThirteenValue= localStorage.getItem("hour-13")
$("#hour-13 textarea").val(hourThirteenValue)

let hourFourteenValue= localStorage.getItem("hour-14")
$("#hour-14 textarea").val(hourFourteenValue)

let hourFifteenValue= localStorage.getItem("hour-15")
$("#hour-15 textarea").val(hourFifteenValue)

let hourSixteenValue= localStorage.getItem("hour-16")
$("#hour-16 textarea").val(hourSixteenValue)

let hourSeventeenValue= localStorage.getItem("hour-17")
$("#hour-17 textarea").val(hourSeventeenValue)


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
let nineHourVal= document.getElementById('hour-9')
let tenHourVal= document.getElementById('hour-10')
let elevenHourVal= document.getElementById('hour-11')
let twelveHourVal= document.getElementById('hour-12')
let thirteenHourVal= document.getElementById('hour-13')
let fourteenHourVal= document.getElementById('hour-14')
let fifteenHourVal= document.getElementById('hour-15')
let sixteenHourVal= document.getElementById('hour-16')
let seventeenHourVal= document.getElementById('hour-17')

let hourList= ['', '', '', '', '', '', '', '', '', nineHourVal, tenHourVal, elevenHourVal, twelveHourVal, thirteenHourVal, fourteenHourVal, fifteenHourVal, sixteenHourVal, seventeenHourVal]

for (let i = 9; i < hourList.length; i++) {
  if (dayjs().hour() == [i]) {
    hourList[i].setAttribute('style', 'background-color: #ff6961');
} else if (dayjs().hour() > [i]) {
    console.log('past');
    hourList[i].setAttribute('style', 'background-color: #d3d3d3');
  } else {
    hourList[i].setAttribute('style', 'background-color: #77dd77');
  };
};


  
