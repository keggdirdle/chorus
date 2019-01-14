import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConversationComponent } from './conversation.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ConversationComponent', () => {
  let component: ConversationComponent;
  let fixture: ComponentFixture<ConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ConversationComponent ],
      providers: [ HttpClient, HttpHandler ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
