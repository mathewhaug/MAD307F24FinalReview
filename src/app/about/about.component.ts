import { Component } from '@angular/core';
import {MatChip, MatChipsModule} from '@angular/material/chips';
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage,
  MatCardModule
} from '@angular/material/card';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-about',
  imports: [
    MatChip,
    MatCardFooter,

    MatCard,
    MatCardHeader,
    MatIcon,
    MatCardContent,
    MatButton,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/sitters']);
  }

  visitGitHub() {
    window.open('https://github.com/mathewhaug/MAD307F24FinalReview', '_blank');
  }

  googlePhotosUrl: string = 'https://lh3.googleusercontent.com/pw/AP1GczOGdRqFtOBKQAkwX4QRi4PIH2_BLRFlBmte5HkogwXdPoCn2X5AaW-2E9fz2NBjGK6TeUzMDuii7TJu7KhJf67ZUb4HMbfn2ZHogqASR8R0pFe_4KX_0k6dSaFwQwRq66RDxHPhwJQkGe7FYywo1ZkaOg=w1028-h959-s-no-gm?authuser=0';

}

