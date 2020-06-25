angular
    .module("basicInformationService",[,"apiModule"])
    .factory("basicInfo",["apiService",basicInfo])


function basicInfo(apiService)
{
    let dayList = ["Sun","Mon", "Tue", "Wed","Thu","Fri","Sat"]
    let months = ['January','February','March','April','May','June','July','August','September','Octtober','November','December'];
    let dayInMonth = {'January':31,'February':28,'March':31,'April':30,'May':31,'June':30,'July':31,'August':31,'September':30,'Octtober':31,'November':30,'December':31}
    // let currentDate = apiService.fetchCurrentServerTime();

    // currentDate.then((unixTimeStamp)=>
    //     {
    //         unixTimeStamp = unixTimeStamp.time;
    //         const date = new Date(unixTimeStamp * 1000);
    //         const year = date.getFullYear();
    //         const month = months[date.getMonth()];            
    //         console.log(year, month, date.getDate(),dayList[date.getDay()])
    //     }
    function monthlyDetails (date) {
        const firstDayDate =  new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1);
        let allDetails = 
        {
            monthIndex: date.getMonth(),
            month: months[date.getMonth()],
            totalDays: dayInMonth[months[date.getMonth()]],
            year: date.getFullYear(),
            firstDayName: dayList[firstDayDate.getDay()],
            lastDayName: dayList[lastDayDate.getDay()],
            firstDayIndex: firstDayDate.getDay(),
            lastDayIndex: lastDayDate.getDay(),
        }
        return allDetails;

    }

    function unixTimeStampToDate(unixTimeStamp)
    {
        unixTimeStamp = unixTimeStamp.time;
        let date = new Date(unixTimeStamp * 1000).getDate()
        return date;

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
            montlyDetails: monthlyDetails,
            unixTimeStampToDate: unixTimeStampToDate,
            allMonths: months
        }
    
    );
}



