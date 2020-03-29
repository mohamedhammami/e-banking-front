import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'app/models/account.model';
import { AccountService } from 'app/services/account.service';
import { AuthService } from "../../../services/auth.service";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { UserModel } from "../../../models/user.model";



@Component({
  selector: 'app-account-listaccountbancaire',
  templateUrl: './account-listaccountbancaire.component.html',
  styleUrls: ['./account-listaccountbancaire.component.scss']
})
export class AccountListaccountbancaireComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      age: {
        title: 'Age'
      }
    }
  };

  accounts: Array<AccountModel> = [];
  dataSource: MatTableDataSource<UserModel>;

  constructor(
    private accountService: AccountService,
    private authService: AuthService,

    
  ) {}


   ngOnInit() {
    this.loadAccount();
  }

  async loadAccount() {
    try {
      const result: any = await  this.accountService.getcomptebanc();
      if (result) {
        this.accounts = result;
        console.log(this.accounts)
      }
    } catch (error) {}
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  
}

