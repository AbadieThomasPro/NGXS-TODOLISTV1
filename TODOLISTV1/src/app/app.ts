import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form } from './components/form/form';
import { List } from './components/list/list';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Form,
    List
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TODOLISTV1');
}
