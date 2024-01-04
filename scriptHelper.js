// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
 let div = document.getElementById("missionTarget");// Here is the HTML formatting for our mission target div.

 div.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
      <li>Name: ${name} </li>
      <li>Diameter: ${diameter} </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance} </li>
      <li>Number of Moons: ${moons} </li>
    </ol>
    <img src= ${imageUrl} />  `;
}



function validateInput(testInput) {
    console.log("validateInput");
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(Number(testInput))) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

     let pilotStatus = document.getElementById("pilotStatus");
     let copilotStatus = document.getElementById("copilotStatus");
     let fuelStatus = document.getElementById("fuelStatus");
     let cargoStatus = document.getElementById("cargoStatus");
     let launchStatus = document.getElementById("launchStatus");
 

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"
        || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
    } else  {

        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000 && cargoLevel >= 10000 ) {
            fuelStatus.innerHTML = `Fuel level too low for launch`; 
            cargoStatus.innerHTML = `Cargo mass too high for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "red";
        } else if (fuelLevel >= 10000 && cargoLevel >= 10000){
            fuelStatus.innerHTML = `Fuel level enough for launch`; 
            cargoStatus.innerHTML = `Cargo mass too high for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "red";
        } else if (fuelLevel < 10000 && cargoLevel < 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "red";
        } else {            
            fuelStatus.innerHTML = `Fuel level enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = "green";
        };

        //could be used to alter which planet is eligible to travel to depending on mass and cargo level
        
//         let space_shuttle_name = "Determination";

// let shuttle_speed_inmph = 17500;

// let distance_to_mars_inkm = 225000000;

// let distance_to_Moon_inkm = 384400;

// let Miles_per_kilometer = 0.621;

// console.log(typeof "Determination");
// console.log(typeof 17500);
// console.log(typeof 225000000);
// console.log(typeof 384400);
// console.log(typeof 0.621);

// let miles_to_mars = distance_to_mars_inkm * Miles_per_kilometer;
// let hours_to_mars = distance_to_mars_inkm / shuttle_speed_inmph;
// let days_to_mars = hours_to_mars / 24;

// console.log(" We are " + miles_to_mars + " miles away from Mars.");
// console.log(" It will take " + hours_to_mars + " hours to reach Mars.");
// console.log(" It will take " + days_to_mars + " days to reach Mars.");

// let miles_to_moon = distance_to_Moon_inkm * Miles_per_kilometer;
// let hours_to_moon = distance_to_Moon_inkm / shuttle_speed_inmph;
// let days_to_moon = hours_to_moon / 24;

// console.log(" We are " + miles_to_moon + " miles away from the Moon.");
// console.log(" It will take " + hours_to_moon + " hours to reach the Moon.");
// console.log(" It will take " + days_to_moon + " days to reach the Moon.");
     

    } 
   
}







async function myFetch() {
    

   let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json()
       
       }
    
         
      );
      
      return planetsReturned;
     
 }

 function pickPlanet(planets) {

     let index = Math.floor(Math.random() * planets.length);
    return planets[index];
 }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
