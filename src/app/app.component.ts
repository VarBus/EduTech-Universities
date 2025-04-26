import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LanguageSwitcherComponent } from './public/components/language-switcher/language-switcher.component';
import {FooterComponent} from './public/components/footer-content/footer-content.component';
import { UniversityListComponent } from './universities/components/university-list/university-list.component';
import { University } from './universities/model/university.entity';
import {UniversitiesApiService} from './universities/services/university-api.service';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Main application component
 * @author U202212345 John Doe
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    LanguageSwitcherComponent,
    FooterComponent,
    UniversityListComponent,
    TranslatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  universities: University[] = [];

  constructor(
    private translate: TranslateService,
    private universitiesApiService: UniversitiesApiService
  ) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    this.universitiesApiService.getScienceUniversities()
      .subscribe(universities => {
        this.universities = universities;
      });
  }
}
