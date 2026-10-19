import { ArrowUpRight, Code2 } from "lucide-react";
import { portfolio } from "../data/portfolio";

const socialIcons = { GitHub: Code2, LinkedIn: ArrowUpRight };
const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-main">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
            <span>{portfolio.brand || "DevLaunch"}</span>
          </a>
          <p>Thoughtful digital work, made with care.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
        <div className="footer-socials">
          {(portfolio.socialLinks || []).map((social) => {
            const Icon = socialIcons[social.label] || ArrowUpRight;
            return (
              <a href={social.url} key={social.label} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <Icon size={17} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="page-container footer-bottom">
        <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        <a href="#home">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
