import {Behavior} from 'aurelia-framework';
import jquery from 'jquery'

export class TopRight {
    static metadata(){ return Behavior.withProperty('router'); }

    launchFullscreen(){

        if (!jquery(":root").hasClass("full-screen")) {

            jquery(":root").addClass("full-screen");

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

            jquery(":root").removeClass("full-screen");

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
        alert('Hello delegates');
    }
}