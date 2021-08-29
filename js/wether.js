document.getElementById('search-btn').addEventListener('click', function () {
    document.getElementById('spinner').classList.remove('d-none')
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value;
    inputField.value = ''
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=2d18367fd58e94456cdfb6ffc1df41f6`)
        .then(res => res.json())
        .then(data => getWether(data))
})

const getWether = cityWeathers => {
    console.log(cityWeathers)
    const [main] = cityWeathers.weather;
    const displayWeather = document.getElementById('display-weather')
    document.getElementById('spinner').classList.add('d-none')
    displayWeather.textContent = ''
    const div = document.createElement('div')
    div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${cityWeathers.weather[0].icon}@2x.png" alt="">
            <h1>${cityWeathers.name},${cityWeathers.sys.country}</h1>
            <h3><span>Tempture : ${cityWeathers.main.temp}</span>&deg;C</h3>
            <h5><span> Feel like : ${cityWeathers.main.feels_like}</span>&deg;C</h3>
            <h5><span> Humidity : ${cityWeathers.main.humidity}</span>&deg;C</h3>
            <p>Wether condition are discribe as : ${main.description}</p>
    
    `
    displayWeather.appendChild(div)
}
