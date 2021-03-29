window.addEventListener("load", function() {
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

      if (parseInt(fuelLevel.value) < 10) {
         console.log(parseInt(fuelLevel.value));
         document.getElementById("fuelLevel").setAttribute("style", "color: green")
      }
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
