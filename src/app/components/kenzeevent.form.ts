import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {KenzeEvent} from '../services/bff.service';

@Component({
  selector: 'app-kenzeevent-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './kenzeevent.form.html',
  styles: [`
    .event-form {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #333;
    }

    .form-control {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      box-sizing: border-box;
    }

    .form-control:focus {
      outline: none;
      border-color: #007bff;
    }

    .error {
      color: #dc3545;
      font-size: 12px;
      margin-top: 5px;
    }

    .submit-btn {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .submit-btn:hover:not(:disabled) {
      background-color: #0056b3;
    }

    .submit-btn:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
    }
  `]
})
export class KenzeEventFormComponent {
  @Input() event: KenzeEvent | undefined;
  @Input() disabled: boolean = false;
  @Output() eventSubmitted = new EventEmitter<KenzeEvent>();

  eventForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required]
    });
  }


  onSubmit(): void {
    if (this.eventForm.valid) {
      const eventModel: KenzeEvent = {
        id: undefined,
        eventname: this.eventForm.value.name,
        date: new Date(this.eventForm.value.date)
      };

      this.eventSubmitted.emit(eventModel);
      console.log('Event submitted:', eventModel);

      // Optionally reset the form after submission
      // this.eventForm.reset();
    }
  }
}
