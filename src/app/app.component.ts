import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <app-donut-list></app-donut-list>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {

  message!: string; // think of this as initial state passed in from parent - data down
  newMessage!: string; // think of this as changes up

  // ngOnInit is a life cycle hook
  // Run after constructor. use this for constructor type things
  ngOnInit() {
    this.message = 'Hello World (data down)';
    console.log(this.message);
  }

  handleInput(event: Event) {
    // this implementation is atypical - accessing the event
    // typically we will use a more convenient angular approach
    const { value } = event.target as HTMLInputElement;
    this.newMessage = "changes up: " + value;
    console.log(value);
  }

  handleReset(){
    this.newMessage = this.message;
  }
}
