
function Cerca()  {
    let inp=document.getElementById('in')
    console.log(inp)
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inp.value +'&appid=d2013eafe2fed67ff84acda1b28014a7') 
    .then(response => response.json()) 
    .then(data => { console.log(data) 
        var tempValue = parseFloat(data['main']['temp'])-273.15
        var lat=parseFloat(data['coord']['lat'])
        var lon=parseFloat(data['coord']['lon'])
        var tempmax=parseFloat(data['main']['temp_max'])-273.15
        var tempmin=parseFloat(data['main']['temp_min'])-273.15
        var tempperc=parseFloat(data['main']['feels_like'])-273.15
        var meteo= String(data['weather']['0']['main'])
        console.log(meteo)
        console.log([tempmin,tempmax,tempperc])
        console.log(tempValue)
        console.log([lat,lon])
        document.getElementById('meteo').innerHTML=(
            'Temperatura: '+ tempValue+ '</br>'+
            'Temperatura minima: ' + tempmin+ '</br>'+
            'Temperatura massima: '+ tempmax + '</br>'+
            'Temperatura percepita: '+ tempperc +'</br>'+
            'Condizioni: '+meteo+'</br>'+
            'Posizione: '+ [lat,lon]
        ) 
    }) 
}