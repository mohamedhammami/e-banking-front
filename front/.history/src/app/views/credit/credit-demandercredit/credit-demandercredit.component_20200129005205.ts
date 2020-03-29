import { Component, OnInit } from '@angular/core';
import { DemandeCredit } from "../../../models/demandecredit.model";
import { AuthService } from "../../../services/auth.service";
import { CreditService } from "../../../services/credit.service";
import { UserModel } from "../../../models/user.model";
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
    Id: 0,
    montant: null,
    raison: "",
    typeCredit: "",
    user:this.authService.getUser(),
  };

  constructor(
    private authService: AuthService,
    private creditService: CreditService
  ) {}
  ngOnInit() {
  }

}
