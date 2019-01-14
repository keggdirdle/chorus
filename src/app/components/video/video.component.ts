import { Component, OnInit } from '@angular/core';
import { ConversationService } from '../../services/conversation/conversation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {
  id = this.route.snapshot.queryParamMap.get("id");
  constructor(private route: ActivatedRoute, private conversationService: ConversationService) { }

  ngOnInit() {
    document.querySelector("video").removeAttribute("controls");
    //todo the HEAD request doesn't seem to be 100% reliable (restarting the server helped)
    this.conversationService.verifyVideo(this.id)
    .subscribe(
      resp => { this._displayVideo(); },
      err => { console.log("head request was not 200")  }
    );
  }

  playVideo() {
    //todo: make video buttons accessible https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia
    document.querySelector("video").setAttribute("controls","")
    let player = document.querySelector('video');
    player.play();
    let arrow: HTMLElement = document.querySelector('.arrow') as HTMLElement;
    arrow.style.visibility = "hidden";
  }

  private _displayVideo() {
    const videoPath = this.conversationService.getVideoById(this.id);
    document.querySelector("video").setAttribute("src",videoPath);
    document.querySelector(".video").classList.toggle("hide");
  }
}
