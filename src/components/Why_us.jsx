import "./Why_us.css";

const Why_us = () => {
  const reasons = [
    {
      icon: "🎯",
      title: "Business-First Mindset",
      description:
        "Technology-led solutions aligned with your strategic business objectives",
    },
    {
      icon: "🧠",
      title: "Deep AI Expertise",
      description: "Advanced capabilities in AI and modern software ecosystems",
    },
    {
      icon: "🔒",
      title: "Enterprise-Grade Security",
      description: "Uncompromising security and compliance standards built-in",
    },
    {
      icon: "🤝",
      title: "Long-Term Partnership",
      description:
        "Transparent delivery and sustained collaboration for lasting success",
    },
  ];

  return (
    <section className="why-us">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Why Riversands</h2>
          <p className="section-description">
            We deliver confidence, clarity, and capability at scale
          </p>
        </div>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card glass-card">
              <div className="reason-icon">{reason.icon}</div>
              <h4 className="reason-title">{reason.title}</h4>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="why-us-statement">
          <p className="statement-text">
            "We do not simply deliver technology. We deliver confidence,
            clarity, and capability at scale."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why_us;
