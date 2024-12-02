import { PetSitter} from './pet-sitter';
//Here lies the mock data we will use for our project

const photos = [
  "https://media.gettyimages.com/id/1235152164/photo/21-pictured-ariana-grande.jpg?s=612x612&w=0&k=20&c=ZJxUcyFlf73_HEYGeLn1M-Cg94mjYNPT1hOMVQPHkXg=",
  "https://media.gettyimages.com/id/1140826482/photo/new-york-ny-ryan-reynolds-attends-the-premiere-of-pokemon-detective-pikachu-at-military.jpg?s=612x612&w=0&k=20&c=rrY2K-RNQq4ZPKQmZ-sxXEj3NoW0p7DJE_l5fe-EYVc=",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Hugh_Jackman_by_Gage_Skidmore_3.jpg/220px-Hugh_Jackman_by_Gage_Skidmore_3.jpg",
  "https://media.gettyimages.com/id/1139092374/photo/los-angeles-comedian-and-actor-jerry-seinfeld-poses-for-a-portrait-in-october-1994-in-los.jpg?s=612x612&w=0&k=20&c=Y5Pm3cnB8ovoXqdlzpEm2K4fFOFNMcofqEquXOVJdFY=",
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/George_Costanza.jpg/220px-George_Costanza.jpg",
  "https://upload.wikimedia.org/wikipedia/en/f/f7/Darth_Vader.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Luke_Skywalker_in_Return_of_the_Jedi_and_The_Last_Jedi.jpg/220px-Luke_Skywalker_in_Return_of_the_Jedi_and_The_Last_Jedi.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ty_Burrell_2_2014.jpg/220px-Ty_Burrell_2_2014.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Rico_Rodriguez_at_2015_PaleyFest.jpg/220px-Rico_Rodriguez_at_2015_PaleyFest.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eric_Stonestreet_at_2015_PaleyFest.jpg/220px-Eric_Stonestreet_at_2015_PaleyFest.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/220px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",
  "https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg",
  "https://upload.wikimedia.org/wikipedia/en/f/fc/Paul_Bettany_as_Vision.jpg",
  "https://images.wsj.net/im-804728?width=1280&size=1",
  "https://www.pluggedin.com/wp-content/uploads/2023/06/spider-man-across-the-spider-verse.jpg"
];







export const SITTERS: PetSitter[] = [
  { id: 1, name: 'Charlie', age: 59, experience: 4, rating: 2, specialty: 'Fish', available: true, photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 2, name: 'Ivy', age: 34, experience: 3, rating: 1, specialty: 'Birds', available: true , photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 3, name: 'Bob', age: 35, experience: 18, rating: 2, specialty: 'Dogs', available: false , photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 4, name: 'Fay', age: 40, experience: 5, rating: 1, specialty: 'Reptiles', available: true ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 5, name: 'Bob', age: 36, experience: 12, rating: 5, specialty: 'Dogs', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 6, name: 'Ivy', age: 45, experience: 8, rating: 5, specialty: 'Rodents', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 7, name: 'Charlie', age: 46, experience: 7, rating: 1, specialty: 'Fish', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 8, name: 'Bob', age: 25, experience: 13, rating: 2, specialty: 'Birds', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 9, name: 'Charlie', age: 28, experience: 8, rating: 4, specialty: 'Reptiles', available: false ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 10, name: 'Grace', age: 26, experience: 8, rating: 5, specialty: 'Cats', available: false ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 11, name: 'Fay', age: 46, experience: 1, rating: 3, specialty: 'Horses', available: false ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 12, name: 'Eve', age: 53, experience: 8, rating: 2, specialty: 'Cats', available: false ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 13, name: 'Bob', age: 26, experience: 9, rating: 5, specialty: 'Dogs', available: false ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 14, name: 'Grace', age: 50, experience: 11, rating: 1, specialty: 'Cats', available: true ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 15, name: 'Hank', age: 29, experience: 12, rating: 4, specialty: 'Dogs', available: false ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 16, name: 'Bob', age: 21, experience: 10, rating: 5, specialty: 'Cats', available: false ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 17, name: 'Alice', age: 28, experience: 13, rating: 3, specialty: 'Horses', available: true ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 18, name: 'Charlie', age: 38, experience: 9, rating: 4, specialty: 'Horses', available: false ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 19, name: 'Bob', age: 41, experience: 2, rating: 2, specialty: 'Cats', available: false ,photo:  photos[Math.floor(Math.random() * photos.length)]},
  { id: 20, name: 'Dave', age: 55, experience: 13, rating: 4, specialty: 'Dogs', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 21, name: 'Hank', age: 48, experience: 13, rating: 1, specialty: 'Fish', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 22, name: 'Bob', age: 54, experience: 5, rating: 2, specialty: 'Rodents', available: true,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 23, name: 'Hank', age: 27, experience: 5, rating: 2, specialty: 'Reptiles', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 24, name: 'Dave', age: 53, experience: 2, rating: 4, specialty: 'Horses', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 25, name: 'Charlie', age: 33, experience: 14, rating: 2, specialty: 'Fish', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 26, name: 'Alice', age: 44, experience: 11, rating: 4, specialty: 'Reptiles', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 27, name: 'Grace', age: 33, experience: 7, rating: 3, specialty: 'Dogs', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 28, name: 'Charlie', age: 56, experience: 11, rating: 2, specialty: 'Birds', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 29, name: 'Dave', age: 53, experience: 18, rating: 1, specialty: 'Rodents', available: true,photo:  photos[Math.floor(Math.random() * photos.length)] },
  { id: 30, name: 'Alice', age: 47, experience: 3, rating: 4, specialty: 'Reptiles', available: false,photo:  photos[Math.floor(Math.random() * photos.length)] },
 ];
