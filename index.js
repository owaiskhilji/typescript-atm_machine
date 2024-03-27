#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk";
let mybalance = 20000;
let first_amount = 5000;
let sec_amount = 10000;
let thir_amount = 15000;
let my_pin = 2222;
let answer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter the pin code"
    }
]);
if (answer.pin == my_pin) {
    console.log("corect the pin code ");
    async function main() {
        let get_operation = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "choose the list",
                choices: ["withdraw", "check balance"]
            }
        ]);
        if (get_operation.operation === "check balance") {
            console.log(chalk.bgBlue(`your Balance is ${mybalance}`));
        }
        if (get_operation.operation === "withdraw") {
            let get_amount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "list",
                    message: "Enter the amount",
                    choices: ["5000", "10000", "15000", "other"]
                }
            ]);
            if (get_amount.amount > mybalance) {
                console.log(chalk.bgRed(`sorry! your balance is ${mybalance}`));
            }
            else {
                if (get_amount.amount === "5000") {
                    let a = mybalance - first_amount;
                    console.log(chalk.bgGreen(`your remaing balance is ${a}`));
                    mybalance = a;
                }
                else if (get_amount.amount === "10000") {
                    let b = mybalance - sec_amount;
                    console.log(chalk.bgGreen(`your remaing balance is ${b}`));
                    mybalance = b;
                }
                else if (get_amount.amount === "15000") {
                    let c = mybalance - thir_amount;
                    console.log(chalk.bgGreen(`your remaing balance is ${c}`));
                    mybalance = c;
                }
                else if (get_amount.amount === "other") {
                    let other_amount = await inquirer.prompt({
                        name: "otheramount",
                        type: "number",
                        message: "Enter the other amount",
                    });
                    if (other_amount.otheramount > mybalance) {
                        console.log(chalk.bgRed(`sorry! your balance is ${mybalance}`));
                    }
                    else {
                        let d = mybalance - other_amount.otheramount;
                        console.log(chalk.bgGreen(`your remaing balance is ${d}`));
                        mybalance = d;
                    }
                }
            }
        }
    }
    let confirm;
    do {
        await main();
        confirm = await inquirer.prompt([
            {
                name: "con",
                type: "confirm",
                message: "Do you want to withdraw or check balance :",
            },
        ]);
    } while (confirm.con);
}
else {
    console.log("incorrect the pin code");
}
