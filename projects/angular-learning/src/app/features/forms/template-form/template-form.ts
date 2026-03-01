import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  NgxMaterialTimepickerComponent,
  NgxMaterialTimepickerModule,
} from 'ngx-material-timepicker';

@Component({
  selector: 'app-template-form',
  imports: [CommonModule, NgxMaterialTimepickerModule, FormsModule, MatIconModule, MatButtonModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  startTime: string | null = 'HH : MM AM';
  endTime: string | null = 'HH : MM PM';

  @ViewChild('startPicker') startPicker!: NgxMaterialTimepickerComponent;
  @ViewChild('endPicker') endPicker!: NgxMaterialTimepickerComponent;

  openStartPicker() {
    this.startPicker.open();
  }

  handleStartTimeSet(time: string) {
    this.startTime = time;

    // close start picker explicitly
    this.startPicker.close();

    // open end picker AFTER UI updates
    setTimeout(() => {
      this.endPicker.open();
    }, 300);
  }

  handleEndTimeSet(time: string) {
    this.endTime = time;
    this.endPicker.close();
  }
}
