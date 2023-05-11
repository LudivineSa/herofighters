var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Weapon = /** @class */ (function () {
    function Weapon(name) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getDamage = function () {
            return _this.damage;
        };
        this.name = name;
        this.damage = 50;
    }
    return Weapon;
}());
var Hero = /** @class */ (function () {
    function Hero(name, power, life) {
        var _this = this;
        this.isAlive = function () {
            if (_this.life > 0) {
                console.log("".concat(_this.name, " est vivant ! Il lui reste ").concat(_this.life, " points de vie."));
                return true;
            }
            else {
                console.log("RIP ".concat(_this.name, "."));
                return false;
            }
        };
        this.name = name;
        this.power = power;
        this.life = life;
    }
    Hero.prototype.attack = function (opponent) {
        opponent.life -= (this.power + this.weapon.getDamage());
        console.log("".concat(this.name, " a attaqu\u00E9 ").concat(opponent.name, " et lui a inflig\u00E9 ").concat(this.power + this.weapon.getDamage(), " points de d\u00E9gats"));
    };
    return Hero;
}());
var HeroAxe = /** @class */ (function (_super) {
    __extends(HeroAxe, _super);
    function HeroAxe(name, power, life) {
        var _this = _super.call(this, name, power, life) || this;
        _this.weapon = new Weapon("Axe");
        return _this;
    }
    HeroAxe.prototype.attack = function (opponent) {
        if (opponent.weapon.getName() === "Sword") {
            opponent.life -= ((this.power * 2) + this.weapon.getDamage());
            console.log("Les d\u00E9gats sont doubl\u00E9s ! Le h\u00E9ros a inflig\u00E9 ".concat((this.power * 2) + this.weapon.getDamage(), " points de d\u00E9gats!"));
        }
        else {
            _super.prototype.attack.call(this, opponent);
        }
    };
    return HeroAxe;
}(Hero));
var HeroSword = /** @class */ (function (_super) {
    __extends(HeroSword, _super);
    function HeroSword(name, power, life) {
        var _this = _super.call(this, name, power, life) || this;
        _this.weapon = new Weapon("Sword");
        return _this;
    }
    HeroSword.prototype.attack = function (opponent) {
        if (opponent.weapon.getName() === "Spear") {
            opponent.life -= ((this.power * 2) + this.weapon.getDamage());
            console.log("Les d\u00E9gats sont doubl\u00E9s ! Le h\u00E9ros a inflig\u00E9 ".concat((this.power * 2) + this.weapon.getDamage(), " points de d\u00E9gats!"));
        }
        else {
            _super.prototype.attack.call(this, opponent);
        }
    };
    return HeroSword;
}(Hero));
var HeroSpear = /** @class */ (function (_super) {
    __extends(HeroSpear, _super);
    function HeroSpear(name, power, life) {
        var _this = _super.call(this, name, power, life) || this;
        _this.weapon = new Weapon("Spear");
        return _this;
    }
    HeroSpear.prototype.attack = function (opponent) {
        if (opponent.weapon.getName() === "Axe") {
            opponent.life -= ((this.power * 2) + this.weapon.getDamage());
            console.log("Les d\u00E9gats sont doubl\u00E9s ! Le h\u00E9ros a inflig\u00E9 ".concat((this.power * 2) + this.weapon.getDamage(), " points de d\u00E9gats!"));
        }
        else {
            _super.prototype.attack.call(this, opponent);
        }
    };
    return HeroSpear;
}(Hero));
var lance = new HeroSpear("Lance", 70, 110);
var epee = new HeroSword("Epée", 50, 130);
var hache = new HeroAxe("Hache", 30, 160);
var isBothAlive = true;
while (isBothAlive) {
    epee.attack(hache);
    hache.attack(epee);
    var livingEpee = epee.isAlive();
    var livingHache = hache.isAlive();
    if (!livingHache || !livingEpee) {
        isBothAlive = false;
        console.log("Le combat est terminé");
        if (!livingHache && !livingEpee) {
            console.log("Les deux sont morts");
        }
        else if (!livingEpee && livingHache) {
            console.log("Hache est le survivant avec ".concat(hache.life, " points de vie"));
        }
        else {
            console.log("Ep\u00E9e est le survivant avec ".concat(epee.life, " points de vie"));
        }
    }
}
