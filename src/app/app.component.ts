import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myNumber = 123;
  myArray = [11, 22, 33];
  myDate = new Date();
  myBool = true;
  myString = 'Hi guys and girls';

  myMethod() {
    return 'This is a string coming from a method';
  }

  myAlert() {
    alert('In myAlert');
    console.log('In myAlert testing...');
  }
}
