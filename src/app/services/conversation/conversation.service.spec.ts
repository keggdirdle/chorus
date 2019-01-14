import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConversationService } from './conversation.service';

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
});
