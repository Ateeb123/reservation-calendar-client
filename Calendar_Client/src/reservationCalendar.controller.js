angular
    .module("reservationCalendar",["basicInformationService"] )
    .controller("calendarController",["basicInfo",calendarController])
    

function calendarController(basicInfo)
{
    let viewModel = this;
    viewModel.checker = "123";
    viewModel.days = basicInfo.allDays;
    viewModel.daysLayout = 7;
    console.log(viewModel.daysLayout)
    
}
