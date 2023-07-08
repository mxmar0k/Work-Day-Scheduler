# Work-Day-Scheduler
This is a simple calendar app, that allows the user to save events for a typical working day (on first world countries, maybe only Europe, I actually cried a little realizing people can leave at 5).

You can find the repository here: https://github.com/mxmar0k/Work-Day-Scheduler

and the app, live, here: https://mxmar0k.github.io/Work-Day-Scheduler/ 

The app is simple, we have an html with 8 divs using this format:

    <div id="hour-9" class="row time-block">
        <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

This has an id "hour-9" div, with a text area, and a button to save whatever you choose to do in a working day, mainly. This will be important later.

On the html we also linked the dayjs to make sure our script works properly.

Now to the script!

The script is very simple, we have a $function(){...} to wrap the code and make it execute only when the dom has loaded completely. Here is an image of the loaded Dom:

![Alt text](<Captura de pantalla 2023-07-08 a la(s) 9.15.51.png>)


The first part of the js is a function to add an event to when we click the save button. We use a console.log to check that we are actually where we want to and that what we write is correct, finally we save the user input in the local storage, so when we open the page it is there(with the help of another function).

We also have a function to apply via .addclass different classes to each time block depending on the time. We use dayjs to get the current hour and put it only as two digits and then use if statements with >,<, and ==, comparison operators, to add those classes depending on the result of those operators. We use an split to split the "hour-09" and get only the number and convert it to an integer so we can make the comparisons properly.

Then we have another function to retrieve the user input and put it where it was originally saved.

Finally, we use another function to add the current date!

I added a current time just to make sure it logs the proper time.

This is how the app looks at 9 am:

![Alt text](<Captura de pantalla 2023-07-08 a la(s) 9.30.03.png>)

As we can see, it applies the present class to the current time (9) and future class to the next hours.

If we close it and re-open it, it shows the logged results (magic?)

Thank you!!
















