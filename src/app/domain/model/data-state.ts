import {LootModel} from './loot.model';

export interface DataState {
  loot: LootModel[],
  lootLoaded: boolean
}
