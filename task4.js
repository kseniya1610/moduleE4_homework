function ElectroDevice(name, plugged){
    this.name = name,
    this.plugged = plugged,
    this.calcWattage = function (kilowatts, hours) {
        let kwh = kilowatts * hours / 1000
        console.log(`${this.name} is using ${kwh}kWh/day`)
    },
    this.plug = function() {
        this.plugged = "plugged in"
        console.log(`${this.name} is ${this.plugged}`)
    },
    this.unplug = function() {
        this.plugged = "unplugged"
        console.log(`${this.name} is ${this.plugged}`)
    }
}

function Lamp(name, color) {
    this.name = name,
    this.color = color,
    this.describe = function() {
        console.log(`${this.name} is ${this.color}`)
    }
}

Lamp.prototype = new ElectroDevice

function Computer(name, system) {
    this.name = name,
    this.system = system,
    this.options = function() {
        console.log(`${this.name} is using ${this.system} system`);
    }
}

Computer.prototype = new ElectroDevice

const lamp = new Lamp("Table Lamp", "yellow")
const comp = new Computer("My computer", "Windows98")

lamp.calcWattage(60, 24)
lamp.unplug()
lamp.describe()
comp.plug()
comp.calcWattage(300, 8)
comp.options()
comp.calcWattage(100, 24)