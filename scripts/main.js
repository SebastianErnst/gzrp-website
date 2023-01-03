import MainNav from "./MainNav/MainNav";
import FeatureSlider from "./FeatureSlider/FeatureSlider";
import RoadmapSlider from "./RoadmapSlider/RoadmapSlider";
import PlayerCounter from "./PlayerCounter/PlayerCounter";

class MainApplication {
    constructor() {
        this.initMainNav();
        this.initFeatureSliders();
        this.initRoadmapSlider();
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

    initRoadmapSlider() {
        const $featureSliders = document.querySelectorAll('[data-roadmap-slider]');

        $featureSliders.forEach(() => {
            new RoadmapSlider();
        });
    }
}

new MainApplication();

