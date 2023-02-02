import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css'],
})
export class UrlFormComponent {
  url: string = '';
  html: string = '';

  constructor(private http: HttpClient) {}

  submitForm(form: any) {
    this.http
      .get(`https://cors-anywhere.herokuapp.com/${this.url}`, {
        responseType: 'text',
      })
      .subscribe((html) => {
        this.html = html;
      });
  }
}
