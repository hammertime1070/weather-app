async function getWeather(string) {
    const key = 'a549ad0829154882a8b132226231810'
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${string}&aqi=no`)
    const weatherData = await response.json()
    displayWeatherData(processWeatherData(weatherData))
}

function processWeatherData(weatherData) {
    console.log(weatherData.current.temp_c)
    console.log(weatherData.current.condition.text)
    return {
        locationName: weatherData.location.name,
        tempCelsius: weatherData.current.temp_c,
        tempFahrenheit: weatherData.current.temp_f,
        condition: weatherData.current.condition.text,
    }
}

function displayWeatherData(weatherData) {
    const locationDiv = document.getElementById('location-display')
    const conditionDiv = document.getElementById('condition')
    const tempcDiv = document.getElementById('temp_c')
    const tempfDiv = document.getElementById('temp_f')

    locationDiv.textContent = weatherData.locationName
    conditionDiv.textContent = weatherData.condition
    tempcDiv.textContent = weatherData.tempCelsius
    tempfDiv.textContent = weatherData.tempFahrenheit
}

const userLocation = document.getElementById('location')
const submitButton = document.getElementById('submit-button')

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(userLocation.value)})

getWeather('Paris')