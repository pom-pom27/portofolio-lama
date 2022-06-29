import Address from "../../../img/address.png";
import Email from "../../../img/email.png";
import Phone from "../../../img/phone.png";
import "./contact.scss";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="contact">
      <div className="green-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-list">
            <div className="contact-item phone">
              <img className="contact-icon" src={Phone} alt="" />
              <p>+62 895372466151</p>
            </div>
            <div className="contact-item email">
              <img className="contact-icon" src={Email} alt="" />
              <p>seljaworks@gmail.com</p>
            </div>
            <div className="contact-item address">
              <img className="contact-icon" src={Address} alt="" />
              <p>Bekasi, Indonesia</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="form-title">
            <span className="contact-bold">What's your story?</span> Get in
            touch. Always avaliable for freelancing if the right project come
            along me.
          </p>
          <form action="#" className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact-input"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="contact-input"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="contact-input"
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Message"
              className="ta"
            />
            <button className="button-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
