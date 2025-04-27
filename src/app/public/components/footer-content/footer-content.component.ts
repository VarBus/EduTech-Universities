import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Footer component that displays copyright and developer information
 * @author U202212345 John Doe
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.css'
})
export class FooterComponent {
  developerCode = 'U202319668';
  developerName = 'Marcelo Alessandro Varela Bustinza';
}
