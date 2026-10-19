import {
  Atom,
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Palette,
  Server,
  Wrench,
} from "lucide-react";
import { portfolio } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const skillIcons = {
  atom: Atom,
  braces: Braces,
  code: Code2,
  database: Database,
  figma: Layers3,
  git: GitBranch,
  layers: Layers3,
  palette: Palette,
  server: Server,
  tools: Wrench,
};
const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Database,
  Tools: Wrench,
};

export default function Skills() {
  const skills = portfolio.skills || [];
  const groups = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section id="skills" className="section-pad">
      <div className="page-container">
        <SectionHeading
          eyebrow="MY TOOLKIT"
          title="The craft behind the experience."
          description="A flexible toolkit for designing, building, and shipping useful digital products."
        />
        {groups.length ? (
          <div className="skill-grid">
            {groups.map((group) => {
              const CategoryIcon = categoryIcons[group] || Layers3;
              return (
                <article className="skill-card" key={group}>
                  <div className="skill-card-heading">
                    <span className="skill-category-icon"><CategoryIcon size={20} aria-hidden="true" /></span>
                    <h3>{group}</h3>
                    <span className="skill-count">{String(skills.filter((skill) => skill.category === group).length).padStart(2, "0")}</span>
                  </div>
                  <div className="skill-list">
                    {skills.filter((skill) => skill.category === group).map((skill) => {
                      const Icon = skillIcons[skill.icon] || Code2;
                      return (
                        <div className="skill-item" key={`${skill.category}-${skill.name}`}>
                          <Icon size={17} aria-hidden="true" /><span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="empty-state">Add skills in <code>src/data/portfolio.js</code> to show your toolkit.</p>
        )}
      </div>
    </section>
  );
}
