import styles from './header.css';
import genericStyles from './style.css';


export default function headerComponent() {
    const header = document.createElement('div');
    header.classList.add(styles['header']);

    const title = document.createElement('div');
    title.classList.add(styles['title']);

    const titleText = document.createElement('h1');
    titleText.textContent = "Oche's Fast Food";
    title.appendChild(titleText);

    const navbar = document.createElement('div');
    navbar.classList.add(styles['navbar']);

    const navlinks = document.createElement('ul');

    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');

    const homeLink = document.createElement('a');
    homeLink.classList.add('navlink');
    homeLink.classList.add(genericStyles['active']);
    homeLink.setAttribute('href', '#');
    const menuLink = document.createElement('a');
    menuLink.classList.add('navlink');
    menuLink.setAttribute('href', '#');
    const contactLink = document.createElement('a');
    contactLink.setAttribute('href', '#');
    contactLink.classList.add('navlink');

    homeLink.textContent = 'Home';
    menuLink.textContent = 'Menu';
    contactLink.textContent = 'Contact';

    homeTab.appendChild(homeLink);
    menuTab.appendChild(menuLink);
    contactTab.appendChild(contactLink);

    navlinks.appendChild(homeTab);
    navlinks.appendChild(menuTab);
    navlinks.appendChild(contactTab);

    navbar.appendChild(navlinks);

    header.appendChild(title);
    header.appendChild(navbar);

    return header
}
