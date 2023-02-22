let check = 3 == "3";
console.log(check);

check = 3 === "3";
console.log(check);

console.log(2 + 4 * 3 % 5 - 1 * 6 / (1 + 1));

let user = {
    username: "don123"
}
console.log(user["username"]);


let user2 = Object();
user2["username2"] = "don123";
console.log(user2["username2"]);


let c14_database = Object();

c14_database["001"] = {
    name: "Folahan\n",
    age: 21,
    gender: "male\n",
    height: "6'0\n",
    relationship_status: "single\n"
}
console.log(c14_database["001"]);


let sum = 1 + "1";
console.log(sum);
console.log(`1 ${sum}`);


let sum2 = 1 + "1";
console.log(typeof sum);
console.log("1".repeat(20));

let divide = 1 - "1";
console.log(typeof divide);