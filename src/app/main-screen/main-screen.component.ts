import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideoPreviewService } from '../service';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [CommonModule],
  providers: [VideoPreviewService],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'
})
export class MainScreenComponent {
  // Array for the horizontal bar
  horizontalBarLinks = [
    'All', 'Gaming', 'Music', 'Mixes', 'Podcast', 'Javascript', 'Loony', 'Valorant',
    'Computer', 'Games', 'Live', 'Thrillers', 'Thoughts', 'Cartoon', 'ChevronRight'
  ];
  displayVideo: any[]; // Adjust the type based on your video preview object structure

  constructor(public videoPreviewService: VideoPreviewService) {
    // Call the service method to get video previews
    this.displayVideo = this.videoPreviewService.videoPreviews;
  }
  
}
