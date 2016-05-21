import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TourofheroesAppComponent } from '../app/tourofheroes.component';

beforeEachProviders(() => [TourofheroesAppComponent]);

describe('App: Tourofheroes', () => {
  it('should create the app',
      inject([TourofheroesAppComponent], (app: TourofheroesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'tourofheroes works!\'',
      inject([TourofheroesAppComponent], (app: TourofheroesAppComponent) => {
    expect(app.title).toEqual('tourofheroes works!');
  }));
});
