angular
    .module("basicInformationService",[])
    .factory("basicInfo",basicInfo)


function basicInfo()
{
    let dayList = ["Sun","Mon", "Tue", "Wed","Thu","Fri","Sat"]

    return(
        {
            allDays: dayList,
            totalCells: 42
        }
    
    );
}



