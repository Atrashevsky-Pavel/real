import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Item} from '../Store/data.reducer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  form: FormGroup;
  @Input() formState: Item;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() changeInside: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl((this.formState) ? this.formState.title : '', [
        Validators.required, Validators.minLength(3)
      ]),
      text: new FormControl((this.formState) ? this.formState.text : '', [
        Validators.required, Validators.minLength(6)
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
