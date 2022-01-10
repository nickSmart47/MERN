class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
}
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(`${this.name} - Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }
    drinkSake(){
        this.health += 10;
    }
}





/*
Create a Ninja class

add an attribute: name

add an attribute: health

add a attribute: speed - give a default value of 3

add a attribute: strength - give a default value of 3

add a method: sayName() - This should log that Ninja's name to the console

add a method: showStats() - This should show the Ninja's name, strength, speed, and health.

add a method: drinkSake() - This should add +10 Health to the Ninja
*/

// Example Outputs
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();