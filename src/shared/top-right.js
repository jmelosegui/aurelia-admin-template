import {Behavior} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class TopRight {
    static metadata(){ return Behavior.withProperty('router'); }
    static inject(){ return [EventAggregator]; }

    constructor(eventAggregator){
        this.eventAggregator = eventAggregator;
    }

    get isFullScreenEnabled(){
        return window.innerHeight == screen.height;
    }

    launchFullscreen(){

        if (!this.isFullScreenEnabled) {

            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }

        } else {

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }

    toggleMenu(){
        this.eventAggregator.publish('toggleNavBar', {});
    }
}