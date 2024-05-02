function Cerca()  {
    let inp=document.getElementById('in')
    console.log(inp)
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inp.value +'&appid=d2013eafe2fed67ff84acda1b28014a7') 
    .then(response => response.json()) 
    .then(data => { console.log(data) 
        var tempValue = data['main']['temp']; '''(32 °F - 32) × 5/9'''

        console.log(tempValue) }) 
}