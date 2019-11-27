
  let city = ""
  let searchHx = []
  
  function getWeather (){
   let queryURL = "https://api.openweathermap.org/data/2.5/weather?q="  + city + "&units=imperial&appid=947af45bc8d7b63be4d0d313320202fb";
   console.log(city)
   axios.get(queryURL)
     .then(function(response) {
        //  console.log(queryURL)
        //  console.log(response) 
         let weatherObj = {
            name:response.data.name,
            date:"", 
            temperature:response.data.main.temp,
            icon: response.data.weather[0].icon,
            description:response.data.weather[0].description,
            humidity:response.data.main.humidity,
            windspeed:response.data.wind.speed, 
            
         };
         const pName = $("<p>").text("City: " + weatherObj.name);
         $("#currentDisplay").append(pName);
         const temperature = $("<p>").text("Temperature: " + weatherObj.temperature);
         $("#currentDisplay").append(temperature);
        //  const icon = $("<p>").text("this is name " + weatherObj.name)
        //  $("#currentDisplay").append(pName);
         const description = $("<p>").text("Description: " + weatherObj.description);
         $("#currentDisplay").append(description);
         const iconURL = "http://openweathermap.org/img/wn/" + weatherObj.icon + "@2x.png"
         const icon = $("<img>").attr("src", iconURL);
         $("#currentDisplay").append(icon);
         const humidity = $("<p>").text("Humidity: " + weatherObj.humidity);
         $("#currentDisplay").append(humidity);
         const windspeed = $("<p>").text("Windspeed: " + weatherObj.windspeed);
         $("#currentDisplay").append(windspeed);
        
         
        getFiveDay ()       
       });  
        
  }
 
function getFiveDay () {
  let fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city+ ",us&mode=json&appid=947af45bc8d7b63be4d0d313320202fb&cnt=5"
  axios.get(fiveDayURL)
.then(function(response) {
  // console.log("from five day",response)
  response.data.list.forEach(function(singlething){
    // console.log(singlething)
    const container = $("<div>")
    const date = $("<p>").text("Date: " + singlething.dt_txt);
    container.append(date);
    const humidity = $("<p>").text("Humidity: " + singlething.main.humidity);
         container.append(humidity);
         const temperature = $("<p>").text("Temperature " + singlething.main.temp);
         container.append(temperature);  
         const iconURL = "http://openweathermap.org/img/wn/" + singlething.weather[0].icon + "@2x.png"
         const icon = $("<img>").attr("src", iconURL)
         container.append(icon);   
         $("#futureDisplay").append(container)
  });
});
};

// function saveToLocalStorage
// set local storage
     $("#searchBtn").on("click", function(event){
       event.target.preventDefault;
       localStorage.getItem("user")  
       city = $("#search-box").val();
       console.log(city)
       searchHx.push(city)
       console.log(searchHx, "searchHx")
       const stringArray = JSON.stringify(searchHx)
       localStorage.setItem("city", stringArray)
 
       displayHx()
   getWeather();
 
     });
//  retrieve and displat from local storage
 function displayHx (){
  // empty to prevent duplication
   $("#listHx").empty()
   const storageArray = JSON.parse(localStorage.getItem("city"))
  //  dynamic creation of <li>
   storageArray.forEach(function(singleSearch){
     const li = $("<li>").addClass("list-group-item")
     li.text(singleSearch)
     $("#listHx").append(li)
   })
 }
     