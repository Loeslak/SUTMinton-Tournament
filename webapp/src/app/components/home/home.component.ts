import { Component } from '@angular/core';
import { SidebarOrganComponent } from "../organize/sidebar-organ/sidebar-organ.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarOrganComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
