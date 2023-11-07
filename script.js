// import Backpack from "./pack.js";

// const newPack = new Backpack(
//     "newBag",
//     "Black",
//     30,
//     false,
//     15,
//     17,
//     "June 10, 2020 Wednesday"
// );

// console.log(newPack);
// console.log(newPack.dateAcquired);
// console.log(newPack.backpackAge());

// export default newPack;

import Backpack from "./pack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  true,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("Date acquired:", everydayPack.dateAcquired);
console.log("Date acquired:", everydayPack.backpackAge());