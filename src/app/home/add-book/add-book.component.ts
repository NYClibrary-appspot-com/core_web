import { Component, OnInit} from '@angular/core';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LibrayServicesService } from 'src/app/services/libray-services.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  

  constructor(private router : Router, private libService : LibrayServicesService, private _formBuilder: FormBuilder) { }

  ngOnInit() {

    
  }

  onSubmit(){ //make an post request and routes to "/home"
   //write your post request here
   this.router.navigate(['/home']);
  }


 

}
