import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
    const formRef = useRef()
    const [done,setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            "service_wdhw36b",
            "template_otjs7k2",
            formRef.current,
            "otpkrEpJLjftLq6Kd"
        )
        .then(
            (result) => {
                console.log(result.text);
                setDone(true);
            },
            (error) => {
                console.log(error.text);
            }
      );
    }

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">


            <div className="c-left">
            <h1 className="c-title">Let's makea connection</h1>
            <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +61 413 108 841
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Email} alt="" />
                        cai.bryan.au@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Address} alt="" />
                        James Ave Brooklyn Park SA 5032
                    </div>
            </div>
            </div>


            <div className="c-right">
                <p className="c-desc">
                    <b>Have a chat with me! </b> Get in touch. Always available for
                    freelancing if the right project comes along. me.
                </p>

                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                    {done && "Thanks for message..."}
                </form>
            
            </div>

        </div>
    </div>
  );
};

export default Contact;