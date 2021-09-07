

function write(message, number){

    let ele = document.createElement("div");
    let sum = 2.15*number;
    ele.innerHTML=message+ " $"+sum;

    document.body.querySelector(".box").appendChild(ele)

    document.body.querySelector(".button").addEventListener("onclick", write);
}

let number1= Number(prompt("How many miles per year you drives?"));
let number2= Number(prompt("How much a gasoline per gallon?"));


write("To drive a car with a MPG rating of 12 for 10,000 miles at $2.15 per gallon would cost", 12);
write("To drive a car with a MPG rating of 17 for 10,000 miles at $2.15 per gallon would cost", 17);
write("To drive a car with a MPG rating of 26 for 10,000 miles at $2.15 per gallon would cost", 26);
write("To drive a car with a MPG rating of 29 for 10,000 miles at $2.15 per gallon would cost", 29);


