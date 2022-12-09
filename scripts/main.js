import MainNav from "./MainNav/MainNav";
import FeatureSlider from "./FeatureSlider/FeatureSlider";
import PlayerCounter from "./PlayerCounter/PlayerCounter";

class MainApplication {
    constructor() {
        this.initMainNav();
        this.initFeatureSliders();
        this.initPlayerCounter();
    }

    initPlayerCounter() {
        const $playerCounters = document.querySelectorAll('[data-online-counter-number]');

        $playerCounters.forEach(() => {
            new PlayerCounter();
        });

    }

    initMainNav() {
        const $mainNav = document.querySelectorAll('.main-nav');

        $mainNav.forEach(() => {
            new MainNav();
        });
    }

    initFeatureSliders() {
        const $featureSliders = document.querySelectorAll('[data-feature-slider]');

        $featureSliders.forEach(() => {
            new FeatureSlider();
        });
    }
}

new MainApplication();

