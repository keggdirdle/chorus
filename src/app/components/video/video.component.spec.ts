import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VideoComponent } from './video.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ VideoComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
