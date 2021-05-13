import {LootModel} from './loot.model';
import {LootTableModel} from './loot-table.model';

export interface LootChanceModel {
  id: number;
  weightedOccurence: number;
  maxOccurence: number;
  lootId: number;
  loot?: LootModel,
  lootTableId: number;
  lootTable?: LootTableModel
}
