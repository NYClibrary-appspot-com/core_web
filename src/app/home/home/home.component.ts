import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { LibrayServicesService } from "src/app/services/libray-services.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private libService: LibrayServicesService
  ) {}
  title = 'Angular 7 Project!'; 
  book_name; 
  formdata;
  ngOnInit() { 
    this.formdata = new FormGroup({ 
       emailid: new FormControl("angular@gmail.com"),

    });
  }

  test() {
    this.libService.welcomeMessage().subscribe((data: any) => {
      console.log(data);
    });
  }


  onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid); 
 }


  bookList() {
    this.libService.get_booklist().subscribe((data: any) => {
      console.log(data);
    });
  }

  searchBook(book_name: string){
    this.libService.search_a_book(Object(book_name)["book_name"]).subscribe((data: any) => {
      console.log(data);
    });

  }



  addBook(book_name: File) {
    this.libService.add_a_book(book_name).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(["/home"]);
  }
}
