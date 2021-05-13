import {LootChanceModel} from './loot-chance.model';

export interface LootModel {
  id: number;
  name: string;
  value: number;
  chances?: LootChanceModel[]
}
