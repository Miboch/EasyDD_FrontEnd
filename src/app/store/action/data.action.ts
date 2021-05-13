import {createAction, props} from '@ngrx/store';
import {LootModel} from '../../domain/model/loot.model';

export enum DataActionType {
  SET_LOOT = "[DATA] set loot list",
  SET_LOOT_FROM_API = '[DATA] Get loot from API'
}

export const setLoot = createAction(
  DataActionType.SET_LOOT,
  props<{ payload: LootModel[] }>()
);

export const loadLootFromApi = createAction(
  DataActionType.SET_LOOT_FROM_API,
  props<{ payload: LootModel[] }>()
)
