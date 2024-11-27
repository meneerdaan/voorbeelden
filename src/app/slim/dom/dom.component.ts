import {Component, input} from '@angular/core';
import {Testdata} from '../../testdata';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-dom',
  imports: [
    JsonPipe
  ],
  templateUrl: './dom.component.html',
  standalone: true,
  styleUrl: './dom.component.css'
})
export class DomComponent {

  testdata = input<Testdata[]>();
}
