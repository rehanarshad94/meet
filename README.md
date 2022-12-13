PROJECT - MEET APP  


-USER STORIES

As a user, I should be able to show & hide an event's details, so that it will be easier to browse through the app.

As a user, I should be able to specify the number of events, so that I can navigate through app with ease.

As a user, I should be able to use the app when offline, so that I can stay up-to date with the latest information.

As a user, I should be able to see all the data, so that I can stay informed on up-coming events. 







--Gherkin (“Given-When-Then”) syntax--


-SHOW/HIDE AN EVENT'S DETAILS

Scenario 1: An event element is collapsed by default.
    Given an event element is collapsed by default, 
    When the user opens the application,
    Then the user should see a list of all events listed.


Scenario 2: User can expand an event to see its details.
    Given a user can expand an event to see its details,
    When the user clicks on an event, 
    Then the user shall see all the details for that specific event.


Scenario 3: User can collapse an event to hide its details.
    Given the user can collapse an event to hide its details,
    When the user clicks on an event,
    Then the details for that event should no longer appear.




-SPECIFY NUMBER OF EVENTS

Scenario 1: When user hasn’t specified a number, 32 is the default number.
    Given the user hasnt specified a number,
    When the user opens the app,
    Then by default the user will see a list of 32 events.


Scenario 2: User can change the number of events they want to see.
    Given the user can change the number of events they want to see,
    When they have set a number of events to be shown,
    Then the user will only see the predetermined number of events.




-USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection.
    Given the cached data will be shown when there is no internet connection,
    When the app is being used offline,
    Then the data i have stored will still be shown.


Scenario 2: Show error when user changes the settings (city, time range).
    Given that there is a error message,
    When a user attempts to change their settings,
    Then user will have to wait for internet connection. 




-DATA VISUALIZATION

Scenario 1: Show a chart with the number of upcoming events in each city.
    Given a chart with number of upcoming events will be shown,
    When a user chooses a certain city,
    Then the user can see all the details for that event in the city selected. 




