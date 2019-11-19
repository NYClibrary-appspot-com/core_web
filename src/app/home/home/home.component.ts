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
  searched_b  :   []        = null;
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
      // console.log(this.book_list);
    });
  }


  download_a_book(){
    this.libService.download_a_book("FALL2019.PNG").subscribe((data: any)=>{
          console.log(data)
          // let blob = new Blob([data]);
          // let url = window.URL.createObjectURL(blob);
          // let pwa = window.open(url);
      })
  }

  // search a book by book name
  searchBook(book_name: string) {   
    if(book_name != null){
      this.libService.search_a_book(book_name).subscribe((data: any)=>{
        // console.log(data);
        if(data.error){
          alert(data.error)
        }
        else{
          if(data.success){  // it will be implemented, if user search with actual book_name
            this.book_name = data;
            console.log(this.book_name)
          }
          else{  // it will be implemented, if user search with pre-fix of book_name
            this.searched_b = data;
            console.log(this.searched_b)
          }
        }
      });
    }
    else{
      alert("null value is not exceptable");
    }
    
  }



  addBook(){
    this.router.navigate(['/home/addBook']);
  }


}
