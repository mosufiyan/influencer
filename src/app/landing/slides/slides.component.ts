import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fundflo-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  slides: any[] = [
    { id: 1, image: '../../../assets/influencer-img/slide1.svg', label: 'Get Yourself Registered' },
    { id: 2, image: '../../../assets/influencer-img/slide1.svg', label: 'Create Leads' },
    { id: 3, image: '../../../assets/influencer-img/slide1.svg', label: 'Earn With Us' }
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  getStarted() {
    this.router.navigate(['/auth/sign-up']);
  }
}
