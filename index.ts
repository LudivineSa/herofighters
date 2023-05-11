class Weapon {
    private name: string;
    private damage: number;

    constructor(name: string) {
        this.name = name;
        this.damage = 50;
    }

    public getName = () => {
        return this.name; 
    }

    public getDamage = () => {
        return this.damage;
    }
}

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
        opponent.life -= (this.power + this.weapon.getDamage());
        console.log(`${this.name} a attaqué ${opponent.name} et lui a infligé ${this.power + this.weapon.getDamage()} points de dégats`)
    }

    public isAlive = () : boolean => {
        if(this.life > 0){
            console.log(`${this.name} est vivant ! Il lui reste ${this.life} points de vie.`)
            return true;
        } else {
            console.log(`RIP ${this.name}.`)
            return false;
        }
    }
}

class HeroAxe extends Hero {
    
    constructor(name: string, power: number, life: number) {
        super(name, power, life)
        this.weapon = new Weapon("Axe")
    }
    

    attack  (opponent: Hero) {
        if (opponent.weapon.getName() === "Sword") {
            opponent.life -= ((this.power * 2) + this.weapon.getDamage())
            console.log(`Les dégats sont doublés ! Le héros a infligé ${(this.power * 2) + this.weapon.getDamage()} points de dégats!`)
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
            opponent.life -= ((this.power * 2) + this.weapon.getDamage())
            console.log(`Les dégats sont doublés ! Le héros a infligé ${(this.power * 2) + this.weapon.getDamage()} points de dégats!`)
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
            opponent.life -= ((this.power * 2) + this.weapon.getDamage())
            console.log(`Les dégats sont doublés ! Le héros a infligé ${(this.power * 2) + this.weapon.getDamage()} points de dégats!`)
        } else {
            super.attack(opponent)
        }
    }
 }

const lance = new HeroSpear("Lance", 70, 110);
const epee = new HeroSword("Epée", 50, 130);
const hache = new HeroAxe("Hache", 30, 160);

let isBothAlive = true;

while (isBothAlive) {
    epee.attack(hache)
    hache.attack(epee)

    let livingEpee = epee.isAlive();
    let livingHache = hache.isAlive()
    if(!livingHache || !livingEpee) {
        isBothAlive= false;
        console.log("Le combat est terminé")
        if(!livingHache && !livingEpee) {
            console.log("Les deux sont morts")
        } else if (!livingEpee && livingHache) {
            console.log(`Hache est le survivant avec ${hache.life} points de vie`)
        } else {
            console.log(`Epée est le survivant avec ${epee.life} points de vie`)
        }
    }
}
