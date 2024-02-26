import { CommonModule } from '@angular/common';
import { SideBarComponent } from './../side-bar/side-bar.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-subscribed-content',
  standalone: true,
  imports: [NavbarComponent,SideBarComponent,CommonModule],
  templateUrl: './subscribed-content.component.html',
  styleUrl: './subscribed-content.component.css'
})
export class SubscribedContentComponent {
  Subscriptions:Array<string>=[
    'Tanmay Bhat',
    'Iman Gadzi'
  ]
  videoPreviews = [
    { thumbnailSrc: '../../assets/tanmayBhat.PNG', profileSrc: '../../assets/tanmayProfile.PNG', videoTime: '14:20', title: 'The Nick Jonas Vlog - Vlog 129', author: 'Tanmay Bhat', views: '3.4M views &#183; 6 months ago' },
    { thumbnailSrc: '../../assets/thumb2.PNG', profileSrc: '../../assets/shemaroProfile.PNG', videoTime: '02:45:55', title: 'Golmaal!!', author: 'Shemaroo', views: '19M views &#183; 4 years ago' },
    { thumbnailSrc: '../../assets/thumb3.PNG', profileSrc: '../../assets/imanProfile.PNG', videoTime: '9:20', title: 'I got RICH after doing this', author: 'Iman Gadzi', views: '12M views &#183; 1 year ago' },
    { thumbnailSrc: '../../assets/thumb4.PNG', profileSrc: '../../assets/arpitProfile.PNG', videoTime: '19:02', title: 'jholi man', author: 'Arpit Bala', views: '10K views &#183; 2 weeks ago' },
    { thumbnailSrc: '../../assets/thumb5.PNG', profileSrc: '../../assets/samProfile.PNG', videoTime: '25:50', title: 'Winter Bulk', author: 'Sam Sulek', views: '107K views &#183; 2 weeks ago' },
    { thumbnailSrc: '../../assets/thumb6.PNG', profileSrc: '../../assets/snippetProfile.PNG', videoTime: '07:20', title: 'Mujhe hi roast kar diya', author: 'Ezz Snippet', views: '1M views &#183; 4 weeks ago' },
    { thumbnailSrc: '../../assets/tanmayBhat.PNG', profileSrc: '../../assets/tanmayProfile.PNG', videoTime: '14:20', title: 'The Nick Jonas Vlog - Vlog 129', author: 'Tanmay Bhat', views: '3.4M views &#183; 6 months ago' },
    { thumbnailSrc: '../../assets/tanmayBhat.PNG', profileSrc: '../../assets/tanmayProfile.PNG', videoTime: '14:20', title: 'The Nick Jonas Vlog - Vlog 129', author: 'Tanmay Bhat', views: '3.4M views &#183; 6 months ago' },
    { thumbnailSrc: '../../assets/tanmayBhat.PNG', profileSrc: '../../assets/tanmayProfile.PNG', videoTime: '14:20', title: 'The Nick Jonas Vlog - Vlog 129', author: 'Tanmay Bhat', views: '3.4M views &#183; 6 months ago' },

  ];
  filteredData: any[] = [];

    constructor() {
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
