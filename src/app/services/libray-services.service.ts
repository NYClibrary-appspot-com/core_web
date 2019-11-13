import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LibrayServicesService {
  searchSkills(query: string): import("rxjs").ObservableInput<unknown> {
    throw new Error("Method not implemented.");
  }

  readonly rootUrl = "https://back-end-258822.appspot.com/";
  constructor(private http: HttpClient) {}

  welcomeMessage() {
    const response = this.http.get(this.rootUrl, { responseType: "text" });
    return response;
  }

  get_booklist() { // get request
    return this.http.get(this.rootUrl + "book_list");
  }

  search_a_book(book_name: string) { //get request
    return this.http.get(this.rootUrl + "search?book_name="+book_name);
  }

  add_a_book(book_name: File) { // put request
    const formData: FormData = new FormData();
    formData.append('file', book_name, book_name.name);
    console.log(this.rootUrl+"add", formData)
    return this.http.post(this.rootUrl+"add", formData)
  }
}