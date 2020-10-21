import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Item} from '../Store/data.reducer';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemInside: Item;
  @Output() idDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() changeInside: EventEmitter<number> = new EventEmitter<number>();
  form: FormGroup;
  formShow = false;
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.itemInside.title, Validators.required),
      text: new FormControl(this.itemInside.text, Validators.required)
    });
  }
  submit(): void {
    const item = this.form.value;
    item.id = this.itemInside.id;
    this.changeInside.emit(item);
    this.formShow = false;
  }
  delete(id: number): void {
    this.idDelete.emit(id);
  }
  formSwitch(): void {
    this.formShow = !this.formShow;
  }
}
