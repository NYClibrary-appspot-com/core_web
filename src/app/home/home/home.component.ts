import { Router } from "@angular/router";
import { FormGroup} from "@angular/forms";
import * as fileSaver from 'file-saver';
import { Component, OnInit} from "@angular/core";
import {Storage} from "@google-cloud/storage";
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
      // console.log(this.book_list);
    });
  }


  download_a_book(){

      // projectId = 'project-id';
      // keyFilename = '/path/to/keyfile.json'
      // storage = new Storage(this.projectId , this.keyFilename);

      // // Makes an authenticated API request.
      // try {
      //   const [buckets] = this.storage.getBuckets();

      //   console.log('Buckets:');
      //   buckets.forEach(bucket => {
      //     console.log(bucket.name);
      //   });
      // } catch (err) {
      //   console.error('ERROR:', err);
      // }
    

    this.libService.download_a_book("FALL2019.PNG").subscribe((data:any)=>{
      // console.log(typeof data.book)
      // window.location.href = data.book;
      // console.log(window.location.href)
      // console.log(fileSaver.saveAs(data.book))
      
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
          this.book_name = data.book_name;
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
