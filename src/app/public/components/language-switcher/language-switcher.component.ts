import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

/**
 * Component for switching between supported languages
 * @author U202212345 John Doe
 */
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [MatButtonToggleModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  currentLang = 'en';
  languages = ['en', 'es'];

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang;
  }

  useLanguage(language: string) {
    this.currentLang = language;
    this.translate.use(language);
  }
}
