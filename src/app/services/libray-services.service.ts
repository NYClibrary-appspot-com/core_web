import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import {RequestOptions} from '@angular/http';

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
    formData.append('file', book_name.name);
    let requestOptions = new RequestOptions({ headers:null, 
      withCredentials: true });
    console.log(this.rootUrl+"add", formData)
    return this.http.put("http://127.0.0.1:5000/"+"add", formData,{ headers:{'content-type': 'multipart/form-data','Access-Control-Allow-Origin': 'true' }} )}}
    // 'Access-Control-Allow-Origin': true,'Content-Type': 'application/json; charset=utf-8',"X-Requested-With": "XMLHttpRequest"