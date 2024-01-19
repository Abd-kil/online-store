import '../css/contact.css';
function Contact(){
    return(
        <div className="contact">
            <div className="contact-information">
                <div>
                    <h3>
                        <i className="bx bx-phone"/>
                        Call Us
                    </h3>
                    <p>
                        We're avaliable 24 hours aday, 7 days aweek!
                    </p>
                    <p>
                        +963999999999
                    </p>
                </div>
                <hr style={{width:'auto',margin:'auto'}}/>
                <div>
                    <h3>
                        <i className="bx bx-envelope"/>
                        Write To Us
                    </h3>
                    <p>
                        Fill out our form and we will contact with you in 24 hours
                    </p>
                    <p>
                        or send us an emails: <br/>
                        customer@execlusive.com <br/>
                        support@execlusive.com
                    </p>
                </div>
            </div>
            <div className="contact-message">
                <form>
                    <div className="information">
                        <input type="text" placeholder="Your Name" name="name"/>
                        <input type="email" placeholder="Your Email" name="email"/>
                        <input type="number" placeholder="Your Phone" name="phone"/>
                    </div>
                    <div className="message">
                        <textarea placeholder='Your Message' name='message' rows={10}>

                        </textarea>
                    </div>
                    <button className='red-button'>send message</button>
                </form>
            </div>
        </div>
    );
}
export default Contact;