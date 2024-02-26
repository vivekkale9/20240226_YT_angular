import { SideBarComponent } from './../side-bar/side-bar.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-subscribed-content',
  standalone: true,
  imports: [NavbarComponent,SideBarComponent],
  templateUrl: './subscribed-content.component.html',
  styleUrl: './subscribed-content.component.css'
})
export class SubscribedContentComponent {

}
