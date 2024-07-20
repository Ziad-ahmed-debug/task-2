
const request = require("request")

const url = "http://api.weatherapi.com/v1/current.json?key=dbab34a33bf347b682330148241707&q=London&aqi=no"

request ({url} , (error , response) => {
    console.log(response.body)

    const data1 = JSON.parse(response.body)
    console.log(data1)
    console.log(data1.location.name)

    if(error){
        console.log("ERROR HAS OCCURED")
    }else if(response.body.error){
        console.log(response.body.error.message)
    }else{
        console.log(response.body.location.name , response.body.current.condition.text)
    }

})
//////////////////////////////////////////////////////////////////////////

const geocodeurl = "http://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIwi.com/v1/current.json?key=dbab34a33bf347b682330148241707&q=London&aqi=no"

request({url : geocodeurl , json : true} , (error , response)=>{

    if(error){
        console.log("unable to connect geocode service")
    }else if(response.body.message){
        console.log(response.body.message)
    }else if(response.body.features.length == 0){
        console.log("Unable to finde location")
    }else{
        const longtitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(latitude , longtitude)
    }

})
//////////////////////////////////////////////////////////////

const forecast = (latitude , longtitude , callback)=>{
const url1 = "http://api.weatherapi.com/v1/current.json?key=dbab34a33bf347b682330148241707&q=London&aqi=no"

request ({url1} , (error , response) => {

    const data1 = JSON.parse(response.body)
  

    if(error){
        callback("ERROR HAS OCCURED" , undefined)
    }else if(response.body.error){
        callback(response.body.error.message , undefined)
    }else{

        callback(undefined , response.body.location.name , response.body.current.condition.text)
        //console.log(response.body.location.name , response.body.current.condition.text)
    }

})

 }

    forecast(29.0349039 , 26.9342908 , (error,data)=>{

        console.log("Error: " , error)
        console.log("Data: " , data)
    })