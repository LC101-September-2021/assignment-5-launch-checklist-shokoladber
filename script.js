// Write your JavaScript code here!

// const { formSubmission, validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        let document = window.document;
        let userPilotName = document.querySelector("input[name=pilotName]");
        let userCoPilotName = document.querySelector("input[name=copilotName]");
        let userFuelLevel = document.querySelector("input[name=fuelLevel]");
        let userCargoMass = document.querySelector("input[name=cargoMass]");


        if (userPilotName.value === "" || userCoPilotName.value === "" || userFuelLevel.value === "" || userCargoMass.value === ""){
            alert("All fields are required!");
            event.preventDefault();
        } else {
            formSubmission(document, userPilotName, userCoPilotName, userFuelLevel, userCargoMass)
            event.preventDefault();
        };
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});