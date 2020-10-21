import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import {AddData, ChangeData, LoadData, RemoveData} from './Store/data.actions';
import {Item, ItemState} from './Store/data.reducer';

export interface AppState {
  readonly data: ItemState;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  formShow = false;
  data$: Observable<Array<Item>>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  constructor(private store: Store<AppState>) {
  this.data$ = store.select(value => value.data.items);
  this.loading$ = store.select(value => value.data.loading);
  this.error$ = store.select(value => value.data.error);
  }
  ngOnInit(): void {
    this.store.dispatch(LoadData());
  }
  add(value): void {
    this.store.dispatch(AddData(value));
  }
  formSwitch(): void {
    this.formShow = !this.formShow;
  }
}
