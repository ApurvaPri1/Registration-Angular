import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
    return ["course1", "course2", "course3", "courses6"]
  }
}
