import { Injectable } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';

declare var ga: any; // <-- Here we declare GA variable


@Injectable({
    providedIn: 'root'
})
export class GoogleAnalyticsService {

    constructor(public router: Router) {
        if (!environment.production) { // <-- If you want to enable GA only in production
            return;
        }

        router.events.subscribe(event => {

            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.url);
                ga('send', 'pageview');
            }
        });
    }

    openPortfModal(port: string) {
        if (!environment.production) {
            return;
        }

        ga('send', 'event', {
            eventCategory: 'OpenPortfolio',
            eventAction: port
        });
    }


    goToUrlPort(port){
        if (!environment.production) {
            return;
        }

        ga('send', 'event', {
            eventCategory: 'GoToPortfolio',
            eventAction: port
        });
    }
}
