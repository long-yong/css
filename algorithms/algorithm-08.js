
// Playing with Objects

var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

// print John's age?
for (i in users) {
    if (users[i]["name"] == "John") {
        console.log(users[i]["age"]);
    }
}

// print the name of the first object
console.log(users[0]["name"]);

// print each user's name and age
for (i in users) {
    console.log(users[i]["name"] + " - " + users[i]["age"]);
}