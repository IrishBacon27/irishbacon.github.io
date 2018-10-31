function message() {
    console.log("==================");
    console.log("== " + text);
    console.log("==================");
}

message('Operator Precedence');

let result = 1 + (2 * 3);
console.log(result)

result = (1 + 2) * 3;
console.log(result);

message('For Loops');

for (let i = 0; i < 5; i ++) {
    console.log(i);
}