import {DataState} from '../../domain/model/data-state';
import {createReducer, on} from '@ngrx/store';
import {loadLootFromApi, setLoot} from '../action';

export * from './data.reducer';

export const initialDataState: DataState = {
  loot: [],
  lootLoaded: false
};

export const dataReducer = createReducer(
  initialDataState,
  on(setLoot, (state, {payload}) => ({...state, loot: [...payload]})),
  on(loadLootFromApi, (state, {payload}) => ({...state, loot: payload, lootLoaded: true}))
);
