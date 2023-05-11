var Hero = /** @class */ (function () {
    function Hero(name, power, life) {
        var _this = this;
        this.attack = function (opponent) {
            opponent.life -= _this.power;
            console.log("".concat(_this.name, " a attaqu\u00E9 ").concat(opponent.name, " et lui a inflig\u00E9 ").concat(_this.power, " points de d\u00E9gats"));
        };
        this.isAlive = function () {
            if (_this.life > 0) {
                console.log("".concat(_this.name, " est vivant ! Il lui reste ").concat(_this.life, " points de vie."));
            }
            else {
                console.log("".concat(_this.name, " est mort."));
            }
        };
        this.name = name;
        this.power = power;
        this.life = life;
    }
    return Hero;
}());
var jon = new Hero("Jon", 50, 70);
var daenarys = new Hero("Daenery", 100, 50);
jon.attack(daenarys);
daenarys.isAlive();
