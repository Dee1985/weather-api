
  const city = "paris"
 
  const queryURL = "https://api.openweathermap.org/data/2.5/weather?q="  + city + "&units=imperial&appid=947af45bc8d7b63be4d0d313320202fb";
  console.log(city)
 
    axios.get(queryURL)
    .then(function(response) {
        console.log(queryURL)
        console.log(response) 
      
        const main = response.data.main;
        console.log(main)
        const description = response.data.weather[0].description;
        console.log(description)
        const icon = response.data.weather[0].icon;
        console.log(icon)
        const windSpeed = response.data.wind.speed;
        console.log(windSpeed)
        // append?
           
      $("#searchBtn").on("click", function(event){
        event.target.preventDefault;
        localStorage.setItem("city", city)
        localStorage.getItem("user")  
    
    
      });
      
    });
    