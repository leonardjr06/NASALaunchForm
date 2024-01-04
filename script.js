// Write your JavaScript code here!







window.addEventListener("load", function() {
console.log("god help us");
    let listedPlanets ;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()

     let listedPlanetsResponse = myFetch();
      listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
    
        }).then(function () {
        console.log(listedPlanets);

//        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
 
        
let planetInfo = pickPlanet(listedPlanets);
let planetName = planetInfo.name
let planetDiameter = planetInfo.diameter
let planetStar = planetInfo.star
let planetDistance = planetInfo.distance
let planetMoons = planetInfo.moons
let planetImageURL = planetInfo.image

addDestinationInfo(document, planetName,planetDiameter, planetStar, planetDistance, planetMoons, planetImageURL)

       })
 
       

    let list = document.getElementById("faultyItems");
    const form = document.querySelector('form');
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let pilot = pilotNameInput.value
        let copilot = copilotNameInput.value
        let fuelLevel = fuelLevelInput.value
        let cargoLevel = cargoMassInput.value
        
            
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)


        

        /* hen using pickPlanet() and addDestinationInfo(), 
         select a planet at random from listedPlanets and pass that information to addDestinationInfo().
          Reload your page and check out your site to see the mission target information.*/
            
       
    })
        
    });

