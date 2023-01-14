Feature: Show/Hide an Event Details

Scenario: Event element is collapsed by default
Given A collapsed event element containing events is loaded on the page
When  the user opens the app and performs no action
Then the event element is collapsed by default

Scenario: User expands an event to look at details
Given the event information has been loaded
When a user clicks detail button in the event element
Then the event element will expand to show more details about the event

Scenario: User can collapse an event to hide its details
Given the event is showing the event details
When the user clicks on the details button
Then the event details is collapsed