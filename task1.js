const object = {
    name: "Kseniya",
    age: 29
}

const getProperty = (obj) => { 
    for (let key in obj ) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`)
        }
    }
}

getProperty(object)