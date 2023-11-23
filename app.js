
const request = require ("request")

// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=30.05,31.25"

// request ({url, json : true} , (error , response) => {
     
//     if(error) {
//         console.log("Error has Occurred")
//     } else if(response.body.error){
//         console.log(response.body.error.message)
//     } else {
//         console.log(response.body.location.name , response.body.current.condition.text)
//     }

// })
/////////////////////////////////////////////////////////////////////////////////////

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw'

// request ({url : geocodeUrl , json : true} , (error , response) => {
//     if (error) {
//         console.log("Unable to connect geocode Service")
//     }
//     else if (response.body.message) {
//         console.log(response.body.message)
//     }
//     else if (response.body.features.length == 0){
//         console.log("Unable to find location")
//     } 
//     else {
//         const longtitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(latitude , longtitude)
//     }
// } )
/////////////////////////////////////////////////////////////////////////////////////


// const forecast = (latitude , longtitude , callback ) => {

// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef2ujbgcsiu3b418c97a155211230503&q=" + latitude + "," + longtitude

// request ({url, json : true} , (error , response) => {
     
//     if(error) {
//          callback ("Unable to connect weather service" , undefined)
//     } else if(response.body.error){
//          callback (response.body.error.message , undefined)
//     } else {
//             callback (undefined , response.body.location.name + ' It Is  ' + response.body.current.condition.text  )
//     }
// })
// }

 const forecast = require ("./data1.js/forecast")

// forecast(29.871903452398 , 26.4941838299718 , (error , data) => {
//      console.log("ERROR : " , error)
//      console.log("DATA  : " , data)
// } )

/////////////////////////////////////////////////////////////////////////////////////

// const geocode = (address , callback) => {
// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw'

// request ({url : geocodeUrl , json : true} , (error , response) => {
//     if (error) {
//         callback ("nable to connect geocode Service" , undefined)
//     }
//     else if (response.body.message) {
//         callback (response.body.message , undefined)
//     }
//     else if (response.body.features.length == 0){
//          callback ("Unable to find location"  , undefined)
//     } 
//     else {
//         callback (undefined , {
//              longtitude :  response.body.features[0].center[0] ,
//              latitude : response.body.features[0].center[1]
//         } )
//     }
// } )
// }
    
 const geocode = require ('./data1.js/geocode')
const country = process.argv[2]

geocode ( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA  : " , data)

    if (data) {
        forecast( data.latitude , data.longtitude , (error , data) => {
            console.log("ERROR : " , error)
            console.log("DATA  : " , data)
       } )
    } else {
        console.log("Data Entered have An Error")
    }
   
} ) 

 