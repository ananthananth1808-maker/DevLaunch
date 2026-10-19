import { useState } from "react";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { portfolio } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const filters = ["All", "Web Apps", "UI/UX", "Full Stack"];

function ProjectPreview({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = project.previewImage && !imageFailed;

  return (
    <div className={`project-preview preview-${project.preview || "default"}`}>
      {hasImage ? (
        <img
          src={project.previewImage}
          alt={`${project.title} preview`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="preview-art" aria-hidden="true">
          <div className="preview-window">
            <div className="preview-window-bar"><i /><i /><i /><span>{project.title}</span></div>
            {project.preview === "dashboard" ? (
              <div className="dashboard-preview">
                <div className="preview-sidebar"><b /><i /><i /><i /></div>
                <div className="preview-content"><strong /><span /><div><i /><i /><i /></div></div>
              </div>
            ) : project.preview === "studio" ? (
              <div className="studio-preview"><span /><div><i /><i /><i /></div><b /></div>
            ) : (
              <div className="commerce-preview"><div /><span><i /><i /><b /></span></div>
            )}
          </div>
          <span className="preview-orbit preview-orbit-one" />
          <span className="preview-orbit preview-orbit-two" />
        </div>
      )}
      {project.isSample && <span className="sample-ribbon">Sample project</span>}
    </div>
  );
}

function ProjectLink({ href, children, secondary = false }) {
  if (!href) {
    return <span className="project-link-disabled">{children} <span>Not configured</span></span>;
  }
  return (
    <a
      className={`project-link${secondary ? " project-link-secondary" : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}<ExternalLink size={15} aria-hidden="true" />
    </a>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const projects = portfolio.projects || [];
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-pad section-muted">
      <div className="page-container">
        <div className="projects-heading">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="A few ideas, made tangible."
            description="A selection of digital experiences, product concepts, and thoughtful interfaces."
          />
          <span className="project-total">{String(projects.length).padStart(2, "0")} projects</span>
        </div>
        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={`filter-button${activeFilter === filter ? " is-active" : ""}`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        {filteredProjects.length ? (
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.number || project.title}>
                <ProjectPreview project={project} />
                <div className="project-card-body">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.number}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {(project.tags || []).map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  {project.isSample && <p className="sample-note">Example content — replace before publishing.</p>}
                  <div className="project-links">
                    <ProjectLink href={project.demoUrl}>Live preview</ProjectLink>
                    <ProjectLink href={project.sourceUrl} secondary><Code2 size={15} aria-hidden="true" /> Source</ProjectLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="project-empty">
            <span className="empty-icon"><ArrowUpRight size={22} /></span>
            <h3>{projects.length ? `No ${activeFilter} projects yet.` : "Your next project goes here."}</h3>
            <p>{projects.length ? "Choose another category or add a project in the portfolio data file." : "Add projects to src/data/portfolio.js to showcase your work here."}</p>
            {activeFilter !== "All" && <button type="button" className="text-button" onClick={() => setActiveFilter("All")}>View all projects</button>}
          </div>
        )}
      </div>
    </section>
  );
}
