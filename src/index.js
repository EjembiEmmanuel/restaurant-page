import './style.css';
import ChefImage from './assets/img/chef.jpg';
import GitHubIcon from './assets/icons/github.svg';


function component() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    // Header
    const header = document.createElement('div');
    header.setAttribute('class', 'header')

    const title = document.createElement('div');
    title.setAttribute('class', 'title');

    const titleText = document.createElement('h1');
    titleText.textContent = "Oche's Fast Food";
    title.appendChild(titleText);

    const navbar = document.createElement('div');
    navbar.setAttribute('class', 'navbar');

    const navlinks = document.createElement('ul');

    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');

    const homeLink = document.createElement('a');
    homeLink.setAttribute('href', '#');
    const menuLink = document.createElement('a');
    menuLink.setAttribute('href', '#');
    const contactLink = document.createElement('a');
    contactLink.setAttribute('href', '#');

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
    // Header

    // Main
    const main = document.createElement('div');
    main.setAttribute('class', 'main');

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
    // Main

    // Footer
    const footer = document.createElement('div')
    footer.setAttribute('class', 'footer');

    const footerText = document.createElement('p');
    const footerLink = document.createElement('a');
    const footerIcon = new Image();

    footerText.textContent = 'Copyright \u00A9 2022 ejembiemmanuel';
    footerLink.setAttribute('href', '#');
    footerIcon.src = GitHubIcon;

    footerLink.appendChild(footerIcon);

    footer.appendChild(footerText);
    footer.appendChild(footerLink);
    // Footer

    header.appendChild(title);
    header.appendChild(navbar);

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    return content;
}

document.body.appendChild(component());