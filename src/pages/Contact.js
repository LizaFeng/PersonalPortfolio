const Contact = () => {
  return (
    <div>
      <form>
        <div className="form-row">
          <label htmlFor="firstName"> First Name: </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter your first name"
          />
          <label htmlFor="lastName"> Last Name: </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter your last name"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Your Email"
          />
          <label htmlFor="subject">Subject: </label>
          <input
            type="subject"
            className="form-control"
            id="subject"
            placeholder="Enter Topic of Discussion"
          />
        </div>
        <div>
          <label htmlFor="messageBox">Message: </label>
          <textarea
            id="messageBox"
            name="messageBox"
            rows="10"
            cols="50"
          ></textarea>
        </div>
        <div>
          <button type="button" className="btn btn-light">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
