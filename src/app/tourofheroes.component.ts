import {Component} from '@angular/core';
import {Routes, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {DetailComponent} from "./detail/detail.component";
import {HeroService} from "./hero.service";

@Component({
  moduleId: module.id,
  selector: 'tourofheroes-app',
  templateUrl: 'tourofheroes.component.html',
  styleUrls: ['tourofheroes.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
})

@Routes([
  {
    path: '/dashboard',
    component: DashboardComponent
  },
  {
    path: '/heroes',
    component: HeroesComponent
  },
  {
    path: '/detail/:id',
    component: DetailComponent
  }
])
export class TourofheroesAppComponent {
  title = 'Tour of Heroes';
}
