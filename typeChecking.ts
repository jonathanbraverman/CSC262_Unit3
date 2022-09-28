console.log("\n\t\tboolean")
let var0001: boolean = true;
let var0002 = false;
console.log(typeof var0001 + " = " + var0001);
console.log(typeof var0002 + " = " + var0002);

console.log("\n\t\tnumber")
let var1000:number = 1000;   
let var2000 = 2000;
//let var3000:bigint = 9007199254740991n;
//let var4000 = 9007199254740991n;
console.log(typeof var1000 + " = " + var1000);
console.log(typeof var2000 + " = " + var2000);
console.log(typeof var3000 + " = " + var3000);
console.log(typeof var3000 + " = " + var4000);

console.log("\n\t\tstring")
let varstr1: string = "blue";
let varstr2 = "red";
console.log(typeof varstr1 + " = " + varstr1);
console.log(typeof varstr2 + " = " + varstr2);

console.log("\n\t\tunknown")
let varq1: unknown;
console.log(typeof varq1 + " = " + varq1);
varq1 = true;
console.log(typeof varq1 + " = " + varq1);
varq1 = 1000;
console.log(typeof varq1 + " = " + varq1);
//let assignee1: number = varq1;
//let assignee1: number = varq1 as number;  console.log("assignee1 -- " + typeof assignee1 + " = " + assignee1);
varq1 = "10E3";
console.log(typeof varq1 + " = " + varq1);
let assignee1: number = Number(varq1);console.log("assignee1 -- " + typeof assignee1 + " = " + assignee1);
varq1 = undefined;
console.log(typeof varq1 + " = " + varq1);

console.log("\n\t\tany")
let varany1: any;
let assignee2: number = varany1;
console.log(typeof varany1 + " = " + varany1);
varany1 = false;
console.log(typeof varany1 + " = " + varany1);
varany1 = -5000000;
console.log(typeof varany1 + " = " + varany1);
varany1 = "goodbye";
console.log(typeof varany1 + " = " + varany1);
varany1 = undefined;
console.log(typeof varany1 + " = " + varany1);
