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
    // get request
    //return this.http.get(this.rootUrl);
    const response = this.http.get(this.rootUrl, { responseType: "text" });
    return response;
  }

  get_booklist() {
    // get request
    return this.http.get(this.rootUrl + "book_list");
  }

  search_a_book(book_name: string) {
    //get request
    return null;
  }

  add_a_book(book_name: string) {
    //post request
    return null;
  }
}