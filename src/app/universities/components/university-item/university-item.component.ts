import { Component, Input } from '@angular/core';
import { University } from '../../model/university.entity';
import { MatCardModule } from '@angular/material/card';
import { MatAnchor } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-university-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatAnchor,
    TranslatePipe
  ],
  templateUrl: "./university-item.component.html",
  styleUrl: "./university-item.component.css"
})
export class UniversityItemComponent {
  @Input() university!: University;
}
