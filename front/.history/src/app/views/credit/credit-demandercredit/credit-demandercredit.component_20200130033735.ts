import { Component, OnInit } from '@angular/core';
import { DemandeCredit } from "../../../models/demandecredit.model";
import { AuthService } from "../../../services/auth.service";
import { CreditService } from "../../../services/credit.service";
import { UserModel } from "../../../models/user.model";
import { Router } from "@angular/router";

export interface TypeC {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-credit-demandercredit',
  templateUrl: './credit-demandercredit.component.html',
  styleUrls: ['./credit-demandercredit.component.scss']
})
export class CreditDemandercreditComponent implements OnInit {
  typecompte: TypeC[] = [
    {value: 'Auto', viewValue: 'Auto'},
    {value: 'Vacance', viewValue: 'Vacance'},
    {value: 'Immo', viewValue: 'Immo'},
    {value: 'Mariage', viewValue: 'Mariage'}

  ];
  id1 = null;
  demande: DemandeCredit = {
    Id: this.id1,
    montant: null,
    raison: "",
    typeCredit: "",
    user:this.authService.getUser(),
  };

  constructor(
    private authService: AuthService,
    private creditService: CreditService,
    private router: Router,

  ) {}
  ngOnInit() {
    if (this.authService.getUser() != null) {
      this.id1 = this.authService.getUser().id;
     
      console.log({ user: this.authService.getUser() });
    }
  }

  onSubmit() {
    console.log(this.demande);
    const result = this.creditService.createDemande(this.demande).subscribe(data=>{
      alert("demande created successfully.");
      this.router.navigateByUrl("/credit/list");
    });
  }
}
