// logic
var Manufacturer = {
  BMW: 'BMW',
  AUDI: 'AUDI',
  VW: 'VW',
  OPEL: 'OPEL'
};

function Car(manufacturer, model, year) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
}

Car.prototype.name = function() {
    return this.model + ", " + this.manufacturer;
}

Car.prototype.addAddon = function(addon) {
    return this.addons.push(addon);
}

function WorkShopCar(car, id, worker) {
    Car.call(this, car.manufacturer, car.model, car.year);
    this.id = id;
    this.worker = worker;
}

WorkShopCar.prototype = Object.create(Car.prototype);
WorkShopCar.prototype.constructor = WorkShopCar;

WorkShopCar.prototype.mechanic = function() {
    return `${this.worker.firstname} ${this.worker.lastname}`;
}

function WorkShop(workshopName, workers, manufacturer, limit = 10) {
    this.workshopName = workshopName;
    this.workers = workers;
    this.manufacturer = (typeof manufacturer === 'string') ? [manufacturer] : manufacturer;
    this.cars = [];
    this.limit = limit;
}

WorkShop.prototype.newCar = function(car) {
    const newCar = new WorkShopCar(car, Math.random(), this.workers[Math.floor(Math.random()*this.workers.length)]);
    console.log(`Welcome, you arrived in "${this.workshopName}" shop with (${newCar.name()})`);

    if ((this.cars.length + 1) > this.limit) {
        console.log(`Sorry, "${this.workshopName}" shop is full\n\n`);
        return false;
    } else if (this.manufacturer.indexOf(newCar.manufacturer) === -1) {
        console.log(`Sorry, "${this.workshopName}" shop is not fixing this car manufacturer\n\n`);
        return false;        
    } else {
        console.log(`New car (${newCar.name()}) is getting fixed in "${this.workshopName}" shop\n\n`);
        this.cars.push(newCar);
        return newCar.id;
    }
}

WorkShop.prototype.carFixed = function(id) {
    const car = this.cars.find(car => car.id === id)
    console.log(`${car.name()} was fixed in "${this.workshopName}" shop by ${car.mechanic()}\n\n`);
    this.cars = this.cars.filter(car => car.id !== id)
}

// Program
const workshop1 = new WorkShop(
    "Janez vse popravi",
    [
        {
            firstname: 'Janez',
            lastname: 'Novak'
        },
        {
            firstname: 'Franc',
            lastname: 'Horvat'
        },
        {
            firstname: 'Milena',
            lastname: 'Kovac'
        }
    ],
    Manufacturer.BMW
)

const workshop2 = new WorkShop(
    "Pr stefku",
    [
        {
            firstname: 'Stefan',
            lastname: 'Brezec'
        },
        {
            firstname: 'Tanja',
            lastname: 'Burja'
        },
        {
            firstname: 'Rudi',
            lastname: 'Ficko'
        }
    ],
    [
        Manufacturer.AUDI,
        Manufacturer.VW
    ],
    1
)

const car1 = new Car(Manufacturer.AUDI, 'S5', 2016);
const car2 = new Car(Manufacturer.VW, 'Passat', 2017);
let car1ShopId, car2ShopId

// Car 2
car2ShopId = workshop2.newCar(car2); // instant
setTimeout(function() {
    workshop2.carFixed(car2ShopId)
}, 3000) // after 3 seconds car is done

// Car 1
if(!workshop1.newCar(car1)) {
    const waiting = setInterval(function() {
        car1ShopId = workshop2.newCar(car1)
        if (car1ShopId) {
            clearInterval(waiting);
            setTimeout(function() {
                workshop2.carFixed(car1ShopId)
            }, 2000)
        }        
    }, 1000) // check every second if workshop is empty
}

