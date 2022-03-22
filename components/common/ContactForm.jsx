const ContactForm = ({ selectedReason, sendEmail }) => {
  return (
    <div className="contact">
      <form className="__contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          className="--option-input"
          name="selectedReason"
          defaultValue={selectedReason}
        />
        <input
          type="text"
          className="--name-input"
          name="name"
          placeholder="Your name"
        />
        <input
          type="email"
          className="--email-input"
          name="email"
          placeholder="Your email"
        />
        <textarea
          type="text"
          className="--message-input"
          name="message"
          placeholder="Write your message here"
        />
        <input type="submit" className="--send-message" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
