import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MegaMenuModule} from 'primeng/megamenu';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingPageComponent } from './components/shopping-page/shopping-page.component';
import { KurtiClothingComponent } from './components/kurti-clothing/kurti-clothing.component';
import { ClothesItemComponent } from './components/clothes-item/clothes-item.component';

const routes: Routes = [
  {path: '', redirectTo: 'shopping-page', pathMatch: 'full'},
  {path:'shopping-page', component:ShoppingPageComponent},
  {path:'loginpage', component: LoginComponent},
  {path:'clothes-item', component: ClothesItemComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingPageComponent,
    KurtiClothingComponent,
    ClothesItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MegaMenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
