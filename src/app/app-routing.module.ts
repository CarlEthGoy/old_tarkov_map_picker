import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawerComponent } from './drawer/drawer.component';
import { RandomMapComponent } from './random-map/random-map.component';

const routes: Routes = [
  { path: 'drawer', component: DrawerComponent},
  { path: '**', component: RandomMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
