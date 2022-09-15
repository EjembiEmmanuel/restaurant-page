import styles from './footer.css';
import GitHubIcon from './assets/icons/github.svg';


export default function footerComponent() {
    const footer = document.createElement('div')
    footer.classList.add(styles['footer']);

    const footerText = document.createElement('p');
    const footerLink = document.createElement('a');
    const footerIcon = new Image();

    footerText.textContent = 'Copyright \u00A9 2022 ejembiemmanuel';
    footerLink.setAttribute('href', 'https://github.com/EjembiEmmanuel');
    footerIcon.src = GitHubIcon;

    footerLink.appendChild(footerIcon);

    footer.appendChild(footerText);
    footer.appendChild(footerLink);

    return footer
}