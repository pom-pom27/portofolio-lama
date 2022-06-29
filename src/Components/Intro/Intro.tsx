import PhotoIntro from "../../../img/address.png";

import "./intro.scss";
import MouseIcon from "./MouseIcon";

interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-opening">
          <h2 className="intro-greeting">Hello, My name is</h2>
          <h1 className="intro-name">Selja</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Front-End Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Photographer</div>
              <div className="intro-title-item">Writer</div>
              <div className="intro-title-item">Content Creator</div>
            </div>
          </div>
          <p className="intro-description">
            I design and develop services for costumer of all sizes,
            specializing in creating stylish, modern website, web service and
            online stores
          </p>
        </div>
      </div>
      <MouseIcon />
      <div className="intro-right">
        <div className="intro-img-bg"></div>
        <img src={PhotoIntro} alt="me" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
