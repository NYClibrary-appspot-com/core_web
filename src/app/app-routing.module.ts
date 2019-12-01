import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
* @author Tushar Malakar
* 
*	@brief Configure the routes to allow for lazy loading of feature modules.
*         Each feature module will have it's own routing module that will tell
*         the router where to go to load relevant components.
*
*	@param[routes] ,  array that will contain our routes
*	@param[path]       ,  string that will redirect to the module specified on 'loadChildren'
*	@param[loadChildren]       , relative path to the module, a hash mark, and the module's class name
*	@param[canActivate]       , auth guard that will prevent un-authorized users from gaining access to the module
*	@return nothing
*/
const routes: Routes = [
  {
    path : '', 
    loadChildren : './home/home.module#HomeModule',
  },
  //default component
  {
    path:'**', 
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  //Lets angular know that this module is the root routing module.
  //It will configure all the routes passed to it, give access to router directives, and register the RouterService.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }