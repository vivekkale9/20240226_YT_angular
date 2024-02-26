import { MainScreenComponent } from './../main-screen/main-screen.component';
import { SideBarComponent } from './../side-bar/side-bar.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [NavbarComponent,SideBarComponent,MainScreenComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

}
