// class Backpack {
//     constructor (
//         name,
//         color,
//         volume,
//         zipOpen,
//         strapLengthL,
//         strapLengthR,
//         dateAcquired
//     )
//     {
//         this.name = name,
//         this.color = color,
//         this.volume = volume,
//         this.zipOpen = zipOpen,
//         this.strapLength = {
//             Left: strapLengthL,
//             Right: strapLengthR
//         }
//         this.dateAcquired = dateAcquired
//     }

//     toggleZip (lidStatus){
//     this.zipOpen = zipStatus
//     }   

//     newStrapLength (lengthLeft, lengthRight){
//     this.strapLength.Left = lengthLeft,
//     this.strapLength.Right = lengthRight
//     }

//     backpackAge () {
//         let now = new Date();
//         let acquired = new Date(this.dateAcquired);
//         let timeSpent = now - acquired;
//         let daysSinceAcquired = Math.floor(timeSpent / (1000 * 3600 * 24));
//         return daysSinceAcquired;
//     }
// }

// export default Backpack;

class Backpack {
    constructor(
      name,
      volume,
      color,
      pocketNum,
      strapLengthL,
      strapLengthR,
      lidOpen,
      dateAcquired
    ) {
      this.name = name;
      this.volume = volume;
      this.color = color;
      this.pocketNum = pocketNum;
      this.strapLength = {
        left: strapLengthL,
        right: strapLengthR,
      };
      this.lidOpen = lidOpen;
      this.dateAcquired = dateAcquired;
    }
    toggleLid(lidStatus) {
      this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    }
    backpackAge() {
      let now = new Date();
      let acquired = new Date(this.dateAcquired);
      let elapsed = now - acquired;
      let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
      return daysSinceAcquired;
    }
  }
  
  export default Backpack;