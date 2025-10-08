import {Injectable } from "@angular/core";
import {httpResource, HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  readonly events = httpResource<KenzeEvent[]>(
    ()=> ({
      url: `bff/events`, method: 'GET',
    }),
    {
      parse: (response :unknown) => {
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
    return this.http.post('/bff/events', new NewKenzeEventDto(event.eventname, event.date))
      .pipe(
        tap(() => this.events.reload()
        )
      );
  }

  deleteEvent(eventId: number) {
    return this.http.delete('/bff/events/' + eventId)
      .pipe(
        tap(() => this.events.reload()
        )
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
