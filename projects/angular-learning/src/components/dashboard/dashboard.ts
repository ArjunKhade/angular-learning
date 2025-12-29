import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  hasChildRoute = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Check if child route is active
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.hasChildRoute = this.router.url !== '/dashboard';
    });
  }
}
