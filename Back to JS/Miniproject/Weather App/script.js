// console.log('Hello');

// const API_KEY = "00ea078d0c0bcb2c132394d7562df3c6";

// async function showWeather() {
//   let lat = 15;
//   let lon = 74;

//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//   );

//   const data = await response.json();
//   console.log("Weather data:", data);

  // Create a paragraph and show temperature
//   let newPara = document.createElement('p');
//   newPara.textContent = `${(data?.main?.temp - 273.15).toFixed(2)} °C`;

//   document.body.appendChild(newPara);


// }

// showWeather();


// https://api.openweathermap.org/data/2.5/weather?lat=15&lon=74&appid=00ea078d0c0bcb2c132394d7562df3c6


// try and catch
// const API_KEY = "00ea078d0c0bcb2c132394d7562df3c6";

// function renderWeatherInfo(data) {
//   let newPara = document.createElement('p');
//   newPara.textContent = `${(data?.main?.temp - 273.15).toFixed(2)} °C`;

//   document.body.appendChild(newPara);
// }

// async function showWeather() {
//   try {
//     let lat = 15;
//     let lon = 74;

//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//     );

//     const data = await response.json();
//     console.log("Weather data:", data);
//     renderWeatherInfo(data);
//   } catch (err) {
//     console.error("Error fetching weather:", err);
//   }
// }



// async function getWeatherDetails() {
//   try {
//     let lat = 13.666;
//     let lon = 34.555;

//     let result = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//     );

//     let data = await result.json();
//     console.log("Forecast data:", data);
//   } catch (err) {
//     console.error("Error fetching forecast:", err);
//   }
// }

// showWeather();
// getWeatherDetails();


// function switchTab(clickedTab)
// {
//     apiErrorContainer.classList.remove("active");

//     if(clickedTab !== currentTab) 
//     {
//       currentTab.classList.remove("current-tab");
//       currentTab = clickedTab;
//       currentTab.classList.add("current-tab");
    
      
//     if(!searchForm.classList.contains("active"))
//     {
//        userInfoContainer.classList.remove("active");
//        grantAccessContainer.classList.remove("active");
//        searchForm.classList.add("active");
//     }

//     else
//     {
//       searchForm.classList.remove("active");
//       userInfoContainer.classList.remove("active");
//       // getFromSessionStorage();
//     }

//     // console.log("Current Tab", currentTab);
//   }
  
// }


// function getLocation()
// {
//   if(navigator.geolocation)
//   {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   }
//   else
//   {
//     console.log("No geolocation Support");
//   }
// }

// function showPosition(position)
// {
//   let lat = position.coords.latitude;
//   let longi = position.coords.longitude;

//   console.log(lat);
//   console.log(longi);
// }