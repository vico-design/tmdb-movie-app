import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-component">
      <div className="personal-contact-projects">
        <div className="contact-container">
          <p>Contact me</p>
          <div className="social-network-container">
            <a href="https://github.com/vico-design" target="_blank">
              <i className="ri-github-fill" />
            </a>
            <a
              href="https://www.linkedin.com/in/maria-victoria-petrone/"
              target="_blank"
            >
              <i className="ri-linkedin-box-fill" />
            </a>

            <a
              href="https://www.xing.com/profile/MariaVictoria_Petrone/cv"
              target="_blank"
            >
              <i className="ri-xing-fill" />
            </a>
          </div>
        </div>
        <hr className="solid" />
        <div className="projects-container">
          <p>Personal Projects</p>
          <div className="projects">
            <a
              href="https://github.com/vico-design/spoonacular-recipes"
              target="_blank"
            >
              New Recipes
            </a>
            <a
              href="https://github.com/vico-design/SpeedTypingGame-React"
              target="_blank"
            >
              Typing Game
            </a>
            <a
              href="https://vico-design.github.io/CapstoneProject-React/"
              target="_blank"
            >
              Pic Some
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2021 Victoria Petrone. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
