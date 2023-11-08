import Backpack from "./pack.js"

const newPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2016 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const main = document.querySelector(".maincontent");

const content = `
  <article class="backpack" id="everyday">
  <figure class="backpack__image">
  <img src=${newPack.image} alt="" />
</figure>
<h1 class="backpack__name">${newPack.name}</h1>
<ul class="backpack__features">
  <li class="backpack__volume">Volume:<span> ${newPack.volume}l</span></li>
  <li class="backpack__color">Color:<span> ${newPack.color}</span></li>
  <li class="backpack__age">Age:<span> ${newPack.backpackAge()} days old</span></li>
  <li class="backpack__pockets">Number of pockets:<span> ${newPack.pocketNum}</span></li>
  <li class="backpack__strap">Left strap length:<span> ${newPack.strapLength.left} inches</span></li>
  <li class="backpack__strap">Right strap length:<span> ${newPack.strapLength.right} inches</span></li>
  <li class="backpack__lid">Lid status:<span> ${newPack.lidOpen}</span></li>
</ul>
  </article>
`;

main.innerHTML = content;