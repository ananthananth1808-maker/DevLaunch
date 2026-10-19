import { ArrowUpRight, Code2, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const socialIcons = { GitHub: Code2, LinkedIn: ArrowUpRight };

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="page-container">
        <div className="contact-panel">
          <div className="contact-decoration" aria-hidden="true" />
          <div className="contact-copy">
            <SectionHeading
              eyebrow="HAVE A GOOD ONE IN MIND?"
              title="Let’s make something matter."
              description="Have a project, an opportunity, or a question? My inbox is open."
            />
            <a className="button button-light" href={`mailto:${portfolio.email}`}>
              <Mail size={17} aria-hidden="true" /> {portfolio.email}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-socials">
            <span>FIND ME AROUND THE WEB</span>
            {(portfolio.socialLinks || []).map((social) => {
              const Icon = socialIcons[social.label] || ArrowUpRight;
              return (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer">
                  <Icon size={18} aria-hidden="true" />
                  <span>{social.label}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
