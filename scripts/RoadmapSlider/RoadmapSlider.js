//TODO: Jquery ausbauen
import $ from 'jquery';
import Swiper from '../../node_modules/swiper/js/swiper.min';

export default class RoadmapSlider {
    constructor() {
        const $roadmapSlider = $('[data-roadmap-slider]');
        const roadmapSlider = new Swiper($roadmapSlider, {
            speed: 750,
            slidesPerView: 1,
            spaceBetween: 60,
            autoplay: {
                delay: 5000
            },
            navigation: {
                nextEl: $roadmapSlider.find('.next'),
                prevEl: $roadmapSlider.find('.previous')
            }
        });
    }
}