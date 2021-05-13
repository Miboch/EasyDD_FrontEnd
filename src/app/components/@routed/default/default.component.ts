import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../../../domain/model/app-state';
import {getLoot} from '../../../store/selector';

@Component({
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent implements OnInit {
  constructor(private http: HttpClient, private store: Store<AppState>) {

  }

  ngOnInit(): void {
  }

}
