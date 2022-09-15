import styles from './contact.css';
import MapImage from './assets/img/map.png';
import PhoneIcon from './assets/icons/phone-solid.svg';
import AddressIcon from './assets/icons/location-dot-solid.svg';


export default function contactComponent() {
    const main = document.createElement('div');
    main.classList.add(styles['main']);

    const section1 = document.createElement('div');
    section1.classList.add(styles['section1']);
    const section2 = document.createElement('div');
    section2.classList.add(styles['section2']);

    const phoneIcon = new Image();
    phoneIcon.src = PhoneIcon;

    const addressIcon = new Image();
    addressIcon.src = AddressIcon;

    const mapImage = new Image();
    mapImage.src = MapImage;

    const phoneText = document.createElement('p');
    const addressText = document.createElement('p');

    phoneText.textContent = '+234-70-3292-4195';
    addressText.textContent = 'F33 Diamond Close, Army Post Housing Estate Scheme, Kurudu, Abuja, Nigeria';

    section1.appendChild(phoneIcon);
    section1.appendChild(phoneText);
    section2.appendChild(addressIcon);
    section2.appendChild(addressText);

    main.appendChild(section1);
    main.appendChild(section2);
    main.appendChild(mapImage);

    return main
}
