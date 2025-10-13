import {Component, computed, ViewChild, AfterViewChecked} from '@angular/core';
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
export class EventsPage implements AfterViewChecked  {
  @ViewChild(KenzeEventFormComponent) eventFormComponent!: KenzeEventFormComponent;

  showEventForm = false;
  submitting = false;

  events = computed(() => this.eventsService.getEvents());
  isAddFormValid = computed(()=> false);

  constructor(private eventsService: EventsService) {}

  ngAfterViewChecked(): void {
    this.isAddFormValid = computed(()=> this.eventFormComponent?.isValid() || false);
  }

  isLoading =  computed(()=> this.eventsService.eventsUpdating());
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
