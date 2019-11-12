import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrayServicesService } from 'src/app/services/libray-services.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private router : Router, private libService : LibrayServicesService) { }

  ngOnInit() {
  }

  onSubmit(){ //make an post request and routes to "/home"

    this.router.navigate(['/home']);
  }

}
