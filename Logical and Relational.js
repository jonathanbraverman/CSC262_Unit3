var logic1;
var logic2;
var logic3;
var logic4;
var var11 = 0;
var var22 = 100;
console.log("logic1 = var11 < var22");
logic1 = (var11 < var22);
console.log(logic1);
console.log(var11 < var22, "\n");
console.log("logic2 = var11 > var22");
logic2 = (var11 > var22);
console.log(logic2);
console.log(var11 > var22, "\n");
console.log("logic3 = var11 == var22");
logic3 = (var11 == var22);
console.log(logic3);
console.log(var11 == var22, "\n");
console.log("logic3 = var11 != var22");
logic3 = (var11 != var22);
console.log(logic3);
console.log(var11 != var22, "\n");
console.log("logic1 && logic2");
console.log(logic1 && logic2, "\n");
console.log("logic1 || logic2");
console.log(logic1 || logic2, "\n");
console.log("!logic2");
console.log(!logic2, "\n");
logic1 = true;
var string1 = "logic1" + " was"; //--> "logic1 was"
if (logic1) {
    console.log(string1, logic1);
}
else if (logic2) {
    console.log(string1, logic1, "but logic 2 was", logic2);
}
else {
    console.log(string1, logic1, "and logic 2 was", logic2);
}
var11 = -1;
if (var11 == 0) {
    console.log("if - va11 is", var11);
}
else if (var11 > 0) {
    console.log("else if - var11 is", var11);
}
else // if(var11 < 0)
 {
    console.log("else - var11 is", var11);
}
var inputvalue = "When";
switch (inputvalue) {
    case "Yes":
        console.log("Yay");
        break;
    case "No":
        console.log("Boo");
        break;
    case "Maybe":
        console.log("Please!!!!");
        break;
    default:
        console.log("What?");
        break;
}
