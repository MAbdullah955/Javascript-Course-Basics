import Backpack from "./pack.js";

const newPack = new Backpack(
    "newBag",
    "Black",
    30,
    false,
    15,
    17
);

console.log(newPack)
console.log(newPack.strapLength)

export default newPack;