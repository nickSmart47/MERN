class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        // reduce target res by power
        target.res -= this.power
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude,) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            if(this.stat == 'resilience'){
                target.res += this.magnitude;
            }
            else {
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", 'resilience', 3 )
hardAlgorithm.play(redBeltNinja)

blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)
console.log(`Black Belt Ninja's current resilience: ${blackBeltNinja.res}`)

unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, "reduces target's resilience by 2", 'resilience', -2)
unhandledPromiseRejection.play(redBeltNinja)

pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", 'power', 2)
pairProgramming.play(redBeltNinja)

redBeltNinja.attack(blackBeltNinja)

console.log(`Black Belt Ninja's resilience after being attacked by Red Belt Ninja: ${blackBeltNinja.res}`)
