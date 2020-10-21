import { createReducer, on } from '@ngrx/store';
import {
  LoadData,
  LoadDataSuccess,
  LoadDataFailure,
  AddData,
  AddDataSuccess,
  RemoveData,
  RemoveDataSuccess,
  ChangeData, ChangeDataSuccess, AddDataFailure, RemoveDataFailure, ChangeDataFailure
} from './data.actions';

export interface Item {
  id: number;
  title: string;
  text: string;
}

export interface ItemState {
  items: Item[];
  loading: boolean;
  error: string;
}

export const initialState: ItemState = {
  items: [],
  loading: false,
  error: ''
};

const DataReducer = createReducer(
  initialState,
  on(LoadData, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(LoadDataSuccess, (state, data) => {
    return {
      ...state,
      items: data.value,
      loading: false
    };
  }),
  on(LoadDataFailure, state => {
    return {
      ...state,
      error: 'Data could not be received',
      loading: false
    };
  }),
  on(AddData, (state, data) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(AddDataSuccess, (state, data) => {
   return {
     ...state,
     items: data.value,
     loading: false
   };
  }),
  on(AddDataFailure, state => {
    return {
      ...state,
      error: 'data could not be added',
      loading: false
    };
  }),
  on(RemoveData, (state) => {
   return {
     ...state,
     loading: true
   };
  }),
  on(RemoveDataSuccess, (state, data) => {
    return {
      ...state,
      items: data.value,
      loading: false
    };
  }),
  on(RemoveDataFailure, state => {
    return {
      ...state,
      error: 'data could not be deleted',
      loading: false
    };
  }),
  on(ChangeData, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(ChangeDataSuccess, (state, data) => {
    return {
      ...state,
      items: data.value,
      loading: false
    };
  }),
  on(ChangeDataFailure, state => {
    return {
      ...state,
      error: 'data could not be changed',
      loading: false
    };
  })
  );
export function DataReducerMain(state, action): any {
  return DataReducer(state, action);
}
