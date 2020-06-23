angular
    .module("reservationCalendar",["basicInformationService","apiModule"] )
    .controller("calendarController",["basicInfo","apiService",calendarController])
    

function calendarController(basicInfo, apiService)
{
    let viewModel = this;
    viewModel.checker = "123";
    viewModel.days = basicInfo.allDays;
    viewModel.daysLayout = 7;
    let currentMonthDetails = basicInfo.montlyDetails();
    viewModel.dateAndPostings = []
    viewModel.currentMonth = currentMonthDetails.month;
    viewModel.currentYear = currentMonthDetails.year;
    let totalCols = 7;
    let totalRows = 5;
    let totalBoxes = totalCols * totalRows;


    for (let beforeStartofMonth = 0; beforeStartofMonth < (currentMonthDetails.firstDayIndex); beforeStartofMonth++)
    {
        previousDayDate = currentMonthDetails.totalDays - beforeStartofMonth;
        let eachDayDetails = 
        {           
            date: previousDayDate,
            color: "lightgrey",
            tenant: "Ateeb"
        }
        viewModel.dateAndPostings.push(eachDayDetails)
    }

    for (let eachDayofMonth = 1; eachDayofMonth < currentMonthDetails.totalDays; eachDayofMonth++)
    {
        let eachDayDetails = 
        {           
            date: eachDayofMonth,
            color: "white",
            tenant: "Ateeb"
        }
        viewModel.dateAndPostings.push(eachDayDetails)
    }

    const totalBoxesFilled = viewModel.dateAndPostings.length

    for (let boxesLeft = 1; boxesLeft < totalBoxes - totalBoxesFilled+1  ; boxesLeft++)
    {
        nextDayDate = boxesLeft;
        let eachDayDetails = 
        {           
            date: nextDayDate,
            color: "lightgrey",
            tenant: "Ateeb"
        }
        viewModel.dateAndPostings.push(eachDayDetails)        
    }

    function shiftToNextMonth()
    {


    }

    function shiftToPreviousMonth()
    {

    }


    console.log(viewModel.dateAndPostings)

}











