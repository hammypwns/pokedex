class Pokemon {
    constructor(data) {
      this.id = data.id;

      //capitalize first letter
      this.name = data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1);

      //grabs default image
      this.sprite = data.sprites.front_default;

      //shows comma separated list of types
      this.type = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
      data.types.forEach(element => {
        if (element.type.name !== data.types[0].type.name) {
          this.type += ', ' + element.type.name.charAt(0).toUpperCase() + element.type.name.slice(1);
        }
      });

      //gets abilities
      this.abilities = data.abilities[0].ability.name.charAt(0).toUpperCase() + data.abilities[0].ability.name.slice(1);
      data.abilities.forEach(element => {
        if (element.ability.name !== data.abilities[0].ability.name) {
          this.abilities += ', ' + element.ability.name.charAt(0).toUpperCase() + element.ability.name.slice(1);
        }
      });

      //gathers all moves - commented out because some pokemon have a TON of moves
      //this.moves = data.moves[0].move.name.charAt(0).toUpperCase() + data.moves[0].move.name.slice(1);
      // data.moves.forEach(element => {
      //   if (element.move.name !== data.moves[0].move.name) {
      //     this.moves += ', ' + element.move.name.charAt(0).toUpperCase() + element.move.name.slice(1);
      //   }
      // });

      //displays name of generation
      switch (true) {
        case (data.id <= 151):
          this.region = "Kanto"
          break;
        case (data.id <= 251):
          this.region = "Johto"
          break;
        case (data.id <= 386):
          this.region = "Hoenn"
          break;
        case (data.id <= 493):
          this.region = "Sinnoh"
          break;
        case (data.id <= 649):
          this.region = "Unova"
          break;
        case (data.id <= 721):
          this.region = "Kalos"
          break;
        case (data.id <= 802):
          this.region = "Alola"
          break;
        default:
          this.region = "Kanto"
    }

    //gets weight
    this.weight = Math.round((data.weight/10)*2.20462);


    //gets height
    this.height = parseInt(data.height*0.328084, 10);
    this.height2 = Math.round(((data.height*0.328084) % 1) * 12);
  }
}

  export default Pokemon;