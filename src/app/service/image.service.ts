import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) 
  { }
  getImage(imageId: string): Observable<Blob> {
    return this.http.get(environment.imageIconBaseUrl, { responseType: 'blob' });
  }
}
