import { Component, OnInit } from '@angular/core';
import { SitterService} from '../Services/sitter.service';
import { PetSitter} from '../Shared/pet-sitter';
import {Router, RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.scss'],
  imports: [
    RouterLink,
    NgForOf,
    FormsModule
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
