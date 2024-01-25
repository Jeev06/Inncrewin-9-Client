import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { CustompageComponent } from './components/custompage/custompage.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';

const routes: Routes = [{ path: '', component: LayoutsComponent, children: [{path : 'custompage/grid', component : CustompageComponent , pathMatch : "full" }, {path : 'cartpage/form', component : CartpageComponent , pathMatch : "full" }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
