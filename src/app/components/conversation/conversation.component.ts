import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConversationService } from '../../services/conversation/conversation.service';
import { IUtterance } from '../../interfaces/utterance';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.sass']
})

export class ConversationComponent implements OnInit {

  canDisplay = true;
  conversation: IUtterance[];

  constructor(private route: ActivatedRoute, private conversationService: ConversationService) { }

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('id');

    this.conversationService.getConversationById(id)
    .subscribe(
      resp => { this._setConversationArray(this.conversationService.sortConversationByTime(resp)); },
      err => { this._showErrorMessage(err); }
    );
  }

  private _showErrorMessage(err) {
    if (err.status === 404) {
     this.canDisplay = false;
    }
  }

  private _setConversationArray(json) {
    this.conversation = json;
  }

}
