import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Custom Software Engineering",
      icon: "⚡",
      description:
        "Mission-critical software platforms built for scale, resilience, and long-term performance.",
      items: [
        "Enterprise & SaaS Platforms",
        "Web & Mobile Applications",
        "System Modernization",
        "API & Platform Integrations",
        "Cloud-Native Architectures",
      ],
    },
    {
      title: "Artificial Intelligence & Advanced Analytics",
      icon: "🤖",
      description:
        "Operationalize AI responsibly and effectively across your organization.",
      items: [
        "AI Strategy & Advisory",
        "Machine Learning Solutions",
        "Predictive & Prescriptive Analytics",
        "Natural Language Processing",
        "Computer Vision & Automation",
      ],
    },
    {
      title: "Product & Platform Engineering",
      icon: "🚀",
      description:
        "From concept to enterprise-scale deployment, engineering products that deliver business value.",
      items: [
        "Product Architecture & Design",
        "MVP to Enterprise Scale",
        "Performance & Reliability Engineering",
        "Continuous Improvement & Support",
      ],
    },
    {
      title: "Data, Cloud & DevOps",
      icon: "☁️",
      description: "Build secure, scalable, and compliant cloud ecosystems.",
      items: [
        "Data Engineering & Business Intelligence",
        "Cloud Strategy & Migration (AWS, Azure, GCP)",
        "DevOps & CI/CD Automation",
        "Security, Governance & Compliance",
      ],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive technology solutions designed to transform your
            business
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-items">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
