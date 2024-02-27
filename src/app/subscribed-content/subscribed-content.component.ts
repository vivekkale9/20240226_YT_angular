import { CommonModule } from '@angular/common';
import { SideBarComponent } from './../side-bar/side-bar.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { VideoPreviewService } from '../service';

@Component({
  selector: 'app-subscribed-content',
  standalone: true,
  imports: [NavbarComponent,SideBarComponent,CommonModule],
  providers:[VideoPreviewService],
  templateUrl: './subscribed-content.component.html',
  styleUrl: './subscribed-content.component.css'
})
export class SubscribedContentComponent {
  Subscriptions:Array<string>=[
    'Tanmay Bhat',
    'Iman Gadzi'
  ]
  videoPreviews: any[];
  filteredData: any[] = [];

    constructor(public videoPreviewService: VideoPreviewService) {
      // Call the service method to get video previews
    this.videoPreviews = this.videoPreviewService.videoPreviews;
    this.filteredData = this.videoPreviews.filter((video) =>
      this.Subscriptions.includes(video.author)
    );
  }
  filterBySubscription(subscription: string) {
    this.filteredData = this.videoPreviews.filter(
      (video) => video.author === subscription
    );
  }

}
