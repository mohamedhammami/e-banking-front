import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatIconModule,
  MatSortModule,
  MatGridListModule,
  MatListModule,
  MatPaginatorModule,
  MatCardModule,
  MatDialogModule,
  MatSidenavModule,
  MatTabsModule,
  MatMenuModule,
  MatInputModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatDatepickerModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CreditDemandercreditComponent } from './credit-demandercredit/credit-demandercredit.component';
import { ListdemandeComponent } from './listdemande/listdemande.component';
import { SimulateurComponent } from './simulateur/simulateur.component';
export const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: "",
    children: [
      { path: "demandercredit", component: CreditDemandercreditComponent },
      { path: "list", component: ListdemandeComponent },
      { path: "simul", component: SimulateurComponent },


      
       // { path: "show/:id", component: ElectoralShowComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSortModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatDatepickerModule,
    MatMenuModule,
    MatInputModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  declarations: [CreditDemandercreditComponent, ListdemandeComponent, SimulateurComponent],
  entryComponents: []
})
export class CreditModule { }
