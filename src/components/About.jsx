import React from "react";
import { useSelector } from "react-redux";
import pic from "../../public/DBGA_logo.png";

const About = () => {
  const { language, texts } = useSelector((state) => state.rootReducer);
  
  // Filter text for the current language
  const currentText = texts.find((text) => text.language === language);

  if (!currentText) {
    return <div>...Loading</div>;
  }

  return (
    <div className="profile">
      <div className="profpic">
        <img src={pic} alt="Profile Picture of David Gonzalez" />
      </div>
      <div className="data">
        <h1>David Gonzalez</h1>
        <p className="icons">
          <a
            href="https://www.linkedin.com/in/david-gonzalez-alanis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/iisblitz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a
            href="https://wa.me/525514515527"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp
          </a>
        </p>

        <p>{currentText.ci}</p>
        <p>{currentText.subtitle}</p>
        <p>{currentText.description}</p>
        <p>{language === "ESP" ? "Mi historia:" : "Short bio:"}</p>
        <div>
          {currentText.bio.split("{/n}").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
