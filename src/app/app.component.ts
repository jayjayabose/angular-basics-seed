import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <header class="header">
        <img src="/assets/img/logo.svg" alt="Ultimate Donuts" class="logo"/>
      </header>
      <donut-list></donut-list>
    </div>
  `,
  styles: [
    `
      .app {
        background-color: #fff;
        border-radius: 8px;
        max-width: 400px;
        max-width: 94%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #ef9fc7;
      }
      .header {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
      }
      .logo {
        width: 100px;
        height: 88px;
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
