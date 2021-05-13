import {LootChanceModel} from './loot-chance.model';

export interface LootTableModel {
  id: number;
  name: string;
  note: string;
  lootChances: LootChanceModel[];
}
