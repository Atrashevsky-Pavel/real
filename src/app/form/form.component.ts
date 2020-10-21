import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() changeInside: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      text: new FormControl('', [
        Validators.required
      ])
    });
  }
  submit(): void {
    const item = this.form.value;
    this.changeInside.emit(item);
    this.form.reset();
  }
  close(): void {
    this.closeModal.emit(false);
  }
}
