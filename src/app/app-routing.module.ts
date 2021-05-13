import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent, LootComponent} from './components';
import {LootResolver} from './resolvers';

const routes: Routes = [
  {
    path: '',
    resolve: {
      loot: LootResolver
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: DefaultComponent
      },
      {
        path: 'loot',
        component: LootComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
