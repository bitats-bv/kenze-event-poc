import {computed, Injectable, signal} from "@angular/core";
import {httpResource, HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}
  private isPosting = signal<boolean>(false);
  private isDeleting = signal<boolean>(false);
  readonly eventsUpdating = computed(() => this.events.isLoading() || this.isPosting() || this.isDeleting() );
  readonly events = httpResource<KenzeEvent[]>(
    ()=> ({
      url: `bff/events`, method: 'GET',
    }),
    {
      parse: (response:unknown) => {
        const array = response as KenzeEventDto[];
        return array.map(p => {
         return {id: p.id, eventname: p.name, date: new Date(p.date)} as KenzeEvent;
        });
      }
    });


  getEvents() {
    return this.events;
  }

  addEvent(event: KenzeEvent) {
    this.isPosting.set(true);
    return this.http.post('/bff/events', new NewKenzeEventDto(event.eventname, event.date))
      .pipe(
        tap(() => this.events.reload()),
        tap(() => this.isPosting.set(false))
      );
  }

  deleteEvent(eventId: number) {
    this.isDeleting.set(true);
    return this.http.delete('/bff/events/' + eventId)
      .pipe(
        tap(() => this.events.reload()),
        tap(() => this.isPosting.set(false))

      );
  }
}

export default EventsService



class KenzeEventDto {
  constructor(
    public id: number,
    public name: string,
    public date: Date){}
}

class NewKenzeEventDto{
  constructor(
    public name: string,
    public date: Date){}
}


export interface KenzeEvent {
  id: number | undefined;
  eventname: string;
  date: Date;
}
