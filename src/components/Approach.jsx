import "./Approach.css";

const Approach = () => {
  const steps = [
    {
      number: "01",
      title: "Strategy & Discovery",
      description:
        "Align technology initiatives with business objectives through comprehensive analysis and strategic planning.",
    },
    {
      number: "02",
      title: "Design & Engineering",
      description:
        "Architect and build secure, scalable solutions using best practices and cutting-edge technologies.",
    },
    {
      number: "03",
      title: "Deployment & Optimization",
      description:
        "Launch, optimize, and evolve systems for long-term value and continuous improvement.",
    },
  ];

  return (
    <section id="approach" className="approach">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Consulting Approach</h2>
          <p className="section-description">
            A disciplined, outcome-driven engagement model
          </p>
        </div>
        <div className="approach-timeline">
          {steps.map((step, index) => (
            <div key={index} className="approach-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content glass-card">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
