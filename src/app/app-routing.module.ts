import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionComponent } from './component/election/election.component';
import { MetaCoinComponent } from './component/meta-coin/meta-coin.component';

const routes: Routes = [
  {path: 'election', component: ElectionComponent},
  {path: 'meta-coin', component: MetaCoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
