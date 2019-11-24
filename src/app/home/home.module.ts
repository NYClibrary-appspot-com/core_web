import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { AddBookComponent } from "./add-book/add-book.component";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from './about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [HomeComponent, AddBookComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,

    //Angular Material
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule
    
  ]
})
export class HomeModule {}
