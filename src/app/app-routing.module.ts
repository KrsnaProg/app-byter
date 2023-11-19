import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamPageComponent } from './team-page/team-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'nav', component: NavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }