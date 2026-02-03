import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title">Engage With Us</h2>
          <p className="contact-description">
            Riversands partners with enterprises, growth-stage companies, and
            innovation leaders to build resilient digital foundations and
            intelligent systems.
          </p>
          <p className="contact-subtitle">
            Contact us to discuss how we can support your digital and AI
            transformation journey.
          </p>
          <div className="contact-cta">
            <button className="btn btn-primary btn-large">
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
