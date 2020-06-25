angular
    .module("apiModule", [])
    .factory("apiService", apiService);

function apiService() {

    function fetchCurrentServerTime() {

        return fetch(`http://localhost:3000/now`, {
        method: "GET",
        })
        .then((response)=>
        {
            return response.json();
        });
      }
      
      function fetchReservations(startDate, endDate)
      {
        let unixStartDate = startDate.getTime() / 1000
        let unixEndDate = endDate.getTime() / 1000

        return fetch(`http://localhost:3000/reserve/${unixStartDate}/${unixEndDate}`, {
        method: "GET",
        })
        .then((response)=>
        {
            return response.json();
        });
      };

      function createReservation(date, name)
      {
        // let unixTimestamp = moment.unix(date.getTime() / 1000).tz("Asia/Dubai").startOf("day");        
        let unixTimestamp = date.getTime() / 1000;

        return fetch(`http://localhost:3000/reserve`, {
          headers: {'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify({
          "tennantName": name,
          "time": unixTimestamp,
          "reserved": true
        })
        })
        .then((response)=>
        {
            return response.json();
        });
      };


      function deleteReservation(date, name)
      {
        // let unixTimestamp = moment.unix(date.getTime() / 1000).tz("Asia/Dubai").startOf("day");        
        let unixTimestamp = date.getTime() / 1000;
        return fetch(`http://localhost:3000/reserve`, {
          headers: {'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify({
          "tennantName": name,
          "time": unixTimestamp,
          "reserved": false
        })
        })
        .then((response)=>
        {
            return response.json();
        });
      };


      return {
        fetchCurrentServerTime: fetchCurrentServerTime,
        fetchReservations: fetchReservations,
        createReservation: createReservation   ,
        deleteReservation: deleteReservation 
      };
    
    }

