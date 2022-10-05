import { environment } from './../../../environments/environment';
import { MESSAGING_PRODUCT, TEMPLATE_TYPE, TEMPLATE_NAME, TEMPLATE_LANGUAGE, COMPONENT_TYPE, PARAMETER_TYPE } from './../../../common/api.resource';
import { WhatsappCloudAPIUser } from './../../interfaces/user.confirmation.interface';
import { Component, OnInit } from '@angular/core';
import { WhatsappCloudService } from 'src/whatsapp/services/whatsapp-cloud.service';

@Component({
  selector: 'app-user-confirmation',
  templateUrl: './user-confirmation.component.html',
  styleUrls: ['./user-confirmation.component.css']
})
export class UserConfirmationComponent implements OnInit {

  name: string = "";
  age: string = "";

  constructor(
    private service: WhatsappCloudService
  ) { }

  ngOnInit(): void {
  }

  send(){

    const data: WhatsappCloudAPIUser = {
      messaging_product:MESSAGING_PRODUCT.whatsapp,
      to: environment.toNumber,
      type:TEMPLATE_TYPE.type,
      template:{
        name:TEMPLATE_NAME.examplePrueba,
        language:{
          code: TEMPLATE_LANGUAGE.es
        },
        components:[{
          type:COMPONENT_TYPE.body,
          parameters:[{
            type:PARAMETER_TYPE.text,
            text:this.name
          },
          {
            type:PARAMETER_TYPE.text,
            text:this.age
          }
        ]
        }]
      }

    }

    this.service.sendMessage(data).subscribe(resp => {
      this.clearForm()
    },
    error =>{
      console.log(error)
    }
    )
  }

  clearForm(){
    this.name = "";
    this.age = "";
  }

}
