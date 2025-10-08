import {Component, computed} from '@angular/core';
import {DatePipe} from '@angular/common';
import {EventsService ,KenzeEvent} from '../../services/bff.service'
import {MatButtonModule} from '@angular/material/button';
import {KenzeEventFormComponent} from '../../components/kenzeevent.form';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-events-page',
  imports: [KenzeEventFormComponent, MatButtonModule, DatePipe, MatListModule, MatIconModule],
  templateUrl: './events-page.html',
  styleUrl: './events-page.scss'
})
export class EventsPage {
  showEventForm = false;
  submitting = false;

  constructor(private eventsService: EventsService) {}

  events = computed(() => this.eventsService.getEvents());

  addEvent(){
    this.showEventForm = true;
  }

  deleteEvent(eventId: number|undefined){
    if(eventId === undefined) return;
    this.eventsService.deleteEvent(eventId).subscribe();
  }

  handleEventsubmitted(event: KenzeEvent) : void {
    this.submitting = true;
    this.eventsService.addEvent(event).subscribe(()=>{
      this.submitting = false;
      this.showEventForm = false;
    });
  }
}
