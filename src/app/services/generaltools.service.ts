import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneraltoolsService {

  constructor(private http: HttpClient)
  {
    http.get('https://my-json-server.typicode.com/typicode/demo/posts')
      .subscribe(response => {
          console.log(response);
      });

   }
   //Creates an HttpClient, sets cookies, and returs it.
   public createAsyncHttpClient(){

   }
}
