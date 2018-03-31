import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MembersComponent} from '../members/members.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: 'user', component: MembersComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
