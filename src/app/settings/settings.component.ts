import { CommonModule } from '@angular/common';
import { SideBarComponent } from './../side-bar/side-bar.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [NavbarComponent,SideBarComponent,CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  sidebarLinks = [
    'Account',
    'Notifications',
    'Playback and performance',
    'Downloads',
    'Privacy',
    'Connected apps',
    'Purchases and memberships',
    'Bills and payments',
    'Advanced settings'
  ];
}
