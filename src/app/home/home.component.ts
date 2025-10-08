import {Component, OnInit, Inject, signal, resource, computed} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalBroadcastService, MsalService, MsalGuardConfiguration, MSAL_GUARD_CONFIG, } from '@azure/msal-angular';
import {
  AuthenticationResult,
  EventMessage,
  EventType,
  InteractionStatus,
  RedirectRequest
} from '@azure/msal-browser';
import { filter } from 'rxjs/operators';
import EventsService, {KenzeEvent} from '../services/bff.service';
import {KenzeEventFormComponent} from '../components/kenzeevent.form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [],
  imports: [CommonModule, KenzeEventFormComponent]
})
export class HomeComponent implements OnInit {
  loginDisplay = false;
  submitting = false;

  constructor(
    private eventsService: EventsService,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
  ) {}

  readonly events = computed(() => this.eventsService.getEvents());


  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS)
      )
      .subscribe((result: EventMessage) => {
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        //this.setLoginDisplay();
      });
  }


  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  loginRedirect() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({
        ...this.msalGuardConfig.authRequest,
      } as RedirectRequest);
    } else {
      this.authService.loginRedirect();
    }
  }

  handleEventsubmitted(event: KenzeEvent) : void {
    this.submitting = true;
    this.eventsService.addEvent(event).subscribe(()=>{
      this.submitting = false;
    });
  }
}
