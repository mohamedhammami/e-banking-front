import { UserModel } from "./user.model";

export interface AccountModel {
  Rib: number;
  montant: number;
  ferme: boolean;
  typeCompte: string;
  user: UserModel;
  dateouverture: any;
}
