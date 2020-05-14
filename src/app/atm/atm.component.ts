import { Component } from "@angular/core";
import { BankService } from "../bank.service";
import { UpperCasePipe } from "@angular/common";

@Component({
  selector: "app-atm",
  templateUrl: "./atm.component.html",
  styleUrls: ["./atm.component.css"],
})
export class AtmComponent {
  userInputValue: number;
  bankAccount = this.bankService.account;

  constructor(public bankService: BankService) {}
  withdraw() {
    if (this.bankAccount.balance < Number(this.userInputValue)) {
      alert(
        `Insufficient funds: Enter withdrawal amount less than account balance.`
      );
      this.userInputValue = "";
    } else if (this.userInputValue === "") {
      alert("Please enter an amount to withdraw.");
    } else {
      this.bankAccount.balance =
        this.bankAccount.balance - Number(this.userInputValue);

      this.bankAccount.transactions.unshift({
        date: new Date().toDateString(),
        type: "withdrawal",
        amount: Number(this.userInputValue),
        currency: "usd",
      });
      this.userInputValue = "";

      // console.log(this.bankAccount.transactions);
    }
  }

  deposit() {
    if (this.userInputValue === "") {
      alert("Please enter an amount to deposit.");
    } else {
    this.bankAccount.balance += Number(this.userInputValue);
    this.bankAccount.transactions.unshift({
      date: new Date().toDateString(),
      type: "deposit",
      amount: Number(this.userInputValue),
      currency: "usd",
    }
    });
    this.userInputValue = "";
  }
  getBalance() {
    alert("Current Balance: " + "$" + this.bankAccount.balance);
  }
  transactions() {
    alert('display')
  }
}
