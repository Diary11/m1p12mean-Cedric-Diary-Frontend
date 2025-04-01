import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';


interface TimeSlot {
  time: string;
  disabled: boolean;
}

@Component({
  selector: 'app-scheduler2-dialog',
  templateUrl: './scheduler2-dialog.component.html',
  styleUrls: ['./scheduler2-dialog.component.scss'],
  imports: [NgFor, MatDialogModule]
})
export class Scheduler2DialogComponent {
  timeSlots: TimeSlot[] = [];
  selectedSlots: string[] = [];

  constructor(private dialogRef: MatDialogRef<Scheduler2DialogComponent>) {
    this.initializeTimeSlots();
  }

  initializeTimeSlots() {
    const unavailableSlots = ['10:00 AM', '02:30 PM']; // Example disabled times
    const startHour = 9; // 9 AM
    const endHour = 18; // 6 PM

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let min of ['00', '30']) {
        let formattedTime = `${hour % 12 || 12}:${min} ${hour >= 12 ? 'PM' : 'AM'}`;
        this.timeSlots.push({
          time: formattedTime,
          disabled: unavailableSlots.includes(formattedTime)
        });
      }
    }
  }

  toggleSelection(slot: TimeSlot) {
    if (slot.disabled) return;

    const index = this.selectedSlots.indexOf(slot.time);
    if (index >= 0) {
      this.selectedSlots.splice(index, 1);
    } else {
      this.selectedSlots.push(slot.time);
    }
  }

  isSelected(slot: TimeSlot): boolean {
    return this.selectedSlots.includes(slot.time);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close(this.selectedSlots);
  }
}
