import {Injectable} from '@angular/core';
import {LootModel} from '../domain/model/loot.model';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';

@Injectable({providedIn: 'root'})
export class LootService extends BaseService<LootModel> {

  constructor(protected http: HttpClient) {
    super('loot', http);
  }

}
