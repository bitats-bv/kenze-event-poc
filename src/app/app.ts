import { Component, signal, OnInit, OnDestroy} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {
  MsalService,
  MsalBroadcastService
} from '@azure/msal-angular';
import {
  InteractionStatus,
  EventMessage,
  EventType,
} from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Playground');
  isIframe = false;

  private readonly _destroying$ = new Subject<void>();

  constructor(private authService: MsalService,private msalBroadcastService: MsalBroadcastService) {
  }

  ngOnInit(): void {
    //this.authService.handleRedirectObservable().subscribe();

    this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal

    //this.authService.instance.enableAccountStorageEvents(); // Optional - This will enable ACCOUNT_ADDED and ACCOUNT_REMOVED events emitted when a user logs in or out of another tab or window
    // this.msalBroadcastService.msalSubject$
    //   .pipe(
    //     filter(
    //       (msg: EventMessage) =>
    //         msg.eventType === EventType.ACCOUNT_ADDED ||
    //         msg.eventType === EventType.ACCOUNT_REMOVED
    //     )
    //   )
    //   .subscribe((result: EventMessage) => {
    //     if (typeof window !== "undefined") {
    //       if (this.authService.instance.getAllAccounts().length === 0) {
    //         console.log(result);
    //         window.location.pathname = '/';
    //       } else {
    //         //this.setLoginDisplay();
    //       }
    //     }
    //   });
    //
    // this.msalBroadcastService.inProgress$
    //   .pipe(
    //     filter(
    //       (status: InteractionStatus) => status === InteractionStatus.None
    //     ),
    //     takeUntil(this._destroying$)
    //   )
    //   .subscribe(() => {
    //     //this.setLoginDisplay();
    //     //this.checkAndSetActiveAccount();
    //   });
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
