import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/_shared/header/header.component';
import { VideoComponent } from './components/video/video.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { FooterComponent } from './components/_shared/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoComponent,
    ConversationComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
