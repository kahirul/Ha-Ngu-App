import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ItemService} from './item.service';
import {FeedComponent} from './feed.component';
import {AboutComponent} from './about.component';

@Component({
    selector: 'hangu',
    template: `
      <div class='container-fluid'>
        <nav class='navbar navbar-light'>
          <a class='navbar-brand' [routerLink]='["Feed"]'>Hacker News</a>
          <ul class="nav navbar-nav">
            <li class='nav-item'>
              <a class='nav-link' [routerLink]='["Feed"]'>Feed</a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' [routerLink]='["About"]'>About</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class='container-fluid'>
        <router-outlet></router-outlet>
      </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ItemService]
})

@RouteConfig([
  { path: '/', name: 'Feed', component: FeedComponent, useAsDefault: true },
  { path: '/about', name: 'About', component: AboutComponent }
])

export class AppComponent { }
