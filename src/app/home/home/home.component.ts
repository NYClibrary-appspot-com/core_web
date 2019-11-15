import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormControl, FormsModule } from "@angular/forms";
import { LibrayServicesService } from "src/app/services/libray-services.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  //default variable for selected file.
  fileToUpload: File = null;
  book_name;
  formdata;

  constructor(
    private router: Router,
    private libService: LibrayServicesService
  ) {}

  ngOnInit() {
    this.formdata = new FormGroup({});
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    }

  uploadFileToActivity(file: any) {
    this.libService.add_a_book(this.fileToUpload).subscribe((data: any)=>{
      console.log(data)
    })
    
  
  }

 

  test() {
    this.libService.welcomeMessage().subscribe((data: any) => {
      console.log(data);
    });
  }

  bookList() {
    this.libService.get_booklist().subscribe((data: any) => {
      console.log(data);
    });
  }

  searchBook(book_name: string) {
    this.libService
      .search_a_book(Object(book_name)["book_name"])
      .subscribe((data: any) => {
        console.log(data);
      });
  }


}
