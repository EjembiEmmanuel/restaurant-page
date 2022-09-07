import './style.css';
// import ChefImage from './chef.jpg';


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
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');

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

    // Add the image to our existing div.
    // const chefImage = new Image();
    // chefImage.src = ChefImage;

    // element.appendChild(chefImage);

    header.appendChild(title);
    header.appendChild(navbar);

    content.appendChild(header);

    return content;
}

document.body.appendChild(component());