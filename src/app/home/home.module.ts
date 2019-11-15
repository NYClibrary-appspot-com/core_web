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
import { BookListComponent } from "./book-list/book-list.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeComponent, AddBookComponent, BookListComponent],
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
    FormsModule
  ]
})
export class HomeModule {}
