import {getResource} from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const button = document.querySelector(trigger);

    button.addEventListener('click', function () {
        getResource('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(Error => {
                let errorMessage = document.createElement('div');
                errorMessage.textContent= `Ошибка подключения к серверу: ${Error}`;
                errorMessage.classList.add ('server_error');
                document.querySelector('.styles').appendChild(errorMessage);
            });
        
        this.remove();
    });

    function createCards (response){
        response.forEach( ({src,title,link}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
				</div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;