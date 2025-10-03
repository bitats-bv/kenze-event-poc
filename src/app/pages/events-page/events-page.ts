import {Component, computed} from '@angular/core';
import {EventsService, KenzeEvent} from '../../services/bff.service';
import {NgForOf, NgIf} from '@angular/common';
import {KenzeEventFormComponent} from '../../components/kenzeevent.form';

@Component({
  selector: 'app-events-page',
  imports: [KenzeEventFormComponent],
  templateUrl: './events-page.html',
  styleUrl: './events-page.scss'
})
export class EventsPage {
  showEventForm = false;
  submitting = false;

  constructor(
    private eventsService: EventsService){}

  readonly events = computed(() => this.eventsService.getEvents());

  addEvent(){
    this.showEventForm = true;
  }

  handleEventsubmitted(event: KenzeEvent) : void {
    this.submitting = true;
    this.eventsService.addEvent(event).subscribe(()=>{
      this.submitting = false;
      this.showEventForm = false;
    });
  }
}
