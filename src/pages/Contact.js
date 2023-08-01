import "../css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="justify-content-center">
      <h2>Get in Touch</h2>
      <form className="contactForm">
        <div className="form-group row">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="subject" className="col-sm-2 col-form-label">
            Subject
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="message" className="col-sm-2 col-form-label">
            Message
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="message"
              placeholder="Message"
              rows="10"
              cols="50"
              required
            ></textarea>
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-light">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
