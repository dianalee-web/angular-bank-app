import { router } from "./../app.router";
import { Component } from "@angular/core";
import { BankService } from "../bank.service";

@Component({
  selector: "app-teller",
  templateUrl: "./teller.component.html",
  styleUrls: ["./teller.component.css"],
})
export class TellerComponent {
  bankAccount = this.bankService.account;
  constructor(public bankService: BankService) {}
}
