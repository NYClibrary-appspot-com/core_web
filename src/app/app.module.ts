import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Declares our routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'




//These are the materials that will make our site adaptable
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

//Angular Flex Module
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatNativeDateModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


//Clock
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LibrayServicesService } from './services/libray-services.service';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
     //Forms Modules
    ReactiveFormsModule,
    //HTTP requests
    HttpClientModule,
    BrowserAnimationsModule,
    //Material
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    ScrollDispatchModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatCardModule,
    
    

    //Our Routes will be here to make code cleaner
    AppRoutingModule,

    FlexLayoutModule,

    //Clock         
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
   
  ],
  providers: [
    LibrayServicesService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }