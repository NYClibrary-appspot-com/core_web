import { Router } from "@angular/router";
import { FormGroup} from "@angular/forms";
import { Component, OnInit} from "@angular/core";
import { LibrayServicesService } from "src/app/services/libray-services.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  //default variables .
  book_name   :   string    = null;
  book_list   :   []        = null;
  welcome     :   string    = null;

  constructor(private router: Router,private libService: LibrayServicesService) {
  }

  ngOnInit() { 
    this.bookList()
  }

  // welcome message from server
  welocome() {
    this.libService.welcomeMessage().subscribe((data: any) => {
      this.welcome = data.success;
      console.log(this.welcome);
    });
  }


  // find all the books of library
  bookList(){
    this.libService.get_booklist().subscribe((data: any) => {
      this.book_list = data;
      console.log(this.book_list);
    });
  }

  
  download_a_book(){
    this.libService.download_a_book("FALL2019.PNG").subscribe((data:any)=>{
      console.log(data);
    })
  }

  // search a book by book name
  searchBook(book_name: string) {
    console.log(book_name)
    if(book_name != null){
      this.libService.search_a_book(book_name).subscribe((data: any)=>{
        console.log(data.book_name)
        this.book_name = data.book_name;
        console.log(this.book_name);
      });
    }
    else{
      console.log("null value is not exceptable")
    }
    
  }



  addBook(){
    this.router.navigate(['/home/addBook']);
  }


}
