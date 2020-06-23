angular
    .module("basicInformationService",[,"apiModule"])
    .factory("basicInfo",["apiService",basicInfo])


function basicInfo(apiService)
{
    let dayList = ["Sun","Mon", "Tue", "Wed","Thu","Fri","Sat"]
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
    // let currentDate = apiService.fetchCurrentServerTime();

    // currentDate.then((unixTimeStamp)=>
    //     {
    //         unixTimeStamp = unixTimeStamp.time;
    //         const date = new Date(unixTimeStamp * 1000);
    //         const year = date.getFullYear();
    //         const month = months[date.getMonth()];            
    //         console.log(year, month, date.getDate(),dayList[date.getDay()])
    //     }
    function monthlyDetails () {

        const date = new Date();
        const firstDayDate =  new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1);
        let allDetails = 
        {
            totalDays: new Date(date.getFullYear(),date.getMonth(), 0).getDate(),
            month: months[date.getMonth()],
            year: date.getFullYear(),
            firstDayName: dayList[firstDayDate.getDay()],
            lastDayName: dayList[lastDayDate.getDay()],
            firstDayIndex: firstDayDate.getDay(),
            lastDayIndex: lastDayDate.getDay()
        }
        console.log(allDetails)
        return allDetails;

    }
    
    // const date = new Date();
    // const year = date.getFullYear();
    // const month = months[date.getMonth()];            
    // var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    // var lastDay = new Date(date.getFullYear(), date.getMonth() + 1); 
    // // console.log(year, month, date.getDate(),dayList[date.getDay()])

   
    return(
        {
            allDays: dayList,
            totalCells: 42,
            montlyDetails: monthlyDetails
        }
    
    );
}



