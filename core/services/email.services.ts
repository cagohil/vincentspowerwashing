import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private apiUrl = 'https://localhost:7195/api/Email/send';

  constructor(private http: HttpClient) {}

  sendEmail(toEmail: string, subject: string, body: string) {
    return this.http.post(this.apiUrl, {
      toEmail,
      subject,
      body
    });
  }
}
