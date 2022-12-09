import $ from 'jquery';
import Swiper from '../node_modules/swiper/js/swiper.min';
import FiveM from '../node_modules/fivem-server-api';


class MainApplication {
    constructor() {
        this.initMainNav();
        this.initFeatureSliders();
        this.initPlayerCounter();

        // const server = new FiveM.Server('85.215.181.200:30120');
        //
        // server.getServerStatus().then(req => {
        //     if (req.online === true) {
        //         server.getPlayers().then(req => {
        //             res.status(200).send({
        //                 online: true,
        //                 players: req
        //             });
        //         });
        //     } else {
        //         res.status(200).send({
        //             online: false,
        //             players: 0
        //         });
        //     }
        // });
    }

    initPlayerCounter() {
        const url = 'http://85.214.40.194:8080/serverstats';

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
    }

    initMainNav() {
        const $mainNav = $('.main-nav');
        const $mainNavItems = $('.main-nav ul li');
        let time = Date.now();

        var prevScrollpos = window.pageYOffset;

        // window.onscroll = function() {
        //     var currentScrollPos = window.pageYOffset;
        //     if (prevScrollpos > currentScrollPos) {
        //         $mainNav.removeClass('hidden');
        //     } else {
        //         $mainNav.addClass('hidden');
        //     }
        //     prevScrollpos = currentScrollPos;
        // }

        $mainNavItems.on('click', (e) => {
            e.preventDefault();
            const identifier = e.target.href.split('#')[1];
            const $element = $(e.target);
            const target = document.getElementById(identifier);
            if (target === null) {
                console.log('No Section with the specified identifier found');
                return;
            }
            $mainNavItems.find('a').removeClass('active');
            target.scrollIntoView({behavior: 'smooth', block: 'start'});
        });

        let observer;

        let options = {
            root: null, rootMargin: '0px', threshold: 0.75
        };

        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let identifier = entry.target.id;
                    $mainNavItems.find('a').removeClass('active');
                    $mainNavItems.find('a[href$="' + identifier + '"]').addClass('active');
                }
            });
        }, options);
        observer.observe(document.querySelector('header'));
        const sections = document.querySelectorAll('section');
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].id === '') {
                continue;
            }
            observer.observe(sections[i]);
        }
    }

    initFeatureSliders() {

        const featureSlider = new Swiper($('[data-feature-slider]'), {
            speed: 750, slidesPerView: 1, spaceBetween: 0, effect: 'fade', allowTouchMove: false, autoplay: {
                delay: 5000
            }

        });

        featureSlider.on('slideChange', function () {
            const index = featureSlider.activeIndex;
            thumbnailList.find('li').removeClass('active');
            thumbnailList.find('li').eq(index).addClass('active');
        });

        const thumbnailList = $('[data-feature-slider-thumbnail-list]');

        thumbnailList.on('click', (event) => {
            const item = $(event.target).closest('li');
            const index = item.index();
            featureSlider.slideTo(index);
            thumbnailList.find('li').removeClass('active');
            item.addClass('active');
        });
    }
}

new MainApplication();

