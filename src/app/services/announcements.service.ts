import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Announcement } from '../data/Announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  constructor(private http: HttpClient) { }

  getAnnouncements(): Observable<Announcement[]> {
    const pageContext: any = window[<any>'_spPageContextInfo'];
    const requestUri =
      pageContext.webAbsoluteUrl +
      "/_api/web/lists/getbytitle('Announcements')/Items";
    
      return this.http
      .get(
        requestUri,
        {
          headers: {
            Accept: 'application/json;odata=verbose',
            'odata-version': '',
          },
        }
      )
      .pipe(
        map(
          (itemsResult: any) => {
            return itemsResult.d.results as Announcement[];
          }
        )
      )
  }
}
