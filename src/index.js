import './style.css';
import styles from './style.css';
import headerComponent from './header.js';
import footerComponent from './footer.js';
import homeComponent from './home.js';
import menuComponent from './menu.js';
import contactComponent from './contact.js';


function component() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');

    mainContent.appendChild(homeComponent())

    content.appendChild(headerComponent());
    content.appendChild(mainContent);
    content.appendChild(footerComponent());

    const navlinks = content.querySelectorAll('.navlink');

    navlinks.forEach(navlink => {
        navlink.addEventListener('click', function() {
            if(navlink.textContent == 'Home') {
                content.querySelector('#main-content').firstChild.remove();
                mainContent.appendChild(homeComponent());
            } else if(navlink.textContent == 'Menu') {
                content.querySelector('#main-content').firstChild.remove();
                mainContent.appendChild(menuComponent());
            } else if(navlink.textContent == 'Contact') {
                content.querySelector('#main-content').firstChild.remove();
                mainContent.appendChild(contactComponent());
            }

            
            let current = document.getElementsByClassName(styles["active"]);
            current[0].classList.remove(styles['active'])
            this.classList.add(styles['active'])
        });
    });

    return content;
}

window.onload = function() {
    document.body.appendChild(component());
}

