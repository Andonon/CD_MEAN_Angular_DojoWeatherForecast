import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonDCComponent } from './washingtondc/washingtondc.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: SeattleComponent },
    { path: 'seattle', component: SeattleComponent },
    { path: 'sanjose', component: SanJoseComponent },
    { path: 'burbank', component: BurbankComponent },
    { path: 'dallas', component: DallasComponent },
    { path: 'washingtondc', component: WashingtonDCComponent },
    { path: 'chicago', component: ChicagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
