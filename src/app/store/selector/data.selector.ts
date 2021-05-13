import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../domain/model/app-state';
import {DataState} from '../../domain/model/data-state';

export const getDataState = createFeatureSelector<AppState, DataState>('data')

export const getLoot = createSelector(
  getDataState,
  (s) => s.loot
);

export const lootDataLoaded = createSelector(
  getDataState,
  (s) => s.lootLoaded
);
