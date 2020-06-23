angular
    .module("reservationCalendar",["basicInformationService","apiModule"] )
    .controller("calendarController",["basicInfo","apiService",calendarController])
    

function calendarController(basicInfo, apiService)
{
    let viewModel = this;
    viewModel.checker = "123";
    viewModel.days = basicInfo.allDays;
    viewModel.daysLayout = 7;
    viewModel.getCurrentTime = apiService.fetchCurrentServerTime();
    console.log(viewModel.getCurrentTime);


}











