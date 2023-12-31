import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private formapi:any ="";

  constructor(private http: HttpClient) { }
  PostMessage(input:any) {
    return this.http.post(this.formapi,input,{responseType:'text'}).pipe(
      map(
        (response) => {
          if(response) {
            return response;
          }

        },
        (error:any) => {
          return error;
        }
      )
    )

  }
}
