const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apikey="f54e23e0ad2ce9dfe6b1cc761ddb75e9"


const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiurl+city +`&appid=${apikey}`);
    if(response.status ==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp") .innerHTML=Math.round(data.main.temp) + "degc";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if (data.weather[0].main=="Clouds"){
        weathericon.src = "photo_3.png"
    }
    if (data.weather[0].main=="Clear"){
        weathericon.src = "photo_2.png"
    }
    if (data.weather[0].main=="Rain"){
        weathericon.src = "photo_4.png"
    }
    if (data.weather[0].main=="Mist"){
        weathericon.src = "photo_5.png"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})