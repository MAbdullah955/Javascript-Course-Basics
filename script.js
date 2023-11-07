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

const content = 
<main>
    <article>
        <h1>Title</h1>
        <ul>
            <li>Name: ${everydayPack.name}</li>
            <li>Volume: ${everydayPack.volume}</li>
            <li>Color: ${everydayPack.color}</li>
            <li>PocketNum: ${everydayPack.pocketNum}</li>
            <li>StrapLengthL: ${everydayPack.strapLengthL}</li>
            <li>StrapLengthR: ${everydayPack.strapLengthR}</li>
            <li>LidOpen: ${everydayPack.lidOpen}</li>
            <li>DateAcquired: ${everydayPack.dateAcquired}</li>
        </ul>
    </article>
</main>

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