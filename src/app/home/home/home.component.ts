import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { LibrayServicesService } from "src/app/services/libray-services.service";
import { saveAs } from "file-saver";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  //default variables .
  searched_b: [] = null;
  book_name: string = null;
  book_list: [] = null;
  welcome: string = null;
  error_me: string=null;

  constructor(
    private router: Router,
    private libService: LibrayServicesService
  ) {}

  ngOnInit() {
    this.bookList();
  }

  // find all the books of library
  bookList() {
    this.libService.get_booklist().subscribe((data: any) => {
      this.book_list = data;
      // console.log(this.book_list);
    });
  }

  download_a_book(book_name: string) {
    console.log(book_name);
    this.libService.download_a_book(book_name).subscribe((data: any) => {
      saveAs(new File([data], book_name));
    });
  }

  // search a book by book name
  searchBook(book_name: string) {
    if (book_name != null) {
      this.libService.search_a_book(book_name).subscribe((data: any) => {
        // console.log(data);
        if (data.error) {
          // alert(data.error);
          this.error_me =data.error
          this.book_name = null;
          this.searched_b = null;
        } else {
          if (data.success) {
            // it will be implemented, if user search with actual book_name
            this.book_name = data.book_name;
            this.error_me =null;
            this.searched_b = null;
            // console.log(this.book_name);
          } else {
            // it will be implemented, if user search with pre-fix of book_name
            this.searched_b = data;
            this.book_name = null;
            this.error_me =null;
            // console.log(this.searched_b);
          }
        }
      });
    } else {
      this.error_me = "null value is not exceptable";
    }
  }

  addBook() {
    this.router.navigate(["/addBook"]);
  }
}