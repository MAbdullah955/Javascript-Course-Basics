      const object = {
        name: "Bag",
        quantity: 1,
        color: "black",
        contents: {
          Laptop: "Samsung",
          Charger: 1,
          Headphones: "Pink",
        },
        zipperOpen: false,
        toggleZipper: function (zipperStatus) {
          this.zipperOpen = zipperStatus;
        },
        newContents: function (Samsung, Pink) {
          this.contents.Laptop = Samsung;
          this.contents.Headphones = Pink;
        },
      };

      console.log("Object of Bag: ", object.contents);
      var bagContents = "contents";
      console.log(object[bagContents]);

      object.newContents("Dell", "Black");
      console.log(object.contents.Laptop);
    
      export default object;