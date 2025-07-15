import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from "../../shared/components/social-icons/social-icons.component";
import { TranslateModule} from '@ngx-translate/core';


@Component({
  selector: 'app-hero',
  imports: [CommonModule, SocialIconsComponent, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
    heroText = ['Frontend','DEVELOPER' ];

isHovered: boolean = false;
hoveredIndex: number | null = null;
hoveredCase: 'uppercase' | 'lowercase' | null = null;
hoveredSource: string | null = null;


constructor() {
}


onHover(letter: string , index: number , source: string) {
  this.hoveredCase = letter === letter.toUpperCase() ? 'uppercase' : 'lowercase';
  setTimeout(() => {
  this.hoveredIndex = index;
  this.hoveredSource = source;
  }, 75); // Adjust the delay as needed

}

onLeave() {
  this.hoveredIndex = null;
  this.hoveredCase = null;
  this.hoveredSource = null;
}


}
