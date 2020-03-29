import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "../../../services/account.service";
import { UserModel } from "../../../models/user.model";
import { AccounttitreModel } from "app/models/accounttitre";
@Component({
  selector: 'app-account-listaccounttitre',
  templateUrl: './account-listaccounttitre.component.html',
  styleUrls: ['./account-listaccounttitre.component.scss']
})
export class AccountListaccounttitreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
