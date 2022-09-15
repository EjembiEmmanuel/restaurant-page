import styles from './home.css';
import ChefImage from './assets/img/chef.jpg';


export default function homeComponent() {
    const main = document.createElement('div');
    main.classList.add(styles['main']);

    const mainText1 = document.createElement('p');
    const mainText2 = document.createElement('p');
    const chefImage = new Image();
    const mainText3 = document.createElement('p');

    mainText1.textContent = 'Get your fill in minutes';
    mainText2.textContent = 'Serving you fast food 24/7';
    chefImage.src = ChefImage;
    mainText3.textContent = 'Order online or visit us!';

    main.appendChild(mainText1);
    main.appendChild(mainText2);
    main.appendChild(chefImage);
    main.appendChild(mainText3);

    return main
}
