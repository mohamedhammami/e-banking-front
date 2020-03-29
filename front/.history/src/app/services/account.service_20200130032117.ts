import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CandidateModel, ElectoralModal } from "../models/candidate.model";
import { AccountModel } from "../models/account.model";
import { AuthService } from "../services/auth.service";


@Injectable()
export class AccountService {
  BASE_URL = environment.backend ;
  constructor(private httpClient: HttpClient,private authService: AuthService) {}

  createAccount(account: AccountModel ) {
    const formData = new FormData();
    formData.append("montant", account.montant.toString());
    formData.append("typecompte", account.typeCompte.toString());
    formData.append("dateouverture", account.dateouverture);
    formData.append("ferme", account.ferme.valueOf.toString());
    formData.append("user", account.user.id.toString());
    return this.httpClient.post(`${this.BASE_URL}/addcompteBancaire`, account);
  }

  getcomptebanc() {
    return this.httpClient
      .get(`${this.BASE_URL}/getcompteBancaireclient/${this.authService.getUser().id}`)
      .toPromise();
      
  }
  getaccount(RIB: number) { return this.httpClient.get('//localhost:8080/getcompteBancaire/' + RIB); }

  verser(RIB: number, montant: number) {
    return this.httpClient.put('//localhost:8080/CompteBancaire/' + RIB + '/' + montant + '/verser', this.getaccount(RIB));
  }
  retirer(RIB: number, montant: number) {
    return this.httpClient.put('//localhost:8080/CompteBancaire/' + RIB + '/' + montant + '/retirer', this.getaccount(RIB));
  }
  transferer(RIB1: number, RIB2: number, montant: number) {
    return this.httpClient.put('//localhost:8080/CompteBancaire/' + RIB1 + '/' + RIB2 + '/' + montant + '/transferer', this.getaccount(RIB1));

  }

}
