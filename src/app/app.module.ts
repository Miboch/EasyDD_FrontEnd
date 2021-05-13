import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {components, routedComponents} from './components';
import {AppComponent} from './components/app/app.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {dataReducer} from './store/reducer';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    ...components,
    ...routedComponents,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({data: dataReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
