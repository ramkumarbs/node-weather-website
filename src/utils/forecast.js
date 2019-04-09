const request = require('request')

const forecast = (latitude, longitude, callback) =>{

    const url = 'https://api.darksky.net/forecast/837340aed749839992f3b600ef03093a/'+ latitude +','+ longitude

    request({ 
        url,
        json: true
    }, (error, response, body) => {
    
        if(error){
    
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
    
            callback('Unable to find location', undefined)
        }else{
    
            callback(undefined, {
                forecast: body.daily.data[0].summary+' It is currently '+ body.currently.temperature+' degrees out. There is a '+body.currently.precipProbability+'% chance of rain.'
            })
        }
    })
}

module.exports = forecast