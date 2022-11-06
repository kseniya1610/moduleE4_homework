class ElectroDevice {
    constructor(name, plugged) {
        this.name = name
        this.plugged = plugged
    }
    calcWattage (kilowatts, hours) {
        let kwh = kilowatts * hours / 1000
        console.log(`${this.name} is using ${kwh}kWh/day`)
    }
    plug () {
        this.plugged = "plugged in"
        console.log(`${this.name} is ${this.plugged}`)
    }
    unplug () {
        this.plugged = "unplugged"
        console.log(`${this.name} is ${this.plugged}`)
    }
}

class Lamp extends ElectroDevice {
    constructor(name, color) {
        super()
        this.name = name
        this.color = color
    }
    describe () {
        console.log(`${this.name} is ${this.color}`)
    }
}

class Computer extends ElectroDevice {
    constructor(name, system) {
        super()
        this.name = name
        this.system = system
    }
    options () {
        console.log(`${this.name} is using ${this.system} system`)
    }
}

const lamp = new Lamp("Table Lamp", "yellow")
const comp = new Computer("My computer", "Windows98")

lamp.calcWattage(60, 24)
lamp.unplug()
lamp.describe()
comp.plug()
comp.calcWattage(300, 8)
comp.options()
comp.calcWattage(100, 24)
