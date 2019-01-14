import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUtterance } from '../../interfaces/utterance';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ConversationService {

  constructor(private http: HttpClient) { }

  getConversationById(id : string): Observable<IUtterance[]> {
    const endpoint = environment.transcriptApiUrl.replace("{id}", id);
    return this.http.get<IUtterance[]>(endpoint);
  }

  sortConversationByTime(utterance): IUtterance[] {
    const sortedUtterance = utterance.sort((line1,line2) => { return line1.time - line2.time })
    var i = 0;
    const sequencedUtterance = sortedUtterance.map((snippet) => { 
    if (i === sortedUtterance.length-1) {
      snippet.endOfSequence = true;
      return snippet;
      } else {
        snippet.endOfSequence = sortedUtterance[i].speaker !==  sortedUtterance[i+1].speaker; 
        i++;
        return snippet;
      } 
    });
    return sequencedUtterance;
  }

  verifyVideo(id: string): Observable<Object> {
    const endpoint = environment.videoApiUrl.replace("{id}", id);
    return this.http.head<string>(endpoint, { observe: 'response' });
  }

  getVideoById(id: string): string {
    return environment.videoApiUrl.replace("{id}", id);
  }
}
