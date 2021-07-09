// Create a constructor function called `Character` that takes in 3 arguments: `name`, `strength`, `hitpoints`
class Character {
    constructor(name, strength, hitpoints) {
        this.name = name;
        this.strength = strength;
        this.hitpoints = hitpoints;
    }

    printStats() {
        console.log("Name: " + this.name)
        console.log("Strength: " + this.strength)
        console.log("Hitpoints: " + this.hitpoints)
    }

    isAlive() {
        if(this.hitpoints <= 0) {
            console.log(`${this.name} is dead`);
        } else {
            console.log(
                `${this.name} has ${this.hitpoints} hitpoints remaining`
            );
        }
    }

    attack(enemy) {
        console.log(`${this.name} has attacked ${enemy.name}!`)
        enemy.hitpoints = enemy.hitpoints - this.strength;
    }
}
//

// Create a prototype method called `printStats()` which prints all of the stats for a character

//

// Create a prototype method called `isAlive()` which prints whether or not this character is alive
// by determining whether their `hitpoints` are above or below zero
// YOUR CODE HERE
//

// Create a prototype method called `attack()` which takes in a second character
// and subtracts this character's `strength` from their `hitpoints`
// YOUR CODE HERE
//

// =============================================================

let warrior = new Character('Crusher', 10, 75);
let rogue = new Character('Dodger', 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();
