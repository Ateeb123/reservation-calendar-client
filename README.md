# Reservation Client Calendar.

As its name suggests, this project consists of a client-side interface of a calendar through which a user can reserve a room for a single day. 
The client-side works in conjunction with the backend API provided by Stellic. The API is responsible for reserving a room, deleting reservations and listing current ones. 

All in all, the client side has three main functionalities: 

 - Adds a tenant to a day.
 - Removes a tenant from the day. 
 - Move between months and view reservations

# Index

 - **Dependencies**
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

