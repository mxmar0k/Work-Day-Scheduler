// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//this code has a some console logs, so i check i dont do anything stupid, but certainly you can "//"" them.

//1. with the first line of the code "$function () {..." we apply a wrap on it, so that it is only executed when the dom has loaded completely.



$(function () {
  // 2. we selected all the .saveBtn classes and then added a click listener with an associated function.
  $(".saveBtn").on("click", function () {
    // 3. we got the id of the parent time-block with variable associated with the element-trigger (aka the click on the save button) and then find the closest ancestor element to the time block, so when we click the save button on hour 9, then it logs "hour-9" div id, because we ask for that att. 
    var timeBlockId = $(this).closest(".time-block").attr("id");
    console.log(timeBlockId);
    // 4. then we get the user input via the text area next to the save button by selecting all brothers and sisters of the description class, but refering only to the sibling of the clicked button. 
    var userInput = $(this).siblings(".description").val();
    // 5. Next we save the user input in the local storage using the time-block id as the key and the user inputs valueeee. Again we used a console log to check what we did with the user input, to check if it logs correctly.
    console.log(userInput);
    localStorage.setItem(timeBlockId, userInput);
  });

  // 6. nxt we applied the past, present, or future class to each time block, depending on the time
  /*7. we retrived the current hour with they dayjs and converted it to "h" format, just as a 2 digit number
  then we selected all the elements with the time block class and retrieved their id, since it is "hour-9" for example, we splited it and got the number as an integer
  we use a console.log to check if that worked.
  then we use if statements to check the hours and add the necessary class.
  */
  var currentHour = dayjs().format("H");
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var hour = parseInt(timeBlockId.split("-")[1]);
    console.log(hour);
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // 8. next we got the user input from the local storage and we distribute the corresponding saved value to its original place when it was saved. we used the same structure as before and we only got the stored value
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var savedInput = localStorage.getItem(timeBlockId);
    if (savedInput) {
      $(this).find(".description").val(savedInput);
    }
  });

  // 9. Finally we added this lines to add the current date in the header of the page using dayjs 
  var currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);


  var currentTime = dayjs();
  console.log(currentTime);
});
