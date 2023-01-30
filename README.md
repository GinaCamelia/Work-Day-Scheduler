# Work-Day-Scheduler
Created a simple calendar application that allows a user to save events for each hour of the day. The app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

The app should:

* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page


## Description

This code is a JavaScript/jQuery script that creates a dynamic calendar. When the page loads, it displays the current date and time using Moment.js library. Then, it checks the current time and updates the background color of each time block based on whether the time is in the past, present, or future.

The script also has a save and remove button that allows you to save and remove events from local storage. When you click the save button, the text inside the text area is stored in local storage using the corresponding time as the key. When you click the remove button, the text inside the text area is cleared, and the corresponding time key is removed from local storage.

On page reload, the code retrieves all the saved events from local storage and displays them in the text area associated with the corresponding time. Finally, the checkTime function is called to initialize the colors of each time block.

