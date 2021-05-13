import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../domain/model/app-state';
import {LootModel} from '../../../domain/model/loot.model';
import {Observable, Subscription} from 'rxjs';
import {getLoot} from '../../../store/selector';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './loot.component.html',
  styleUrls: ['./loot.component.scss']
})

export class LootComponent implements OnInit, OnDestroy {
  loot$!: Observable<LootModel[]>

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.loot$ = this.store.select(getLoot).pipe(
      map(loot => [...loot].sort((a, b) => {
          return a.name > b.name ? 1 : a.name == b.name ? 0 : -1
        })
      ));
  }

  ngOnDestroy() {
  }

  addLoot() {

  }

}
