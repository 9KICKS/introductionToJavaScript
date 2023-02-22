left_operand = 2;
right_operand = 2;
operators = "+";

if (operators === "+") {
    results = left_operand + right_operand;
    console.log(results);
}
else if (operators === "-") {
    results = left_operand - right_operand;
    console.log(results);
}
else if (operators === "*") {
    results = left_operand * right_operand;
    console.log(results);
}
else if (operators === "/") {
    results = left_operand / right_operand;
    console.log(results);
}
else if (operators === "%") {
    results = left_operand % right_operand;
    console.log(results);
}
else {
    console.log("Invalid operand");
}