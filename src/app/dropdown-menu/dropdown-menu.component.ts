import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {
  settingsMenuToggle(): void {
    const settingsmenu = document.querySelector(".settings-menu") as HTMLElement;
    settingsmenu.classList.toggle("settings-menu-height");
  }
}
