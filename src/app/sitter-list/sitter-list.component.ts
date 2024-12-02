import { Component, OnInit } from '@angular/core';
import { SitterService} from '../Services/sitter.service';
import { PetSitter} from '../Shared/pet-sitter';
import {Router, RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatGridList, MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import {MatOption, MatOptionModule} from '@angular/material/core';
import {MatFormField, MatSelect, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SitterStatusDirective} from '../directives/sitter-status.directive';

@Component({
  selector: 'app-sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.scss'],
  imports: [
    RouterLink,
    NgForOf,
    FormsModule,
    MatCardActions,
    MatButton,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatGridTile,
    MatGridList,
    MatOption,
    MatSelect,
    MatFormField,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    SitterStatusDirective
  ],
  standalone: true
})
export class SitterListComponent implements OnInit {
  sitters: PetSitter[] = [];
  filteredSitters: PetSitter[] = [];
  specialtyFilter: string = '';
  availabilityFilter: boolean | '' = '';

  constructor(private sitterService: SitterService,
              private router: Router) {}

  ngOnInit(): void {
    this.sitterService.getSitters().subscribe((data) => {
      this.sitters = data;
      this.filteredSitters = data;
    });
  }

  filterSitters(): void {
    this.filteredSitters = this.sitters.filter((sitter) => {
      const specialtyMatch =
        !this.specialtyFilter || sitter.specialty === this.specialtyFilter;
      const availabilityMatch =
        this.availabilityFilter === '' ||
        sitter.available === this.availabilityFilter;
      return specialtyMatch && availabilityMatch;
    });

  }

  navigateToModifySitter(id: number): void {
    this.router.navigate(['/modify-sitter', id]);
  }

  navigateToAddSitter(): void {
    this.router.navigate(['/modify-sitter']);
  }
}
