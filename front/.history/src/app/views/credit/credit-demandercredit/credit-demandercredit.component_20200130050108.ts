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
  demande: DemandeCredit = {
    Id: 0,
    montant: null,
    raison: "",
    typeCredit: "",
    user:null,
  };

  constructor(
    private authService: AuthService,
    private creditService: CreditService,
    private router: Router,

  ) {}
  ngOnInit() {
    if (this.authService.getUser() != null) {
  
     
     
    }
  }

  onSubmit() {
    console.log(this.demande);
    this.demande.user= this.authService.getUser();

    const result = this.creditService.createDemande(this.demande).subscribe(data=>{
      alert("demande created successfully.");
      this.router.navigateByUrl("/credit/list");
    });
  }
}
