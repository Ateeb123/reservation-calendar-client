angular
    .module("basicInformationService",[])
    .factory("basicInfo",basicInfo)


function basicInfo()
{
    let dayList = ["Sun","Mon", "Tue", "Wed","Thu","Fri","Sat"]
    
    // {
    //     month: "",
    //     year: "",
    //     totalDays: "",
    //     dateDistribution:
    //     {
    //         Sun: 
    //         [
    //             {
    //                 date/time: "",
    //                 textC olor: "",
    //                 tenantName: ""
    //             },
    //             {
    //                 date/time: "",
    //                 color: "",
    //                 tenantName: ""
    //             },
    //             {
    //                 date/time: "",
    //                 color: "",
    //                 tenantName: ""
    //             }
    //         ],
    //         Mon: 
    //         [
    //             {
    //                 date/time: "",
    //                 color: "",
    //                 tenantName: ""
    //             },
    //             {
    //                 date/time: "",
    //                 color: "",
    //                 tenantName: ""
    //             },
    //             {
    //                 date/time: "",
    //                 color: "",
    //                 tenantName: ""
    //             }
    //         ]

    //     }
    // }

    return(
        {
            allDays: dayList,
            totalCells: 42
        }
    
    );
}



