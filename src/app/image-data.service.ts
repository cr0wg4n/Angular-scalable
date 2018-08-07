import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ImageDataService {

  constructor(private http:HttpClient) {

   }
   fetchImage():Observable <ImageData>{
    return this.http.get<ImageData>('https://yesno.wtf/api');
   }
}
