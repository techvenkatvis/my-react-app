import "./Industries.css";

const Industries = () => {
  const industries = [
    { name: "Financial Services & FinTech", icon: "💰" },
    { name: "Healthcare & Life Sciences", icon: "🏥" },
    { name: "Retail & E-Commerce", icon: "🛒" },
    { name: "Manufacturing & Supply Chain", icon: "🏭" },
    { name: "Media, Technology & Digital Platforms", icon: "📱" },
    { name: "Education & Professional Services", icon: "🎓" },
  ];

  return (
    <section id="industries" className="industries">
      <div className="bg-decoration bg-decoration-2"></div>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-description">
            Industry-agnostic expertise delivering tailored solutions across
            sectors
          </p>
        </div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card glass-card">
              <div className="industry-icon">{industry.icon}</div>
              <h4 className="industry-name">{industry.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
