let available = "true";
available = Boolean(available).valueOf();
console.log(typeof available);

let count = "4";
count = Number(count).valueOf();
console.log(typeof count);

let library = Object();
library["data"] = {
    ID: "001",
    available: available,
    count: count,
    name: "Eloquent JavaScript",
    author: "Ugo C. Ugo"
}
console.log(library["data"]);