import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = []

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '',
        price: 99.99,
        code: 'ABC-123',
        duration: 120,
        rating: 4.4,
        releaseDate: 'May 1, 2015'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '',
        price: 45.99,
        code: 'TRE-098',
        duration: 80,
        rating: 4.8,
        releaseDate: 'July 10, 2018'
      }
    ]
  }
}
