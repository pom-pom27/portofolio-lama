import AwardImg from "../../../img/award.png";
import "./about.scss";
interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card-wrapper">
          <div className="about-card card-bg"></div>
          <div className="about-card">
            <img
              src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="about-card-img about-card"
            />
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="about-me">
          <h1 className="about-title">About Me</h1>
          <h2 className="about-subtitle">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </h2>
          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure
            nisi quo perferendis ducimus, magnam voluptatibus quisquam adipisci,
            magni voluptates doloribus ratione, architecto eaque necessitatibus.
            Fugit quia cum veniam porro! architecto eaque necessitatibus. Fugit
            quia cum veniam porro! architecto eaque necessitatibus. Fugit quia
            cum veniam porro!
          </p>
          <div className="about-awards">
            <img src={AwardImg} alt="award" className="award-img" />
            <div className="award-text">
              <h3 className="award-title">International Design Award 2022</h3>
              <p className="award-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                accusantium architecto eaque necessitatibus. Fugit quia cum
                veniam porro!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
