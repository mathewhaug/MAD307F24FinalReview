import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { SitterService} from '../Services/sitter.service';
import { PetSitter} from '../Shared/pet-sitter';
import {NgIf} from '@angular/common';
import {AgePipe} from '../pipes/age-pipe.pipe';
import {RatingPipePipe} from '../pipes/rating-pipe.pipe';
import {AvailabilityPipe} from '../pipes/availability-pipe.pipe';
import {HighlightDirective} from '../directives/highlight.directive';
import {SitterStatusDirective} from '../directives/sitter-status.directive';

@Component({
  selector: 'app-sitter-detail',
  templateUrl: './sitter-detail.component.html',
  styleUrls: ['./sitter-detail.component.scss'],
  imports: [
    NgIf,
    RouterLink,
    AgePipe,
    RatingPipePipe,

    HighlightDirective,
    SitterStatusDirective
  ],
  standalone: true
})
export class SitterDetailComponent implements OnInit {
  sitter: PetSitter | undefined;

  constructor(
    private route: ActivatedRoute,
    private sitterService: SitterService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sitterService.getSitterById(id).subscribe((data) => {
      this.sitter = data;
    });
  }
}
