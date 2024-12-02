import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {SitterListComponent} from './app/sitter-list/sitter-list.component';
import {SitterDetailComponent} from './app/sitter-detail/sitter-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/sitters', pathMatch: 'full' },
  { path: 'sitters', component: SitterListComponent },
  { path: 'sitters/:id', component: SitterDetailComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
