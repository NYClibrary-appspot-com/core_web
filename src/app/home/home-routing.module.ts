import {  HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddnewbookComponent } from './addnewbook/addnewbook.component';

/**
* @author Tushar Malakar
* 
*	@brief Configure the routes for the feature module. Once loaded, we have 
*        access to the components declared in the feature module
*
*	@param[routes] ,  array that will contain our routes
*	@param[path]       ,  string that will redirect to the module specified on 'loadChildren'
*	@param[component]       , component to be loaded depending on the 'path' that was taken
*	@return nothing
*/

const routes: Routes = [
    {
      path: '',
      component: HomeComponent 
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'add',
      component: AddnewbookComponent
    }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }