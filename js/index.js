// const audi = {
//     make: "Audi",
//     model: "2020 Audi R8 Coupe",
//     horse_power: "562 to 611 hp",
//     passanger: 2,
//     convertible: false,
//     year: 2020,
//     mileage: 100,
//     color: "navy blue"
// }

const init = () => {
  const greenColor = document.querySelector("#greenplanet");
  // console.log(greenColor.innerHTML);
  greenColor.innerHTML = "I am a green planet";

  const redColor = document.querySelector("#redplanet");
  // console.log(redColor.innerHTML);
  redColor.innerHTML = "I am a red star!";

  const blueColor = document.querySelector("#blueplanet");
  // console.log(blueColor.innerHTML);
  blueColor.innerHTML = "I am the Earth";

  greenColor.textContent = "Updated using text content!";
};

window.onload = init;
