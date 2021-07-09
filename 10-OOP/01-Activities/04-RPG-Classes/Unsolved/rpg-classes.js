// Paste your code from the previous activity `03-RPG-Prototypes`

// Convert the constructor function, including the prototype methods, to ES6 Classes.

// =============================================================

// Create two new instances of a `Character`, giving them different names, strength, and hitPoints.

// Call a combination of `printStats()`, `attack()`, and `isAlive()` methods to have the two characters "fight" in your console.
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

let theRock = new Character('The Rock', 10, 75);
let stoneCold = new Character('Stone Cold', 20, 50);

theRock.printStats();
stoneCold.printStats();

stoneCold.attack(theRock);
theRock.printStats();
theRock.isAlive();