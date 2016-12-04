import { Component } from '@angular/core';

import { Message } from './message';
import { Headers, RequestOptions, Http } from '@angular/http';
import { FCMConfig } from "../../config";
import "rxjs/add/operator/map";

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  submitted = false;
  model: Message = new Message();

  constructor(private http: Http) {
  }

  onSubmit() {
    this.sendPushData(this.model).subscribe(res => {
      console.log(res)
    }, err => {
      console.error(err)
    });
    this.submitted = true;
  }

  sendPushData(data: Message) {
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'key=' + FCMConfig.api_key});
    let options = new RequestOptions({headers: headers});
    let body = {
      data: {number: data.number, message: data.message},
      to: FCMConfig.reg_token
    };
    return this.http.post(FCMConfig.url, body, options);
  }

}
