import { useState } from "react";

import "./contacts.scss";

function Contacts() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <section className="contacts" id="contacts">
      <div className="contacts__content">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for your message, I'll reply soon!</span>}
        </form>
      </div>
    </section>
  );
}

export default Contacts;