class Hero {
    private name: string;
    private power : number;
    public life: number;

    constructor (name: string, power : number, life: number) {
        this.name = name;
        this.power = power;
        this.life = life;
    }

    public attack = (opponent: Hero) => {
        opponent.life -= this.power;
        console.log(`${this.name} a attaqué ${opponent.name} et lui a infligé ${this.power} points de dégats`)
    }

    public isAlive = () => {
        if(this.life > 0){
            console.log(`${this.name} est vivant ! Il lui reste ${this.life} points de vie.`)
        } else {
            console.log(`RIP ${this.name}.`)
        }
    }
}

const jon = new Hero("Jon", 50, 70);
const daenarys = new Hero("Daenerys", 100, 50);

jon.attack(daenarys);
daenarys.isAlive();