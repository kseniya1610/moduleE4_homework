const object = Object.create(null, {
    name: {value: "cat"}
});

function getDefinition(word) {
    return object[word];
}

console.log(getDefinition("name"));
console.log(getDefinition("constructor"))