import {createAction, props} from '@ngrx/store';
import {Item} from './data.reducer';

export const LoadData = createAction('[Data] Load Data');
export const LoadDataSuccess = createAction('[Data] Load Data Success', props<{value: Item[]}>());
export const LoadDataFailure = createAction('[Data] Load Data Failure');

export const AddData = createAction('[Data] Add Data', props<{value: Item}>());
export const AddDataSuccess = createAction('[Data] Add Data Success', props<{value: Item[]}>());
export const AddDataFailure = createAction('[Data] Add Data Failure');

export const RemoveData = createAction('[Data] Remove Data', props<{id: number}>());
export const RemoveDataSuccess = createAction('[Data] Remove Data Success', props<{value: Item[]}>());
export const RemoveDataFailure = createAction('[Data] Remove Data Failure');

export const ChangeData = createAction('[Data] Change Data', props<{value: Item}>());
export const ChangeDataSuccess = createAction('[Data] Change Data Success', props<{value: Item[]}>());
export const ChangeDataFailure = createAction('[Data] Change Data Failure');
