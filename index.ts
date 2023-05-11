class Hero {
    private name: string;
    protected power : number;
    public life: number;
    public weapon: Weapon;

    constructor (name: string, power : number, life: number) {
        this.name = name;
        this.power = power;
        this.life = life;
    }

    public attack (opponent: Hero) : void {
        opponent.life -= this.power;
        console.log(`${this.name} a attaqué ${opponent.name} et lui a infligé ${this.power} points de dégats`)
    }

    public isAlive = () : void => {
        if(this.life > 0){
            console.log(`${this.name} est vivant ! Il lui reste ${this.life} points de vie.`)
        } else {
            console.log(`RIP ${this.name}.`)
        }
    }
}

class Weapon {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName = () => {
        return this.name; 
    }
}

class HeroAxe extends Hero {
    
    constructor(name: string, power: number, life: number) {
        super(name, power, life)
        this.weapon = new Weapon("Axe")
    }
    

    attack  (opponent: Hero) {
        if (opponent.weapon.getName() === "Sword") {
            opponent.life -= (this.power * 2)
            console.log(`Les dégats sont doublés ! Le héros a infligé ${this.power * 2} points de dégats!`)
        } else {
            super.attack(opponent)
        }
    }
}

class HeroSword extends Hero {
    
    constructor(name: string, power: number, life: number) {
        super(name, power, life)
        this.weapon = new Weapon("Sword")
    }

    attack  (opponent: Hero) {
        if (opponent.weapon.getName() === "Spear") {
            opponent.life -= (this.power * 2)
            console.log(`Les dégats sont doublés ! Le héros a infligé ${this.power * 2} points de dégats!`)
        } else {
            super.attack(opponent)
        }
    }

}

class HeroSpear extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life)
        this.weapon = new Weapon("Spear")
    }
    

    attack  (opponent: Hero) {
        if (opponent.weapon.getName() === "Axe") {
            opponent.life -= (this.power * 2)
            console.log(`Les dégats sont doublés ! Le héros a infligé ${this.power * 2} points de dégats!`)
        } else {
            super.attack(opponent)
        }
    }
 }

const jon = new Hero("Jon", 50, 70);
const daenerys = new Hero("Daenerys", 100, 50);
const lance = new HeroSpear("Lance", 50, 100);
const epee = new HeroSword("Epée", 50, 100);
const hache = new HeroAxe("Hache", 50, 100);

jon.attack(daenerys);
daenerys.isAlive();

console.log("Hache attaque lance")
hache.attack(lance);
console.log("Hache attaque épée")
hache.attack(epee)
