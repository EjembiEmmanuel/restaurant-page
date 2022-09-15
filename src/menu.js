import styles from './menu.css';
import FoodImg1 from './assets/img/variety1.png';
import FoodImg2 from './assets/img/variety2.png';
import FoodImg3 from './assets/img/variety3.png';
import FoodImg4 from './assets/img/variety4.png';
import FoodImg5 from './assets/img/variety5.png';
import FoodImg6 from './assets/img/variety6.png';
import FoodImg7 from './assets/img/variety7.png';
import FoodImg8 from './assets/img/variety8.png';


export default function menuComponent() {
    const main = document.createElement('div');
    main.classList.add(styles['main']);

    const card1 = document.createElement('div');
    const card2 = document.createElement('div');
    const card3 = document.createElement('div');
    const card4 = document.createElement('div');
    const card5 = document.createElement('div');
    const card6 = document.createElement('div');
    const card7 = document.createElement('div');
    const card8 = document.createElement('div');

    card1.classList.add(styles['card']);
    card2.classList.add(styles['card']);
    card3.classList.add(styles['card']);
    card4.classList.add(styles['card']);
    card5.classList.add(styles['card']);
    card6.classList.add(styles['card']);
    card7.classList.add(styles['card']);
    card8.classList.add(styles['card']);

    const foodImg1 = new Image();
    const foodImg2 = new Image();
    const foodImg3 = new Image();
    const foodImg4 = new Image();
    const foodImg5 = new Image();
    const foodImg6 = new Image();
    const foodImg7 = new Image();
    const foodImg8 = new Image();

    foodImg1.src = FoodImg1;
    foodImg2.src = FoodImg2;
    foodImg3.src = FoodImg3;
    foodImg4.src = FoodImg4;
    foodImg5.src = FoodImg5;
    foodImg6.src = FoodImg6;
    foodImg7.src = FoodImg7;
    foodImg8.src = FoodImg8;

    const cardTitle1 = document.createElement('h3');
    const cardTitle2 = document.createElement('h3');
    const cardTitle3 = document.createElement('h3');
    const cardTitle4 = document.createElement('h3');
    const cardTitle5 = document.createElement('h3');
    const cardTitle6 = document.createElement('h3');
    const cardTitle7 = document.createElement('h3');
    const cardTitle8 = document.createElement('h3');

    cardTitle1.classList.add(styles['card-title']);
    cardTitle2.classList.add(styles['card-title']);
    cardTitle3.classList.add(styles['card-title']);
    cardTitle4.classList.add(styles['card-title']);
    cardTitle5.classList.add(styles['card-title']);
    cardTitle6.classList.add(styles['card-title']);
    cardTitle7.classList.add(styles['card-title']);
    cardTitle8.classList.add(styles['card-title']);

    cardTitle1.textContent = 'Variety 1';
    cardTitle2.textContent = 'Variety 2';
    cardTitle3.textContent = 'Variety 3';
    cardTitle4.textContent = 'Variety 4';
    cardTitle5.textContent = 'Variety 5';
    cardTitle6.textContent = 'Variety 6';
    cardTitle7.textContent = 'Variety 7';
    cardTitle8.textContent = 'Variety 8';

    const cardText1 = document.createElement('p');
    const cardText2 = document.createElement('p');
    const cardText3 = document.createElement('p');
    const cardText4 = document.createElement('p');
    const cardText5 = document.createElement('p');
    const cardText6 = document.createElement('p');
    const cardText7 = document.createElement('p');
    const cardText8 = document.createElement('p');

    cardText1.classList.add(styles['card-text']);
    cardText2.classList.add(styles['card-text']);
    cardText3.classList.add(styles['card-text']);
    cardText4.classList.add(styles['card-text']);
    cardText5.classList.add(styles['card-text']);
    cardText6.classList.add(styles['card-text']);
    cardText7.classList.add(styles['card-text']);
    cardText8.classList.add(styles['card-text']);

    cardText1.textContent = 'Lorem ipsum dolor ipsume lorem dolor lorem';
    cardText2.textContent = 'Lorem ipsum dolor ipsume lorem dolor lorem';
    cardText3.textContent = 'Lorem ipsum dolor ipsume lorem dolor lorem';
    cardText4.textContent = 'Lorem ipsum dolor ipsume lorem dolor lorem';
    cardText5.textContent = 'Lorem ipsum dolor ipsume lorem dolor lorem';
    cardText6.textContent = 'Lorem ipsum dolor ipsume lorem dolor lorem';
    cardText7.textContent = 'Lorem ipsum dolor ipsume lorem dolor lorem';
    cardText8.textContent = 'Lorem ipsum dolor ipsume lorem dolor lorem';

    card1.appendChild(foodImg1);
    card2.appendChild(foodImg2);
    card3.appendChild(foodImg3);
    card4.appendChild(foodImg4);
    card5.appendChild(foodImg5);
    card6.appendChild(foodImg6);
    card7.appendChild(foodImg7);
    card8.appendChild(foodImg8);

    card1.appendChild(cardTitle1);
    card2.appendChild(cardTitle2);
    card3.appendChild(cardTitle3);
    card4.appendChild(cardTitle4);
    card5.appendChild(cardTitle5);
    card6.appendChild(cardTitle6);
    card7.appendChild(cardTitle7);
    card8.appendChild(cardTitle8);

    card1.appendChild(cardText1);
    card2.appendChild(cardText2);
    card3.appendChild(cardText3);
    card4.appendChild(cardText4);
    card5.appendChild(cardText5);
    card6.appendChild(cardText6);
    card7.appendChild(cardText7);
    card8.appendChild(cardText8);

    main.appendChild(card1);
    main.appendChild(card2);
    main.appendChild(card3);
    main.appendChild(card4);
    main.appendChild(card5);
    main.appendChild(card6);
    main.appendChild(card7);
    main.appendChild(card8);

    return main
}