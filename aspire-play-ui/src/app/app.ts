import { Component, signal, OnInit, OnDestroy} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Playground');

  private readonly _destroying$ = new Subject<void>();


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
