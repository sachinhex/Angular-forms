import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdforms';
  topics= ['Angular','React', 'Vue'];
  topicHasError= true;
  userModel = new User('','rob@gmail.com', null , 'default','morning',true);
    validateTopic(value){
      if(value==='default'){
        this.topicHasError=true;  
        console.log(this.topicHasError)
      }
      else{
        this.topicHasError= false;
        console.log(this.topicHasError)
      }
    }
}
