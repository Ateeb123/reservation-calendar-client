angular
    .module("apiModule",[])
    .factory("apiService",apiService)


function apiService()
{
    
    async function fetchCurrentServerTime()
    {
        try {
            const response = await fetch(
              `http://localhost:3000/now`,
              {
                  method: "GET",
              }
            );
        
            if (response.status === 200) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
            //   onSearchSuccess(jsonResponse);
            } else {
                const jsonResponse = await response.json();
                //   onSearchFail(jsonResponse.message)
                console.log(jsonResponse);
            }
        }
          catch(e)
          {
            console.log(e.message)
          }    
    
    }

    return(
        {
            fetchCurrentServerTime: fetchCurrentServerTime
        }
    
    );
}



