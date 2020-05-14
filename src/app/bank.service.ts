import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BankService {
  account: any = {
    fname: "Eva",
    lname: "Lee",
    age: 19,
    address: {
      street: "1234 Sunny Lane",
      city: "San Diego",
      state: "CA",
      zip: 92126,
      country: "USA",
    },
    balance: 240.01,
    currency: "usd",
    transactions: [
      {
        date: new Date(2018, 11, 24).toDateString(),
        type: "withdrawal",
        amount: 200.0,
        currency: "usd",
      },
      {
        date: new Date(2019, 1, 2).toDateString(),
        type: "deposit",
        amount: 100.0,
        currency: "usd",
      },
      {
        date: new Date(2019, 2, 3).toDateString(),
        type: "withdrawal",
        amount: 2.0,
        currency: "usd",
      },
    ],
  };
  constructor() {}
}
