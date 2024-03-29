import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { NgbDropdownModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { CustompageComponent } from './components/custompage/custompage.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LayoutsComponent,
    HeaderComponent,
    FooterComponent,
    SidePanelComponent,
    PageLoaderComponent,
    CustompageComponent,
    CartpageComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    NgbDropdownModule,
    NgbDropdown,
    SharedModule
  ]
})
export class LayoutsModule { }
