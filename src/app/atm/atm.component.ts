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
    this.bankAccount.balance = this.bankAccount.balance - this.userInputValue;
    // this.userInputValue = "";
  }
  deposit() {
    this.bankAccount.balance = this.bankAccount.balance + this.userInputValue;
  }
  getBalance() {
    alert("Current Balance: " + this.bankAccount.balance);
  }
  transactions() {
    alert(this.bankAccount.account);
  }
}
