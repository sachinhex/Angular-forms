import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService} from "./enrollment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdforms';
  topics= ['Angular','React', 'Vue'];
  topicHasError= true;
  isSubmitted = false;
  errorMsg = ' ';
  userModel = new User('sachin','rob@gmail.com', null , 'default','morning',true);

  constructor(private _enrollmentService: EnrollmentService) { }

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
    onSubmit(userForm){
      console.log(userForm);      
      this.isSubmitted = true;
      this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data=>console.log('Success', data),
        error=>this.errorMsg = error.statusText        
      )
    }
}
