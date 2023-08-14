import "../css/Contact.css";

const Contact = () => {
  function submitForm() {
    alert(
      "Greetings! The contact page is currently undergoing development, so emails won't be dispatched. However, don't hesitate to connect with me on LinkedIn!"
    );
  }
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
            ></textarea>
          </div>
        </div>
        <div>
          <button onClick={submitForm} type="button" className="btn btn-light">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
