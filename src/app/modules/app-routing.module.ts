import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from '../components/video/video.component';
import { ConversationComponent } from '../components/conversation/conversation.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';


const routes: Routes = [
  { 
    path: '', 
    component: VideoComponent,
    children: [
      { path: '', component: ConversationComponent }
    ] 
  },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
