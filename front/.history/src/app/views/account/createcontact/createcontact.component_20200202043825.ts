import { Component, OnInit } from "@angular/core";
import { AccountModel } from "../../../models/account.model";
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "../../../services/account.service";
import { ContactModel } from "../../../models/contact";
@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.scss']
})
export class CreatecontactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
