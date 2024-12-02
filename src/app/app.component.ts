import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1>{{ newMessage }}</h1>
      <pre>
        newMessage value is updated by input1 and by input 2
      </pre>
      
      <h1>{{ message.length < 10 ? 'short' : 'long' }}</h1>
      <h1 [innerText]="message.length < 10 ? 'short' : 'long'"></h1>

      <dl>
        <dt>
          <label>
            Input 1: handleInput method
            <input [value]="message" (input)="handleInput($event)">
          </label>
        </dt>
        <dt>
          <label>
            Input 2: template reference variable
            <input [value]="message" (input)="this.newMessage = messageInput.value" #messageInput>
          </label>
        </dt>
      </dl>

      <button (click)="handleReset()">reset</button>
      <p>Message input (data down does not change): {{ messageInput.value }}</p>

      <h1>headerValue: {{ headerValue.value }}</h1>
      <input type="text" #headerValue>
    </div> 
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
