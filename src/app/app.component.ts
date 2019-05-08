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
  userModel = new User('rob','rob@gmail.com',8799956666, '','morning',true);
}
