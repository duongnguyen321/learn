let superCar = {
    name: "Lamborghini Huracán",
    manufacture: "Lamborghini",
    class: "Sports Car",
    platform: "Modular Sports System",
    isLuxury: true,
    price: "$210,180",
    designers: {
        first: "Filippo Perini",
        second: "Mitja Borkert",
    }
}

let laptopGaming = {
    name: "Legion 5 Gen 6",
    processor: "AMD Ryzen 7 5800H",
    operatingSystem: "Windows 10 Pro 64 bit",
    memory: "16 GB DDR4",
    priceInUSD: 1549,
    isGoodToHave: true,
}

let proMechanicalGamingKeyboard = {
    name: "Logitech G Pro",
    switchType: "GX BLUE",
    priceInUSD: 129,
    height: "1.3 in",
    width: "14.2 in",
    cableInFT: 5.9,
}


let memoryOfLegion5 = "memory";

console.log(superCar.name);

console.log(laptopGaming["processor"]);

console.log(laptopGaming[memoryOfLegion5]);

