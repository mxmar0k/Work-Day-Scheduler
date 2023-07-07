// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//this code has a lot of console logs, so i check i dont do anything stupid, but certainly you can "//"" them.

//1. with the first line of the code "$function () {..." we apply a wrap on it, so that it is only executed when the dom has loaded completely.



$(function () {
  // 2. we selected all the .saveBtn classes and then added a click listener with an associated function.
  $(".saveBtn").on("click", function () {
    // 3. we got the id of the parent time-block with variable associated with the element-trigger (aka the click on the save button) and then find the closest ancestor element to the time block, so when we click the save button on hour 9, then it logs "hour-9" div id, because we ask for that att. 
    var timeBlockId = $(this).closest(".time-block").attr("id");
    console.log(timeBlockId)
    // 4. then we get the user input via the text area next to the save button by selecting all brothers and sisters of the description class, but refering only to the sibling of the clicked button. 
    var userInput = $(this).siblings(".description").val();
    // 5. Next we save the user input in the local storage using the time-block id as the key and the user inputs value. Again we used a console log to check what we did with the user input, to check if it logs correctly.
    console.log(userInput)
    localStorage.setItem(timeBlockId, userInput);
  });
});
