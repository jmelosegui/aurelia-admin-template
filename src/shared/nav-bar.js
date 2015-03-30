import {Behavior} from 'aurelia-framework';

export class NavBar {
    static metadata(){ return Behavior.withProperty('router'); }

    constructor(){

    }

    activate(params, queryString, routeConfig){
        alert(routeConfig);
    }
}