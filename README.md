# Reservation Client Calendar.

As its name suggests, this project consists of a client-side interface of a calendar through which a user can reserve a room for a single day. 
The client-side works in conjunction with the backend API provided by Stellic. The API is responsible for reserving a room, deleting reservations and listing current ones. 

All in all, the client side has three main functionalities: 

 - Adds a tenant to a day.
 - Removes a tenant from the day. 
 - Move between months and view reservations

# Index

 - **Dependencies**# Reservation Client Calendar.

As its name suggests, this project consists of a client-side interface of a calendar through which a user can reserve a room for a single day. 
The client-side works in conjunction with the backend API provided by Stellic. The API is responsible for reserving a room, deleting reservations and listing current ones. 

All in all, the client side has three main functionalities: 

 - Adds a tenant to a day.
 - Removes a tenant from the day. 
 - Move between months and view reservations

# Index

 - **Task Completion Status**
 - **Dependencies**
 - **Running the App**
 - **Project Structure**
	 - **The Flow of Program**
	 -	Module - Their Functions and purpose
 - **Existing Bugs**

## Task Completion
- Skeletal construction of calendar - Complete
- Ability to move between months and view reservations - Complete
- Ability to add a tenant and display it immediately without having to sending a request again and again - Complete
- Ability to delete a tenant and display it immediately without having to sending a request again and again - Complete
## Dependences

 - angular: "^1.4.14",
 -   bootstrap: "^4.5.0"
 -    http-server: "^0.12.3"
 
 Run ***npm install*** in Calendar_Client folder to install the required dependencies. 

## Running the App

 - Clone the Repo using the git command line or Github Desktop.
 - Navigate to folder: Calendar_Client. 
 - Open terminal and execute: "npm start"
	 - npm start executes the specified command against they key ***start***
	 - In our case, the command against ***start*** specifies the launch of http server at port 8000.
- Go to a web browser and head to localhost:8000 to open the client. 


## Project Structure

 - Calendar_Client
	 - node_modules
	 - src
		 - index.html
		 - index.html
		 - reservationCalendar.api.js
		 - reservationCalendar.controller.js
		 - reservationCalendar.factory.js
		 - api.factory.js
	 - package.json
	 - package-lock.json

## Program Flow

 - **reservationCalendar.controller.js**
	 -  Hosts the controller of root module: Reservation_Calendar. 
	 - The Controller is responsible for, as part of its initialization through the constructor, setting up a model for the scope to watch so that the template is rendered into a view, while utilizing data bindings and directives.
	 -  Some of the important method are :
		 - Function - **monthAndYearSwitch** - Based on whether we want to view the previous or the next month, this method is responsible for correctly keeping track of month and year when we navigate through the calendar. 
		 - Function - **changeCalendarCells** - Our calendar on the client side is made up of cells, 42 in our case where each cells is represented by an object that consists of the date for the cell, the tenant name and the color of a cell. Both when the controller initializes and when we navigate through the months, this function is responsible for ensuring that the respective cells hold an object that is representative of the correct date. 
		  - Function - **fetchLatestViewModal** - When we click on any cell, a modal is launched that shows the tenants name if the room is reserved. This function fetches the specific details of a cell whenever it is clicked.
		  - Function - **createReservation & deleteReservation** - As their name suggests, these functions are responsible for processing the object-reservation before calling the respective methods from the apiService to send a request to the server.
			 
 - **reservationCalendar.factory.js**
	 -  Hosts the Service, factory, called basicInformation. The purpose of this factory is to expose functions that are not just specific to the Calendar in itself but can be used for any other modules. 
	 - The service exposes  some of the following properties and methods: 
		 -  A list that contains possible days, from Sunday to Monday. 
		 - A list that that contains the names of all of the Months. Javascript Date objects store the indexes of months. Hence, if we want to acquire the label of the Month, then we need to utilize those indexes to refer to the month list which contains the labels/name of the months. 
		 -  A function that converts date into UnixTimeStamps. Its importance is emphasized by the fact that it is required to be used everywhere when we need to send or fetch to and from the server. 
 - **api.factory.js**
	 -  Hosts the Service, factory, called apiService. It exposes methods that are responsible for sending GET and POST requests to the server in order to either create/delete reservations or fetch already-existing ones. 
	 - The Service exposes:
		 - Function - **fetchCurrentfetchCurrentServerTime** - Requests the current time from the server
		 - Function - **fetchReservationsfetchReservations** - Requests all reservation in the current month from server 
		 - Function - **createReservation** - Sends a request to the server accompanied with a json body having information about the soon-to-be-created reservation date and tenant name, to create the reservation by setting the tenant name to the the one supplied and setting the reserved flag to true. 
		 -  Function - **createReservation** - Sends a request to the server accompanied with a json body having information about the soon-to-be-created reservation date and tenant name, to delete the reservation by resetting the tenant name and setting the reserved flag to false.

## Existing Bugs
There is currently on known existing bug. For details, pleas see below. 
Let's talk about the Calendar Client for June. 
The Client displays the following dates when we select the month of June: 
	
	 - 31st Sunday
	 - 1st June - 30st June
	 - 1st July - 11th July

Now, any the creation and deletion of reservations should only work for the days/dates of June when the Calendar is opened for the month of June. For the rest of the dates, belonging to the month of May and July, no reservations can be made because we are not concerned with those months. 
This is where the bug is. For instance, I'll try to create a reservation for the 2nd July while the Calendar is open for July. What the program will do, since the program assumes that a click on any one of the 42 cells has to do with the month of June given that it is selected in Calendar, is it will reserve a date for the 2nd of June, even though I clicked on 2nd July. 
This happens because, since June is open, createReservation works under the assumption that a click on any of the cells has to do with June. Hence, a click on the cell that represents 2nd July will be assumed by the function to be representing 2nd June. Hence, it will create a Reservation for that date. 

 - **Running the App**
 - **Task Completion Status**
 - **Project Structure**
	 - **The Flow of Program**
	 - -	Module - Their Functions and purpose
 - **Existing Bugs**

## Dependences

 - angular: "^1.4.14",
 -   bootstrap: "^4.5.0"
 -    http-server: "^0.12.3"
 
 Run ***npm install*** in Calendar_Client folder to install the required dependencies. 

## Running the App

 - Clone the Repo using the git command line or Github Desktop.
 - Navigate to folder: Calendar_Client. 
 - Open terminal and execute: "npm start"
	 - npm start executes the specified command against they key ***start***
	 - In our case, the command against ***start*** specifies the launch of http server at port 8000.
- Go to a web browser and head to localhost:8000 to open the client. 


## Project Structure

 - Calendar_Client
	 - node_modules
	 - src
		 - index.html
		 - index.html
		 - reservationCalendar.api.js
		 - reservationCalendar.controller.js
		 - reservationCalendar.factory.js
		 - api.factory.js
	 - package.json
	 - package-lock.json

## Program Flow

 - **reservationCalendar.controller.js**
	 -  Hosts the controller of root module: Reservation_Calendar. 
	 - The Controller is responsible for, as part of its initialization through the constructor, setting up a model for the scope to watch so that the template is rendered into a view, while utilizing data bindings and directives.
	 -  Some of the important method are :
		 - Function - **monthAndYearSwitch** - Based on whether we want to view the previous or the next month, this method is responsible for correctly keeping track of month and year when we navigate through the calendar. 
		 - Function - **changeCalendarCells** - Our calendar on the client side is made up of cells, 42 in our case where each cells is represented by an object that consists of the date for the cell, the tenant name and the color of a cell. Both when the controller initializes and when we navigate through the months, this function is responsible for ensuring that the respective cells hold an object that is representative of the correct date. 
		  - Function - **fetchLatestViewModal** - When we click on any cell, a modal is launched that shows the tenants name if the room is reserved. This function fetches the specific details of a cell whenever it is clicked.
		  - Function - **createReservation & deleteReservation** - As their name suggests, these functions are responsible for processing the object-reservation before calling the respective methods from the apiService to send a request to the server.
			 
 - **reservationCalendar.factory.js**
	 -  Hosts the Service, factory, called basicInformation. The purpose of this factory is to expose functions that are not just specific to the Calendar in itself but can be used for any other modules. 
	 - The service exposes  some of the following properties and methods: 
		 -  A list that contains possible days, from Sunday to Monday. 
		 - A list that that contains the names of all of the Months. Javascript Date objects store the indexes of months. Hence, if we want to acquire the label of the Month, then we need to utilize those indexes to refer to the month list which contains the labels/name of the months. 
		 -  A function that converts date into UnixTimeStamps. Its importance is emphasized by the fact that it is required to be used everywhere when we need to send or fetch to and from the server. 
 - **api.factory.js**
	 -  Hosts the Service, factory, called apiService. It exposes methods that are responsible for sending GET and POST requests to the server in order to either create/delete reservations or fetch already-existing ones. 
	 - The Service exposes:
		 - Function - **fetchCurrentfetchCurrentServerTime** - Requests the current time from the server
		 - Function - **fetchReservationsfetchReservations** - Requests all reservation in the current month from server 
		 - Function - **createReservation** - Sends a request to the server accompanied with a json body having information about the soon-to-be-created reservation date and tenant name, to create the reservation by setting the tenant name to the the one supplied and setting the reserved flag to true. 
		 -  Function - **createReservation** - Sends a request to the server accompanied with a json body having information about the soon-to-be-created reservation date and tenant name, to delete the reservation by resetting the tenant name and setting the reserved flag to false.
