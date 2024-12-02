import { Injectable } from '@angular/core';
import {SITTERS} from '../Shared/mock-data';
import {PetSitter} from '../Shared/pet-sitter';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SitterService {
  //Function to get all sitters using observables
  getSitters(): Observable<PetSitter[]> {
    return of(SITTERS);
  }
//function to get a specific sitter by ID
  getSitterById(id: number): Observable<PetSitter | undefined> {
    return of(SITTERS.find(sitter => sitter.id === id));
  }
}
