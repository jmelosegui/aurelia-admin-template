import {Behavior} from 'aurelia-framework';

export class TopBar {
    static metadata(){ return Behavior.withProperty('router'); }
}