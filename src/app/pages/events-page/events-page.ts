import {Component, computed} from '@angular/core';
import {EventsService} from '../../services/bff.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-events-page',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './events-page.html',
  styleUrl: './events-page.scss'
})
export class EventsPage {
  constructor(
    private eventsService: EventsService){}

  readonly events = computed(() => this.eventsService.getEvents());
}
