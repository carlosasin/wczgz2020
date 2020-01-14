import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {
  constructor(private readonly router: Router) {
    this.router.initialNavigation();
  }
}
