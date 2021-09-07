import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { IPhoto } from '../photo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos');
  }

  getPhotos(): Observable<IPhoto[]>{
    return this.http.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos')
  }
}
