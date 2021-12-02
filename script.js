// Write your JavaScript code here!

import { validateInput, formSubmission, addDestinationInfo, pickPlanet, myFetch } from "./scriptHelper";

window.addEventListener("load", function() {

    let form = this.document.querySelector("form");
    form.addEventListener("submit", function(event){
        let userPilotName = document.querySelector("input[name=pilotName]");
        let userCoPilotName = document.querySelector("input[name=coPilotName]");
        let userFuelLevel = document.querySelector("input[name=fuelLevel]");
        let userCargoMass = document.querySelector("input[name=cargoMass]");
        if (userPilotName === "" || userCoPilotName === "" || userFuelLevel === "" || userCargoMass === ""){
            alert("All fields are required!");
            event.preventDefault();
        };
        validateInput;
        formSubmission;

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