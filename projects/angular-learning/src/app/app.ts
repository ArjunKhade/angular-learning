import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { Header, Sidenav } from './shared/components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, Header, Sidenav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  isOpen = false;
  isMobile = false;
  private resizeListener: (() => void) | null = null;

  ngOnInit() {
    this.checkMobile();
    this.resizeListener = () => this.checkMobile();
    window.addEventListener('resize', this.resizeListener);
    // Load sidebar state from localStorage
    const savedState = localStorage.getItem('sidebarOpen');
    this.isOpen = savedState ? JSON.parse(savedState) : false;
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    localStorage.setItem('sidebarOpen', JSON.stringify(this.isOpen));
  }

  private checkMobile() {
    this.isMobile = window.innerWidth < 1024;
  }
}
