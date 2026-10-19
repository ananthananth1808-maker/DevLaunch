import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Menu,
  Palette,
  X,
} from "lucide-react";
import { portfolio } from "../data/portfolio";
import { applyTheme, getInitialTheme, themes } from "../data/themes";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const menuButtonRef = useRef(null);
  const activeTheme = themes.find((option) => option.id === theme) || themes[0];

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (!open) return undefined;
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="page-container nav-layout" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>{portfolio.brand || "DevLaunch"}</span>
        </a>

        <div className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <label className="theme-picker">
            <Palette size={17} aria-hidden="true" />
            <span className="theme-picker-label">Theme</span>
            <span className="theme-swatch" aria-hidden="true">
              {activeTheme.swatch.map((color) => (
                <i key={color} style={{ backgroundColor: color }} />
              ))}
            </span>
            <select
              className="theme-select"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              aria-label="Choose portfolio theme"
            >
              {themes.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
          {portfolio.resumeUrl && (
            <a className="button button-primary nav-resume" href={portfolio.resumeUrl} download>
              <Download size={16} aria-hidden="true" /> Resume
            </a>
          )}
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-navigation" className="mobile-nav">
          <label className="mobile-theme-picker">
            <span>
              <Palette size={17} aria-hidden="true" />
              <span>Choose a theme</span>
            </span>
            <select
              className="theme-select"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              aria-label="Choose portfolio theme"
            >
              {themes.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}<ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
          {portfolio.resumeUrl && (
            <a href={portfolio.resumeUrl} download onClick={() => setOpen(false)}>
              Download resume<Download size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </header>
  );
}
