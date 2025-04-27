import { Component, Input } from '@angular/core';
import { University } from '../../model/university.entity';
import { UniversityItemComponent } from '../university-item/university-item.component';
import { NgFor } from '@angular/common';
import {MatNavList} from '@angular/material/list';

/**
 * Component to display a list of universities
 * @author U202319668
 */
@Component({
  selector: 'app-university-list',
  standalone: true,
  imports: [UniversityItemComponent, MatNavList],
  templateUrl: "./university-list.component.html",
  styleUrl: "./university-list.component.css"
})
export class UniversityListComponent {
  @Input() universities: University[] = [];
}
