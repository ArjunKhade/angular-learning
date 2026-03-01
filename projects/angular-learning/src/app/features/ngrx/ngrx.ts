import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-ngrx',
  imports: [FormsModule],
  templateUrl: './ngrx.html',
  styleUrl: './ngrx.css',
})
export class Ngrx implements OnInit {
  counter = signal(0);
  //converting signal to observable
  counter$ = toObservable(this.counter);
  interval$ = interval(1000);
  //converting obseravable to signal
  intervalSignal = toSignal(this.interval$,{initialValue:0});

  private distroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // const subcription = interval(1000)
    //   .pipe(map((vl) => vl * 2))
    //   .subscribe({
    //     next: (val) => {
    //       this.counter.set(val);
    //       console.log(val);
    //     },
    //   });
    //cleanup subscription
    // this.distroyRef.onDestroy(() => {
    //   subcription.unsubscribe();
    // });
  }

  /** When Button clicked */
  onClick() {
    this.counter.update((prev) => prev + 1);
  }
}
