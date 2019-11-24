import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
<<<<<<< HEAD
export class LibrayServicesService { 
  
                    // "https://back-end-258822.appspot.com/"
                    // "https://pyback.appspot.com/"
  readonly rootUrl = "https://pyback.appspot.com/";
  constructor(private http: HttpClient) {}

=======
export class LibrayServicesService {


  constructor(private http: HttpClient) {}

  get_booklist() {
    // get request
    return this.http.get("book_list");
  }
>>>>>>> origin/ali-front-end

  search_a_book(book_name: string) {
    //get request
    return this.http.get("search?book_name=" + book_name);
  }

<<<<<<< HEAD
  search_a_book(book_name: string) { //get request
    return this.http.get(this.rootUrl + "search?book_name="+book_name['book_name']);
  }

  download_a_book(book_name: string) { //get request
    return this.http.get(this.rootUrl +"download_book?book_name="+book_name,{ responseType: "blob"});
=======
  download_a_book(book_name: string) { //get request
    return this.http.get("download_book?book_name="+book_name,{ responseType: "blob"});
>>>>>>> origin/ali-front-end
  }

  add_a_book(fileToUpload: File) {
    // post request
    const formData: FormData = new FormData();
    formData.append("fi", fileToUpload, fileToUpload.name);
    return this.http.post("add", formData);
  }
}
