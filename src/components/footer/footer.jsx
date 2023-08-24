// para utilizar o componente crie o import na pagina que deseja
// coloque o nome da pessoa entre  <Footer>NomePessoas</Footer>
// passe a informação dentro da tag Footer - LINK
// <Footer link={}>B4g4rini</Footer>
import SocialLinks from "../socialLinks/socialLinks";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart" /> por{" "}
        <a href={link} target="_blank">
          {children}
        </a>
      </p>
        <SocialLinks icon={"logo-github"} href={"https://github.com/B4g4rini"} />
        <SocialLinks icon={"logo-twitch"} href={"https://www.twitch.tv/dark_ghost2007"} />
        <SocialLinks icon={"logo-instagram"} href={"https://www.instagram.com/pedro_bagarini/"} />



    </footer>
  );
};

export default Footer;
