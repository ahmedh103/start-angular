import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './temblet/navbar/navbar.component';
import { FooterComponent } from './temblet/footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PlayerregistrationComponent } from './playerregistration/playerregistration.component';
import { NotFoundComponent } from './temblet/not-found/not-found.component';
import{FormsModule} from "@angular/forms";
import { ListsComponent } from './lists/lists.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
    PlayerregistrationComponent,
    NotFoundComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
