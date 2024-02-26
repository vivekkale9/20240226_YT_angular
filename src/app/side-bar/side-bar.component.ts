import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  // Array for the navigation links
  navigationLinks = [
    { iconClass: 'fa-solid fa-house', routerLink: '/', text: 'Home' },
    { iconClass: 'fa-solid fa-z', text: 'Shorts' },
    { iconClass: 'fa-brands fa-youtube', routerLink: '/subscriptions', text: 'Subscriptions' },
    { iconClass: 'fa-solid fa-play', text: 'YouTube Music' }
  ];
  // Array for the you section
  sidebarLinks_you : Array<{text:String,icon:String}> = [
    { text: 'You', icon: 'fa-solid fa-chevron-right' },
    { text: 'Your channel', icon: '' },
    { text: 'History', icon: 'fa-solid fa-clock-rotate-left' },
    { text: 'Your videos', icon: 'fa-solid fa-circle-play' },
    { text: 'Watch later', icon: 'fa-regular fa-clock' },
    { text: 'Downloads', icon: 'fa-solid fa-download' },
    { text: 'Show more', icon: 'fa-solid fa-angle-down' }
  ];
  // Array for the subscriptions
  sidebarLinks_subscriptions = [
    {text: 'Subscriptions', fontWeight: '700' },
    {profileSrc: '../../assets/tanmayProfile.PNG', routerLink: '/bhatt-page', text: 'Tanmay Bhat' },
    {profileSrc: '../../assets/snippetProfile.PNG', routerLink: '/snippet-page', text: 'Ezz Snippet' },
    {profileSrc: '../../assets/arpitProfile.PNG', routerLink: '/harry-page', text: 'CodeWithHarry' }
  ];
  // Array for the explore links
  exploreLinks = [
    { imgSrc: 'path-to-image1', text: 'Explore', fontWeight: '700' },
    { iconClass: 'fa-solid fa-fire', text: 'Trending' },
    { iconClass: 'fa-solid fa-bag-shopping', text: 'Shopping' },
    { iconClass: 'fa-solid fa-music', text: 'Music' },
    { iconClass: 'fa-solid fa-clapperboard', text: 'Films' },
    { iconClass: 'fa-solid fa-life-ring', text: 'Live' },
    { iconClass: 'fa-solid fa-gamepad', text: 'Gaming' },
    { iconClass: 'fa-solid fa-newspaper', text: 'News' }
  ];
}
