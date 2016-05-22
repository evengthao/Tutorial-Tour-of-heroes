import {Component, OnInit} from '@angular/core';
import {RouteSegment} from '@angular/router';

import {HeroService} from "../hero.service";
import {Hero} from "../hero";


@Component({
  moduleId: module.id,
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css']
})
export class DetailComponent implements OnInit {

  hero:Hero;

  constructor(private heroService:HeroService, private routeSegment:RouteSegment) {
  }

  ngOnInit() {
    let id = +this.routeSegment.getParam('id');

    this.heroService.getHero(id).then(
      hero => this.hero = hero
    );
  }

  goBack() {
    window.history.back();
  }
}
