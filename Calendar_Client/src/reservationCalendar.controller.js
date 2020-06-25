angular
    .module("reservationCalendar",["basicInformationService","apiModule"] )
    .controller("calendarController",["basicInfo","apiService","$scope",calendarController])
    

function calendarController(basicInfo, apiService, $scope)
{

    let viewModel = this;
    viewModel.days = basicInfo.allDays;    
    const currentDate = new Date();
    viewModel.dateAndPostings =[]
    $scope.checker = "AA";
    let MonthDetails = basicInfo.montlyDetails(currentDate);
    viewModel.monthAndYear = 
    {
        MonthIndex: MonthDetails.monthIndex ,
        MonthLabel: MonthDetails.month,
        Year: MonthDetails.year  
    }

    viewModel.errors = 
    {
        recordCreationError: "",
        recordDeletionError: ""
    }

    viewModel.reservedResponse = []
    viewModel.reservation = 
    {
        name: "",
        month: "",
        monthIndex: "",
        year: "",
        isReserved:"",
        date: "",
        color: ""
    }

    let totalCols = 7;
    let totalRows = 6;
    let totalBoxes = totalCols * totalRows;

    function monthAndYearSwitch(nextORPreviousMonth)
    {
        console.log(viewModel.monthAndYear.MonthIndex, nextORPreviousMonth)
        if (viewModel.monthAndYear.MonthIndex === 0 && nextORPreviousMonth < 0)
        {
            viewModel.monthAndYear.MonthIndex = 11;
            viewModel.monthAndYear.Year = viewModel.monthAndYear.Year + nextORPreviousMonth;
            viewModel.monthAndYear.MonthLabel = basicInfo.allMonths[viewModel.monthAndYear.MonthIndex]
        }
        else if (viewModel.monthAndYear.MonthIndex === 11 && nextORPreviousMonth > 0)
        {
            viewModel.monthAndYear.MonthIndex = 0;
            viewModel.monthAndYear.Year = viewModel.monthAndYear.Year + nextORPreviousMonth;
            viewModel.monthAndYear.MonthLabel = basicInfo.allMonths[viewModel.monthAndYear.MonthIndex]
        }
        else
        {
            viewModel.monthAndYear.MonthIndex= viewModel.monthAndYear.MonthIndex + nextORPreviousMonth;
            viewModel.monthAndYear.MonthLabel = basicInfo.allMonths[viewModel.monthAndYear.MonthIndex]
        }        
    }

    function getMonthDetails()
    {
        let prevMonthLastDate = new Date(viewModel.monthAndYear.Year, viewModel.monthAndYear.MonthIndex, 0);
        let firstDate=new Date(viewModel.monthAndYear.Year, viewModel.monthAndYear.MonthIndex, 1);
        let lastDate=new Date(viewModel.monthAndYear.Year, viewModel.monthAndYear.MonthIndex+1, 0);        
        return (
        {
           newMonthLastDate: lastDate.getDate(),
           startOfDay: firstDate.getDay(),
           prevMonthLastDate: prevMonthLastDate.getDate()
        });
    }

    function changeCalendarCells()
    {
        let monthDetails = getMonthDetails();
        viewModel.dateAndPostings =[]
        let prevMonthLastDate = monthDetails.prevMonthLastDate
        for (let beforeStartofMonth = 0; beforeStartofMonth < monthDetails.startOfDay; beforeStartofMonth++)
        {
            let eachDayDetails = 
            {           
                date: prevMonthLastDate,
                color: "lightgrey",
                tenant: "",
                differentiator: 0
            }
            viewModel.dateAndPostings.push(eachDayDetails)
            prevMonthLastDate = prevMonthLastDate - 1;
        }
    
        for (let eachDayofMonth = 1; eachDayofMonth < monthDetails.newMonthLastDate+1; eachDayofMonth++)
        {
            let eachDayDetails = 
            {           
                date: eachDayofMonth,
                color: "white",
                tenant: "",
                differentiator: 1
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
                tenant: "",
                differentiator: 2
            }
            viewModel.dateAndPostings.push(eachDayDetails)        
        }
    }

    changeCalendarCells()

    viewModel.shiftToNextMonth = ()=>
    {
        monthAndYearSwitch(1);
        changeCalendarCells();
        getReservations()
    }
    viewModel.shiftToPreviousMonth = ()=>
    {
        monthAndYearSwitch(-1);
        changeCalendarCells();
        getReservations()

    }




    function getReservations(){
    let startDate = new Date(viewModel.monthAndYear.Year, viewModel.monthAndYear.MonthIndex,1) 
    let endDate = new Date(viewModel.monthAndYear.Year, viewModel.monthAndYear.MonthIndex+1,0) 
    
    apiService.fetchReservations(startDate,endDate).then((response)=>
        {
            
            console.log(startDate, endDate,viewModel.monthAndYear.Year, viewModel.monthAndYear.MonthIndex)
            viewModel.reservedResponse = response.reserved;
            $scope.$apply(function(viewModell)
            {
                Setter(viewModel.reservedResponse);
            }.bind(this));
                        
        });  
    }
    getReservations()
        
    function Setter(reservedResponse)
    {
        for (let eachDate = 0; eachDate < reservedResponse.length; eachDate++)
        {
            let dayBooked = basicInfo.unixTimeStampToDate(reservedResponse[eachDate]);
            for (let eachCell = 0; eachCell < viewModel.dateAndPostings.length; eachCell++)
            {
                if (viewModel.dateAndPostings[eachCell]["date"] === dayBooked && viewModel.dateAndPostings[eachCell]["differentiator"] === 1  )
                {
                    viewModel.dateAndPostings[eachCell]["color"] = "lightblue" 
                    viewModel.dateAndPostings[eachCell]["tenant"] = reservedResponse[eachDate]["tennantName"] 
            }
        } 

    }}
        

    viewModel.fetchLatestViewModal = (date)=>
    {
        for (let eachDate = 0; eachDate < viewModel.dateAndPostings.length; eachDate++)
        {
            if (date === viewModel.dateAndPostings[eachDate].date && viewModel.dateAndPostings[eachDate].differentiator === 1)
            {
                viewModel.reservation = 
                {
                    name: viewModel.dateAndPostings[eachDate].tenant,
                    date: date,
                    month: viewModel.monthAndYear.MonthLabel,
                    monthIndex: viewModel.monthAndYear.MonthIndex,
                    year: viewModel.monthAndYear.Year,
                    isReserved: isReserved(viewModel.dateAndPostings[eachDate].tenant),
                    color: ""
                }


                function isReserved(name)
                {
                    if (name === "")
                    {
                        return false;
                    }
                    else
                    {
                        return true;
                    }
                }
                break;
            } 
        }
    }

    viewModel.createReservation= ()=>
    {
        if (viewModel.reservation.name === "")
        {
            viewModel.errors.recordCreationError = "Name cannot be empty."
        }
        else if(viewModel.dateAndPostings[eachDate].differentiator === 1)
        {
            viewModel.errors.recordCreationError = "Invalid date"
        }
        else
        {
            viewModel.reservation.isReserved = true;
            let date = new Date(viewModel.reservation.year, viewModel.reservation.monthIndex, viewModel.reservation.date+1)
            apiService.createReservation(date,viewModel.reservation.name).then((response)=>
            {
                if (response.success === true)
                {
    
                    $scope.$apply(function(viewModell)
                    {
    
                        for (let eachCell = 0; eachCell < viewModel.dateAndPostings.length; eachCell++)
                        {
                        if (viewModel.dateAndPostings[eachCell]["date"] === viewModel.reservation.date && viewModel.dateAndPostings[eachDate].differentiator === 1  )
                        {
                        viewModel.dateAndPostings[eachCell]["color"] = "lightblue" 
                        viewModel.dateAndPostings[eachCell]["tenant"] = viewModel.reservation.name 
                        }
    
    
            }}.bind(this));
        
                }
            })
    
        }
    }

    
    viewModel.deleteReservation= ()=>
    {
        if(viewModel.reservation.color === "lightgrey")
        {
            viewModel.errors.recordDeletionError = "Invalid date"
        }
        {
                viewModel.reservation.isReserved = false;
            let date = new Date(viewModel.reservation.year, viewModel.reservation.monthIndex, viewModel.reservation.date+1)
            apiService.deleteReservation(date,viewModel.reservation.name).then((response)=>
            {
                if (response.success === true)
                {
    
                    $scope.$apply(function(viewModell)
                    {
    
                        for (let eachCell = 0; eachCell < viewModel.dateAndPostings.length; eachCell++)
                        {
                        if (viewModel.dateAndPostings[eachCell]["date"] === viewModel.reservation.date && viewModel.dateAndPostings[eachDate].differentiator === 1  )
                        {
                        viewModel.dateAndPostings[eachCell]["color"] = "white" 
                        viewModel.dateAndPostings[eachCell]["tenant"] = "" 
                        }
    
    
            }}.bind(this));
        
                }
            })

        }

    }
}

