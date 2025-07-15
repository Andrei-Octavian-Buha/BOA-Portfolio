import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {


  rotation(degrees: number) {
    return {
      'transform': `rotate(${degrees}deg)`
    };
  }
}
