import { Component, OnInit } from '@angular/core';
import { ConversationService } from '../../services/conversation/conversation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})

export class VideoComponent implements OnInit {

  id = this.route.snapshot.queryParamMap.get('id');

  constructor(private route: ActivatedRoute, private conversationService: ConversationService) { }

  ngOnInit() {
    document.querySelector('video').removeAttribute('controls');
    // todo: the HEAD request doesn't seem to be 100% reliable (COORS and unknown err responses) (restarting the server helps)
    // in the meantime, we'll let the video load with some console logging
    this.conversationService.verifyVideo(this.id)
    .subscribe(
      resp => { this._displayVideo(); },
      err => {
        this._displayVideo();
        console.log('head request was not 200');
      }
    );
  }

  playVideo() {
    // todo: toggling the 'controls' attribute is behaving a bit wonkey.  I would perfer to use custom controls and make them accessible
    // https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia
    document.querySelector('video').setAttribute('controls', '');
    const player = document.querySelector('video');
    player.play();
    const arrow: HTMLElement = document.querySelector('.arrow') as HTMLElement;
    arrow.style.visibility = 'hidden';
  }

  private _displayVideo() {
    const videoPath = this.conversationService.getVideoById(this.id);
    document.querySelector('video').setAttribute('src', videoPath);
    document.querySelector('.video').classList.toggle('hide');
  }
}
