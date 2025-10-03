import {Injectable } from "@angular/core";
import {httpResource, HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}
  readonly events = httpResource<KenzeEventDto[]>(() => ({
    url: '/bff/events',
    method: 'GET'
  }));


  getEvents(): KenzeEvent[] {
    return this.events.hasValue()
      ? this.events.value().map(p => {
        var e: KenzeEvent = {id: p.id, eventname:p.name, date: p.date};
        return e;
      })
      : [];
  }


  addEvent(event: KenzeEvent) {
    return this.http.post('/bff/events', new NewKenzeEventDto(event.eventname, event.date))
      .pipe(
        tap(() => this.events.reload()
        )
      );
  }

}



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
