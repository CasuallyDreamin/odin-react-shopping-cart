import "./styles/ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Have questions? Reach out to us and we’ll get back as soon as possible.
      </p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={4} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
