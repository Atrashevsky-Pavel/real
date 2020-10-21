import {Component, Input} from '@angular/core';
import {Item} from '../Store/data.reducer';
import {Store} from '@ngrx/store';
import {AppState} from '../app.component';
import {ChangeData, RemoveData} from '../Store/data.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent {
  @Input() itemInside: Item;
  formShow = false;
  constructor(private store: Store<AppState>) {}
  change(value): void {
    value.id = this.itemInside.id;
    this.store.dispatch(ChangeData(value));
    this.formShow = false;
  }
  delete(id: number): void {
    this.store.dispatch(RemoveData({id}));
  }
  formSwitch(): void {
    this.formShow = !this.formShow;
  }
}
