import {Component, OnInit, Inject, signal, resource, computed} from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ) {}

  readonly events = computed(() => this.eventsService.getEvents());


  ngOnInit(): void {
  }

  handleEventsubmitted(event: KenzeEvent) : void {
    this.submitting = true;
    this.eventsService.addEvent(event).subscribe(()=>{
      this.submitting = false;
    });
  }
}
