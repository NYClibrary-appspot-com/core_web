import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrayServicesService {

  readonly rootUrl = 'https://www.google.com/';
  constructor(private http: HttpClient) { }


  hiGoogle(){
    return this.http.get( this.rootUrl);
  }

  get_booklist(){
    return this.http.get( this.rootUrl +"/public/book_list");
  }
  
  search_a_book(book_name:string){
    return this.http.get( this.rootUrl +"/public/search?book_name=" + book_name);
  }
}
