import { WhatsappCloudAPIResponse } from './../interfaces/whatsapp.cloud.api.response.interfase';
import { WhatsappCloudAPIRequest } from './../interfaces/whatsapp.cloud.api.request.interfase';
import { API } from './../../common';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WhatsappCloudService {

  private apiUrl = environment.apiUrl + API.consumeTemplate
  constructor(
    private http:HttpClient
  ) { }

  sendMessage(whatsappCloudAPIRequest: WhatsappCloudAPIRequest):    Observable<WhatsappCloudAPIResponse>{
    return this.http.post<WhatsappCloudAPIResponse>(this.apiUrl, whatsappCloudAPIRequest)
  }
}
