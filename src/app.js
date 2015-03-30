import {Router} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import bootstrap from 'bootstrap';

export class App {
    static inject() { return [Router, EventAggregator]; }
    constructor(router, eventAggregator) {
        this.isNavBarCollapsed = false;
        this.eventAggregator = eventAggregator;
        this.router = router;
        this.router.configure(config => {
            config.title = 'AUdmin Template';
            config.mapUnknownRoutes(instruction => {
                //check instruction.fragment
                let moduleId = `./modules/${instruction.fragment}`;

                //set instruction.config.moduleId
                instruction.config.moduleId = moduleId;
            });
        });
    }

    activate(params, queryString, routeConfig){
        this.eventAggregator.subscribe('toggleNavBar', payload => {
            this.isNavBarCollapsed = !this.isNavBarCollapsed;
        });
    }

}