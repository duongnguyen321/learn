function Weapon(name, damage, speed) {
    this.name = name;
    this.damage = damage;
    this.speed = speed;

    this.toString = function () {
        return `Tấn công bằng ${this.name}, gây ra ${this.damage} sát thương!`;
    };
}

let knife = new Weapon("Dao", 1000, 1.5);
let gun = new Weapon("Súng", 100000, 0.5);
let blade = new Weapon("Kiếm", 50000, 1.0);
let gauntlet = new Weapon("Bao tay", 10000, 2.0);

function Character(name, weapon) {
    this.name = name;
    this.level = 1;
    this.weapon = weapon;
    this.exp = 0;

    this.attack = function () {
        console.log(this.weapon.toString());
        this.exp += 1;

        if (this.exp == 10) {
            this.level += 1;
            console.log(`Cấp hiện tại: ${this.level}`);
            this.exp = 0;
        }

        return this;
    };

    this.changeWeapon = function (weapon) {
        this.weapon = weapon;
        return this;
    };
}

let yasuo = new Character("Yasuo", blade);
let leesin = new Character("Leesin", gauntlet);
