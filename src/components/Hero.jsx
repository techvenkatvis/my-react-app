import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title animate-fadeIn">Riversands</h1>
          <h2 className="hero-subtitle animate-fadeIn">
            Enterprise Technology Consulting for{" "}
            <span className="text-gradient">Software & AI Transformation</span>
          </h2>
          <p className="hero-description animate-fadeIn">
            A global technology consulting firm delivering enterprise-grade
            software development and artificial intelligence solutions. We
            partner with organizations across industries to design, build, and
            scale secure, intelligent, and future-ready digital systems.
          </p>
          <div className="hero-cta animate-fadeIn">
            <a href="#contact" type="button" className="btn btn-primary">
              Get Started
            </a>
            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
