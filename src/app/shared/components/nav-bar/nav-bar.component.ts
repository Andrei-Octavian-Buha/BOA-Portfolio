import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule , LogoComponent, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
}
