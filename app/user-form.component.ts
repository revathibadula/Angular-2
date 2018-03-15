import {Component} from  '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent{
  user={};
  addUser(){
    console.log(this.user);
  }
}