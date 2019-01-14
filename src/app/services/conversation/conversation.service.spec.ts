import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConversationService } from './conversation.service';
import { IUtterance } from '../../interfaces/utterance';

describe('ConversationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: ConversationService = TestBed.get(ConversationService);
    expect(service).toBeTruthy();
  });

  it('it should display a conversation with a valid ID'), () => {
    const id: string = "4d79041e-f25f-421d-9e5f-3462459b9934";
    const service: ConversationService = TestBed.get(ConversationService);
    service.getConversationById(id)
    .subscribe(
      resp => { 
        debugger
        expect(resp).not.toThrow();
        expect(resp).not.toBeNull();
      },
    );


  }
});
