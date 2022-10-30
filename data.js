const feet = 3.281;
const gallon = 0.264;
const pound = 2.204;

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
function converting() {
    let NumberInput = document.getElementById("Input-Number").value;
    let volume = document.getElementById("volume")
    let mass = document.getElementById("mass")
    let length = document.getElementById("length");
    let convertLength = NumberInput * feet;
    let convertVolume = NumberInput * gallon;
    let convertMass = NumberInput * pound;
    let convertFeet = NumberInput / feet;
    let convertGallons = NumberInput / gallon;
    let convertPounds = NumberInput / pound;
    length.innerHTML = `<p class='description' id='length'>
     ${NumberInput} meters =${convertLength.toFixed(3)} feet | ${NumberInput} feet = ${convertFeet.toFixed(3)} meters
     </p>
    `
    volume.innerHTML = `<p class='description' id='volume'>
    ${NumberInput} liters =${convertVolume.toFixed(3)} gallons | ${NumberInput} gallons = ${convertGallons.toFixed(3)} liters
    </p>
   `
    mass.innerHTML = `<p class='description' id='mass'>
   ${NumberInput} kilos =${convertMass.toFixed(3)} pounds | ${NumberInput} pounds = ${convertPounds.toFixed(3)} kilos
   </p>
  `

}
console.log(converting())