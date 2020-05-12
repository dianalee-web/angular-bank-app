import { Component } from "@angular/core";
import { BankService } from "../bank.service";
// import { FormsModule } from '@angular/forms'

@Component({
  selector: "app-atm",
  templateUrl: "./atm.component.html",
  styleUrls: ["./atm.component.css"],
})
export class AtmComponent {
  userInputValue: number;

  constructor() {}
  withdraw() {
    alert(this.userInputValue);
  }
  deposit() {
    alert(this.userInputValue);
  }
  getBalance() {}
  transactions() {}
}
