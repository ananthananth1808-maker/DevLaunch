import { Code2, Lightbulb, Users } from "lucide-react";
import { portfolio } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import ProfileVisual from "./ProfileVisual";

const featureIcons = { code: Code2, lightbulb: Lightbulb, users: Users };

export default function About() {
  const features = portfolio.about?.features || [];

  return (
    <section id="about" className="section-pad section-muted">
      <div className="page-container">
        <div className="about-intro">
          <div>
            <SectionHeading
              eyebrow={portfolio.about?.eyebrow || "ABOUT"}
              title={portfolio.about?.title || "A little about me."}
              description={portfolio.about?.description}
            />
          </div>
          <div className="about-aside">
            <ProfileVisual className="about-profile" />
            <p>Thoughtful by design.<br /><strong>Built to make a difference.</strong></p>
          </div>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature.icon] || Code2;
            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-card-top">
                  <span className="feature-icon"><Icon size={21} aria-hidden="true" /></span>
                  <span className="feature-index">0{index + 1}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
