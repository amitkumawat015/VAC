let cp = Number(prompt("Enter Cost Price:"));
let sp = Number(prompt("Enter Selling Price:"));

if (sp > cp) {
    let profit = sp - cp;
    console.log("Profit = " + profit);
} 
else if (sp < cp) {
    let loss = cp - sp;
    console.log("Loss = " + loss);
} 
else {
    console.log("No Profit No Loss");
}
