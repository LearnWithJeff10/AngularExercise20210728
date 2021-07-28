import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>This is from the component</h1>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project2';
  mynumber: number = 123;

  constructor() {
    console.log('In the constructor');
  }

  ngOnChanges() {
    console.log('In the ngOnChanges handler');
  }

  ngOnInit() {
    console.log(
      'In the ngOnInit handler with title=',
      this.title,
      '  mynumber=',
      this.mynumber
    );
  }
}
