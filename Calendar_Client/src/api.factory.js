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
        })
        
        ;

};

  return {
    fetchCurrentServerTime: fetchCurrentServerTime,
  };
}
