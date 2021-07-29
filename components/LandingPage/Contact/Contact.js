import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className={`${styles.contact}`}>
      <p>
        Hey, the system is still under construction, if you are interested in
        the system please fill in the form below or contact us using the number
        below
      </p>

      <form>
        <h2>Leave Us A Message</h2>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" required />

        <label htmlFor="message">Message</label>
        <textarea type="text" id="message" required />

        <button type="submit">Submit</button>
      </form>

      <div className={styles.contact_info}>
        <h2>Contact Information</h2>
        <p>Bpayroll</p>
        <p>info@bpayroll.net</p>
        <p>+254 735 123 694</p>
        <p>+254 755 905 942</p>
        <p>Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default Contact;
