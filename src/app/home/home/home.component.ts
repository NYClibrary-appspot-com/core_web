import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrayServicesService } from 'src/app/services/libray-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private libService : LibrayServicesService) { }

  ngOnInit() {
  }

  

  addBook(){
    this.router.navigate(['/home/addBook']);
  }

  bookList(){
    this.router.navigate(['/home/bookList']);
  }

}
