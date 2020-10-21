import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import { map, mergeMap, catchError} from 'rxjs/operators';
import {GetDataService} from '../services/get-data.service';
import {Store} from '@ngrx/store';
import {AppState} from '../app.component';
import {StorageService} from '../services/storage.service';

@Injectable()

export class DataEffect {
DataLoad$ = createEffect(() =>
this.actions$
  .pipe(
    ofType('[Data] Load Data'),
    mergeMap(
      () => this.getDataService.getData()
        .pipe(
          map(() => ({ type: '[Data] Load Data Success', value: this.getStorage.getStorage()})),
          catchError(() => of({ type: '[Data] Load Data Failure'}))
      )
)));

DataAdd$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType('[Data] Add Data'),
        mergeMap(
          data => this.getDataService.getData()
              .pipe(
              map(() => ({ type: '[Data] Add Data Success', value: this.getStorage.addItemStorage(data)})),
              catchError(() => of({ type: '[Data] Add Data Failure'}))
      )
)));

DataRemove$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType('[Data] Remove Data'),
        mergeMap(
          data => this.getDataService.getData()
            .pipe(
              map(() => ({ type: '[Data] Remove Data Success', value: this.getStorage.removeItemStorage(data)})),
              catchError(() => of({ type: '[Data] Remove Data Failure'}))
    )
)));

DataChange = createEffect(() =>
  this.actions$
    .pipe(
      ofType('[Data] Change Data'),
      mergeMap(
        data => this.getDataService.getData()
          .pipe(
            map(() => ({type: '[Data] Change Data Success', value: this.getStorage.changeItemStorage(data)})),
            catchError(() => of({type: '[Data] Change Data Failure'}))
          )
)));
  constructor(private actions$: Actions,
              private getDataService: GetDataService,
              private store: Store<AppState>,
              private getStorage: StorageService) {}
}
