import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListbooksComponent } from './listbooks/listbooks.component';
import { AddbooksComponent } from './addbooks/addbooks.component';

const routes: Routes = [
  //{path :'',component:HomeComponent},
  {path :'',component:ListbooksComponent},
  {path :'add',component:AddbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
