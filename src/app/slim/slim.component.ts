import {Component, inject, Signal} from '@angular/core';
import {VoorbeeldService} from '../voorbeeld.service';
import {DomComponent} from './dom/dom.component';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {Testdata} from '../testdata';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-slim',
  imports: [
    DomComponent,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './slim.component.html',
  standalone: true,
  styleUrl: './slim.component.css'
})
export default class SlimComponent {

  private readonly voorbeeldService = inject(VoorbeeldService);

  protected readonly testdata$: Observable<Testdata[]> = this.voorbeeldService.getAll();
  protected readonly testdataToSignal: Signal<Testdata[] | undefined> = toSignal(this.voorbeeldService.getAll());

}
