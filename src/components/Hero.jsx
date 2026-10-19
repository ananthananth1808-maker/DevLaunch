import {
  ArrowDownRight,
  ArrowRight,
  Atom,
  Braces,
  Code2,
  Mail,
  Sparkles,
} from "lucide-react";
import { portfolio } from "../data/portfolio";
import ProfileVisual from "./ProfileVisual";

export default function Hero() {
  const socialIcons = { GitHub: Code2, LinkedIn: ArrowRight };

  return (
    <section id="home" className="hero-section section-pad">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="page-container hero-layout">
        <div className="hero-copy reveal-up">
          <div className="availability-badge">
            <span className="availability-dot" />
            {portfolio.availability}
          </div>

          <p className="eyebrow hero-role">{portfolio.role}</p>
          <h1 className="hero-title">
            {portfolio.tagline.split(" ").slice(0, 2).join(" ")}{" "}
            <span>{portfolio.tagline.split(" ").slice(2, 4).join(" ")}</span>{" "}
            {portfolio.tagline.split(" ").slice(4).join(" ")}
          </h1>

          <p className="hero-description">
            {portfolio.description}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore My Work <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#contact" className="button button-secondary">
              Let&apos;s Talk <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-socials" aria-label="Social links">
            {portfolio.socialLinks.map((social) => {
              const Icon = socialIcons[social.label] || ArrowRight;
              return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.label} profile`}
              >
                <Icon size={17} aria-hidden="true" />
                <span>{social.label}</span>
              </a>
              );
            })}
            <a href={`mailto:${portfolio.email}`} aria-label={`Email ${portfolio.email}`}>
              <Mail size={17} aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="hero-art reveal-up" aria-label={`${portfolio.name} profile and development tools`}>
          <div className="hero-frame">
            <div className="hero-grid-pattern" aria-hidden="true" />
            <div className="hero-profile-halo" aria-hidden="true" />
            <ProfileVisual className="hero-profile" />
            <div className="floating-tech tech-react"><Atom size={16} /> React</div>
            <div className="floating-tech tech-js"><Braces size={16} /> JavaScript</div>
            <div className="floating-tech tech-css"><Code2 size={16} /> Tailwind</div>
            <div className="code-card">
              <div className="code-card-top">
                <span><i /><i /><i /></span>
                <span>developer.jsx</span>
              </div>
              <code>
                <span className="code-muted">const</span> builder = {"{"}<br />
                &nbsp; craft: <span className="code-string">&quot;with care&quot;</span>,<br />
                &nbsp; focus: <span className="code-string">&quot;people first&quot;</span><br />
                {"}"};
              </code>
            </div>
          </div>
          <div className="availability-card">
            <span className="availability-card-icon"><Sparkles size={17} /></span>
            <span><strong>{portfolio.availability}</strong><small>Let&apos;s build something good</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}