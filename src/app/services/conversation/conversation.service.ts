import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUtterance } from '../../interfaces/utterance';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ConversationService {

  constructor(private http: HttpClient) { }

  getConversationById(id: string): Observable<IUtterance[]> {
    const endpoint = environment.transcriptApiUrl.replace('{id}', id);
    return this.http.get<IUtterance[]>(endpoint);
  }

  // we can't assume the data will be sorted, so we will do it ourselves
  sortConversationByTime(utterance): IUtterance[] {
    const sortedUtterance = utterance.sort((line1, line2) => line1.time - line2.time);
    let i = 0;
    // adding a boolean property to indicate when we have changed speakers
    const sequencedUtterance = sortedUtterance.map((snippet) => {
    if (i === sortedUtterance.length - 1) {
      snippet.endOfSequence = true;
      return snippet;
      } else {
        snippet.endOfSequence = sortedUtterance[i].speaker !==  sortedUtterance[i + 1].speaker;
        i++;
        return snippet;
      }
    });
    return sequencedUtterance;
  }

  // ensure the video exists
  verifyVideo(id: string): Observable<Object> {
    const endpoint = environment.videoApiUrl.replace('{id}', id);
    return this.http.head<string>(endpoint, { observe: 'response' });
  }

  // return the video url
  getVideoById(id: string): string {
    return environment.videoApiUrl.replace('{id}', id);
  }
}
