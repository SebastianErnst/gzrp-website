export default class MainNav {
    constructor() {
        const $mainNavItems = document.querySelectorAll('.main-nav ul li a');

        $mainNavItems.forEach(($mainNavItem) => {
            $mainNavItem.addEventListener('click', (e) => {
                e.preventDefault();
                const identifier = e.target.href.split('#')[1];
                const $target = document.getElementById(identifier);
                if ($target === null) {
                    console.log('No Section with the specified identifier found');
                    return;
                }
                $mainNavItems.forEach((el) => {
                    el.classList.remove('active');
                });
                $mainNavItem.classList.add(('active'));
                $target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'}
                );
            });
        });

        let observer;
        let options = {
            root: null, rootMargin: '0px', threshold: 0.75
        };

        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const identifier = entry.target.id;
                    const $target = document.querySelector('a[href$="' + identifier + '"]');
                    $mainNavItems.forEach((el) => {
                        el.classList.remove('active');
                    });
                    $target.classList.add(('active'));
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
}