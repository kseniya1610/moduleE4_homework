const key = (string, object) => {
    if (string in object) {
        return true
    } else {
        return false
    }
}

const obj = {
    name: "x",
    age: 56
}

let x = key("name", obj)
let y = key("day", obj)

console.log(`${x}\n${y}`)