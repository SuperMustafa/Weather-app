var counteryList = {};
var daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var row = document.querySelector("#rowData");
var searchInput=document.querySelector("#searchInput");
var findBtn=document.querySelector("#findBtn");
var dayStatus = document.querySelector("#dayStatus");
var https="https:";
var kph="Km/h";
var contactAnchor=document.querySelector("#contact");

contactAnchor.addEventListener("click",function(){
    contactAnchor.style.cssText=`background-color: #0e98d8;`

    
})




async function getCountry(country) {
    var response = await fetch(` http://api.weatherapi.com/v1/forecast.json?key=2ee9e0b662244f41b3b154337241306 &q=${country}&days=3`);
    var data = await response.json();
    counteryList=data;
    console.log(counteryList);
    display();
   

}




searchInput.addEventListener("keyup",function(eventInfo){
    
        var x=eventInfo.target.value;
        if(x.length>=3){
            getCountry(x)
        }
})

findBtn.addEventListener("click",function(){
    var x = searchInput.value;
    getCountry(x);
})


getCountry("egypt");

function getDayNumberAndMonth() {
    var x = new Date()
    var y = "";
    y += x;
    var sliced = y.slice(4, 11)
    return sliced;

}


function getDayName(numberOfDate) {
    var date = new Date(numberOfDate);
    var dayNumber = date.getDay();
    var day = daysList[dayNumber];
    return day;

}

function display() {
    
        var box = "";

        box += `  <div class="col-lg-4 ">
                            <div class="inner gray data-height rounded-2 my-3 ">
                                <div class="inner-header rounded-2  light-gray  d-flex justify-content-between align-items-center p-2 ">
                                    <p>${getDayName(counteryList.location.localtime)}</p>
                                  <p>${getDayNumberAndMonth()}</p> 
                                </div>
                                <div class="inner-data p-4">
                                    <p>${counteryList.location.name}</p>
                                    <h3>${counteryList.current.temp_c}°C </h3>
                                    <img src="${https+counteryList.current.condition.icon}">
                                    <h6 id="statusTxt">${counteryList.current.condition.text}</h6>
                                    <div class="another-data d-flex">
                                        <img src="images/icon-umberella.png" alt="" class="me-2">
                                        <p class="me-4">20%</p> 
                                        <img src="images/icon-wind.png" alt="" class="me-2">
                                        <p class="me-4">${counteryList.current.wind_kph+kph}</p>
                                        <img src="images/icon-compass.png" alt="" class="me-2">
                                        <p class="me-4">East</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="inner dark-gray rounded-2 data-height my-3 ">
                                <div class="inner-header  middle  rounded-2  deep-dark-color p-2 text-center ">
                                    <p>${getDayName(counteryList.forecast.forecastday[1].date)}</p>
                                  
                                </div>
                                <div class="nextDay-inner-data p-4 text-center">
                                    <img src="${https+ counteryList.forecast.forecastday[1].day.condition.icon}" alt="">
                                    <h1 class="text-white">${counteryList.forecast.forecastday[1].day.maxtemp_c}</h1>
                                    <h3>${counteryList.forecast.forecastday[1].day.mintemp_c}</h3>
                                    <h6>${counteryList.forecast.forecastday[1].day.condition.text}</h6>
                                
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="inner gray rounded-2  data-height my-3 ">
                                <div class="inner-header rounded-2  light-gray p-2 text-center ">
                                    <p>${getDayName(counteryList.forecast.forecastday[2].date)}</p>
                                  
                                </div>
                                <div class="nextDay-inner-data p-4 text-center">
                                    <img src="${https+ counteryList.forecast.forecastday[2].day.condition.icon}" alt=""  >
                                    <h1 class="text-white">${counteryList.forecast.forecastday[2].day.maxtemp_c}</h1>
                                    <h3>${counteryList.forecast.forecastday[2].day.mintemp_c}</h3>
                                    <h6>${counteryList.forecast.forecastday[2].day.condition.text}</h6>
                                
                                </div>
                            </div>
                        </div>`
    row.innerHTML = box;

    }




console.log(location.href);