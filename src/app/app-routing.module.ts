import { ListsComponent } from './lists/lists.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotFoundComponent } from './temblet/not-found/not-found.component';
import { FooterComponent } from './temblet/footer/footer.component';
import { PlayerregistrationComponent } from './playerregistration/playerregistration.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{path :"home", component:HomeComponent},
{path :"", component:HomeComponent},
{path :"products", component:ProductsComponent},
{path :"player", component:PlayerregistrationComponent},
{path :"foot", component:FooterComponent},
{path:"aboutus" , component:AboutusComponent},
{path:"list" , component:ListsComponent},

{path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
