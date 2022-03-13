import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailContactService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  sendEmail(body: mailDTO): Observable<any> {
    return this.http.post(apiUrl + 'mail', body, {
      headers: this.httpOptions.headers,
      responseType: 'text',
    });
  }
}

export interface mailDTO {
  sender: string;
  subject: string;
  text: string;

  receiver: string;
}
