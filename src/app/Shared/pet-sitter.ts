export interface PetSitter {
  id: number;
  name: string;
  age: number;
  experience: number;
  rating: number; // 1 to 5 Stars
  specialty: string; //"Cats", "Dogs", etc.
  available: boolean;
  photo?: string; //URL to a photo
}
