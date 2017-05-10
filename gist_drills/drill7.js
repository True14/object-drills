function createCharacter(Name, Nickname, Race, Origin, Attack, Defense) {
  return {
    Name, Nickname, Race, Origin, Attack, Defense,
    describe: function() {
      return `${this.Name} is a ${this.Race} from ${this.Origin}.`;
    },
    evaluateFight: function(char) {
      let x = 0;
      let y = 0;
      if (this.Attack > char.Defense) {
        x = (this.Attack - char.Defense);
      };
      if (char.Attack > this.Defense) {
        y = (char.Attack - this.Defense);
      };
      return `Your opponent takes ${x} damage and you receive ${y} damage.`;
    },
  }
};

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 6),
];
// const gdalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
// const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);

// characters.find(character => character.Nickname === 'aragorn').describe();

// console.log(characters.filter(character => character.Race === 'Hobbit'));

// console.log(characters.filter(character => character.Attack > 5));

function weapons(obj, weaponName) {
  obj.weapon = weaponName;
  // obj.descWep = function() {
  //   return obj.describe() + `who uses ${obj.weapon}`
  // };
  obj.describe = function() {
    return `${this.Name} is a ${this.Race} from ${this.Origin} who uses ${this.weapon}.`
  };
}

weapons(characters[0], 'wizard staff');
console.log(characters[0].describe());
