Feature: Specify Number of Events

Scenario: 32 is the number that will be default
Given app is loaded
When user hasnt input number in textbox
Then by deafult 32 events will be shown

Scenario: number of events can be changed
Given app is loaded
When number has been inputted inside the textbox
Then only the number inputted of events will be shown