import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { SitterService} from '../Services/sitter.service';
import { PetSitter} from '../Shared/pet-sitter';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sitter-detail',
  templateUrl: './sitter-detail.component.html',
  styleUrls: ['./sitter-detail.component.scss'],
  imports: [
    NgIf,
    RouterLink
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
