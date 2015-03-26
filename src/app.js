import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
    static inject() { return [Router]; }
    constructor(router) {
        this.router = router;
        this.router.configure(config => {
            config.title = 'Aurelia Admin Template';
        config.map([
            { route: ['','welcome'], moduleId: './welcome', nav: true, title:'Welcome' }
        ]);
    });
}
}