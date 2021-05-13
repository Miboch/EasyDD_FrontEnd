import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {LootModel} from '../domain/model/loot.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../domain/model/app-state';
import {getLoot, lootDataLoaded} from '../store/selector';
import {filter, switchMap, take} from 'rxjs/operators';
import {LootService} from '../services/loot.service';
import {loadLootFromApi} from '../store/action';
import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class LootResolver implements Resolve<LootModel[]> {
  constructor(private lootService: LootService, private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LootModel[]> | Promise<LootModel[]> | LootModel[] {
    this.lootService.all().subscribe(loot => {
      this.store.dispatch(loadLootFromApi({payload: loot}))
    });

    return this.store.select(lootDataLoaded).pipe(filter(loadState => loadState), switchMap(bool => {
        return this.store.select(getLoot)
      }),
      take(1)
    );
  }

}
