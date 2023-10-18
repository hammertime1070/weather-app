async function getWeather(string) {
    const key = 'a549ad0829154882a8b132226231810'
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${string}&aqi=no`)
    const weatherData = await response.json()
    processWeatherData(weatherData)
}

function processWeatherData(weatherData) {
    console.log(weatherData.current.temp_c)
    console.log(weatherData.current.condition.text)
    return {
        tempCelsius: weatherData.current.temp_c,
        tempFahrenheit: weatherData.current.temp_f,
        condition: weatherData.current.condition.text,
    }
}

const userLocation = document.getElementById('location')
const submitButton = document.getElementById('submit-button')

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(userLocation.value)})