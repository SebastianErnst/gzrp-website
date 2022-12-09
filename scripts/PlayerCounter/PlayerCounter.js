export default class PlayerCounter {
    constructor() {
        const url = 'http://85.214.40.194:8080/serverstats';
        const $onlineCounter = document.querySelector('[data-online-counter-number]');
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                $onlineCounter.textContent = data.players;
                $onlineCounter.parentNode.classList.add('is-active');
            })
    }
}