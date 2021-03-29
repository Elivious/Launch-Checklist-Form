window.addEventListener("load", function() {
   let selector = Math.floor(Math.random() * 6);
   let destination;
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       response.json().then(function(json) {
           destination = json[selector];
           missionTarget.innerHTML = `
           <h2>Mission Destination</h2>
           <ol>
              <li>Name: ${destination.name}</li>
              <li>Diameter: ${destination.diameter}</li>
              <li>Star: ${destination.star}</li>
              <li>Distance from Earth: ${destination.distance}</li>
              <li>Number of Moons: ${destination.moons}</li>
           </ol>
           <img src="${destination.image}">
    `;
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      const regex = /^[a-zA-Z\s]*$/
      event.preventDefault();
      if (pilotNameInput.value === "" || copilotName.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }else if (isNaN(parseInt(fuelLevel.value))  || isNaN(parseInt(cargoMass.value))){
         alert("Must enter a numerical value!");
         event.preventDefault();
      }else if (!regex.test(pilotNameInput.value)  || !regex.test(copilotName.value)){
         alert("Must enter a valid name!");
         event.preventDefault();
      }


      if (parseInt(fuelLevel.value) < 10000 && parseInt(cargoMass.value) > 10000) {
         launchStatusCheck.innerHTML = `
         <h2>Shuttle not ready for launch</h2>
         <div id="faultyItems">
            <ol>
               <li>There is not enough fuel for the journey.</li>
               <li>this is too much mass for takeoff.</li>
            </ol>
         </div>   `
         document.getElementById("faultyItems").setAttribute("style", "color: red; visibility: visible");
      }else if (parseInt(cargoMass.value) > 10000){
         launchStatusCheck.innerHTML = `
         <h2>Shuttle not ready for launch</h2>
         <div id="faultyItems">
            <ol>
               <li>There is too much mass for take off.</li>
            </ol>
         </div>   `
         document.getElementById("faultyItems").setAttribute("style", "color: red; visibility: visible");
      }else if (parseInt(fuelLevel.value) < 10000) {
         launchStatusCheck.innerHTML = `
         <h2>Shuttle not ready for launch</h2>
         <div id="faultyItems">
            <ol>
               <li>There is not enough fuel for the journey.</li>
            </ol>
         </div>   `
         document.getElementById("faultyItems").setAttribute("style", "color: red; visibility: visible");
      }else{
         launchStatusCheck.innerHTML = `
         <h2>Shuttle is ready for launch</h2>
         <div id="faultyItems">
            <ul>
               <li>Pilot: ${pilotNameInput.value}</li>
               <li>Co-Pilot: ${copilotName.value}</li>
               <li>Fuel: ${fuelLevel.value}L</li>
               <li>Cargo Mass: ${cargoMass.value}kg</li>
            </ul>
         </div>   `
         document.getElementById("faultyItems").setAttribute("style", "color: green; visibility: visible");
      }
          })
      })   
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
