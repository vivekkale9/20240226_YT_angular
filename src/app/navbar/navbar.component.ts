import { RouterLink } from '@angular/router';
import { DropdownMenuComponent } from './../dropdown-menu/dropdown-menu.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DropdownMenuComponent,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
