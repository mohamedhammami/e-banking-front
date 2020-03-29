import { Component, OnInit } from '@angular/core';
import { DemandeCredit } from "../../../models/demandecredit.model";
import { CreditService } from "../../../services/credit.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-consultdemande',
  templateUrl: './consultdemande.component.html',
  styleUrls: ['./consultdemande.component.scss']
})
export class ConsultdemandeComponent implements OnInit {

  demandesencours: Array<DemandeCredit> = [];
  vv:DemandeCredit;
  isAdmin = false;

  constructor(
    private authService: AuthService,
    private creditService: CreditService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.isRole("Admin");
    this.loadDemande();
  }
  async loadDemande() {
    try {
      const result: any = await this.creditService.getDemandeencours();
      if (result) {
        this.demandesencours = result;
      }
    } catch (error) {}
  }

  async Acceptedemande(vv:DemandeCredit) {
    try {
      const result: any = await this.creditService.Acceptedemand(vv);
      if (result) {
        alert("Demande Removed");
        this.loadDemande();
      }
    } catch (error) {}
  }
  

  async Refusedemande(vv:DemandeCredit) {
    try {
      const result: any = await this.creditService.refusdemande(vv);
      if (result) {
        alert("Demande Removed");
        this.loadDemande();
      }
    } catch (error) {}
  }

  async updateUser() {
    
    try {
      const result: any = await this.creditService.Acceptedemand(
        this.vv
      );
      if (result) {
        
        alert("Thanks for voting");
      }
    } catch (error) {
      console.log({ error });
    }
  }

}
