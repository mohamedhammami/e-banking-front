import { Component, OnInit } from "@angular/core";
import { AccountModel } from "../../../models/account.model";
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "../../../services/account.service";
import { UserModel } from "../../../models/user.model";
export interface Food {
  value: string;
  
}

@Component({
  selector: "app-account-create",
  templateUrl: "./account-create.component.html",
  styleUrls: ["./account-create.component.scss"]
})
export class AccountCreateComponent implements OnInit {
  foods: Food[] = [
    {value: 'EPARGNE'},
    {value: 'COURANT'},
    {value: 'DEPOT'}
  ];
  
  id1 = null;
  account: AccountModel = {
    Rib: 0,
    montant: null,
    ferme: false,
    user:this.authService.getUser(),
  };
  constructor(
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    if (this.authService.getUser() != null) {
      this.id1 = this.authService.getUser().id;
     
      console.log({ user: this.authService.getUser() });
    }
  }

  onSubmit() {
    console.log(this.account);
    const result = this.accountService.createAccount(this.account).subscribe(data=>{
      alert("Product created successfully.");
    });
  }
}
