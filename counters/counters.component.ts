import { Component, ElementRef, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { count } from 'console';


@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.css'
})
export class CountersComponent {
  counters: { count: number; target: number; duration: number; started: boolean }[] = [
    { count: 0, target: 100, duration: 2000, started: false },
    { count: 0, target: 1500, duration: 3000, started: false },
    { count: 0, target: 15, duration: 1500, started: false }
  ];

  ngOnInit(): void {
    this.counters.forEach((_, index) => {
      this.animateCounter(index);
    });
  }

  animateCounter(index: number): void {
    const start = performance.now(); // Start time
    const target = this.counters[index].target;
    const duration = this.counters[index].duration;

    const step = (timestamp: number) => {
      const elapsed = timestamp - start; // Time elapsed
      const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1
      this.counters[index].count = Math.floor(progress * target); // Calculate current value

      if (progress < 1) {
        requestAnimationFrame(step); // Continue animation
      }
    };

    requestAnimationFrame(step); // Start the animation
  }
}
