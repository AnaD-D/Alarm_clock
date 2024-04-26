# Alarm Clock Code Documentation #

This JavaScript code implements a simple alarm clock. The clock displays the current time and allows the user to set an alarm. When the alarm time is reached, the alarm rings.

## HTML Elements ##

The following HTML elements are used in this code:

* h1 with the class current-time: displays the current time
* div with the class content: contains the alarm setting UI
* Three select elements: used to set the alarm time
* button: used to set or clear the alarm

## Variables

* alarmTime: holds the alarm time
* isAlarmSet: indicates if the alarm is set
* ringtone: an Audio object that plays the alarm sound

## Functionality

The code initializes the variables and populates the hour, minute, and AM/PM select menus. It then sets up a setInterval function to update the current time every second and check if the alarm should ring.

The setAlarm function sets or clears the alarm based on the current select menu values. If the alarm is set and the current time matches the alarm time, the ringtone.play() method is called to play the alarm sound.

## Event Listeners

A click event listener is added to the set alarm button, which calls the setAlarm function when clicked.

## Usage

1. Select the desired alarm time using the hour, minute, and AM/PM select menus.
2. Click the set alarm button to set the alarm. The button text changes to "Clear Alarm".
3. To clear the alarm, click the "Clear Alarm" button. The button text changes back to "Set Alarm".
4. When the alarm time is reached, the alarm will ring.