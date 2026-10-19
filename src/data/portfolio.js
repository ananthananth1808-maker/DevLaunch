export const portfolio = {
  brand: "DevLaunch",
  name: "Alex Morgan",
  initials: "AM",
  role: "Full Stack Developer",
  tagline: "Full Stack Developer & Creative Thinker",
  description:
    "I design and build thoughtful digital products, turning complex ideas into fast, accessible experiences people love to use.",
  availability: "Available for select projects",
  profileImage: null,
  email: "hello@example.com",
  resumeUrl: null,

  socialLinks: [
    { label: "GitHub", url: "https://github.com/", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
  ],

  about: {
    eyebrow: "A LITTLE ABOUT ME",
    title: "I make the web feel a little more human.",
    description:
      "From the first sketch to the final line of code, I bring curiosity, care, and a product mindset to every collaboration. I love solving meaningful problems with simple, considered technology.",
    features: [
      {
        title: "Web development",
        description:
          "Responsive, accessible interfaces and dependable full-stack products.",
        icon: "code",
      },
      {
        title: "Problem solving",
        description:
          "Breaking complex challenges into clear, useful experiences.",
        icon: "lightbulb",
      },
      {
        title: "Collaboration",
        description:
          "Working openly with people to turn a shared vision into reality.",
        icon: "users",
      },
    ],
  },

  skills: [
    { name: "React", category: "Frontend", icon: "atom" },
    { name: "JavaScript", category: "Frontend", icon: "code" },
    { name: "Tailwind CSS", category: "Frontend", icon: "palette" },
    { name: "Node.js", category: "Backend", icon: "server" },
    { name: "REST APIs", category: "Backend", icon: "layers" },
    { name: "PostgreSQL", category: "Database", icon: "database" },
    { name: "Git & GitHub", category: "Tools", icon: "git" },
    { name: "Figma", category: "Tools", icon: "figma" },
  ],

  projects: [
    {
      number: "01",
      title: "Studio Commerce",
      category: "Web Apps",
      description:
        "A considered storefront concept with clear product discovery and a streamlined shopping experience.",
      tags: ["React", "Tailwind CSS"],
      preview: "commerce",
      previewImage: null,
      demoUrl: null,
      sourceUrl: null,
      isSample: true,
    },
    {
      number: "02",
      title: "Focus Flow",
      category: "Full Stack",
      description:
        "A productivity dashboard concept that brings daily priorities and thoughtful planning together.",
      tags: ["React", "Node.js", "PostgreSQL"],
      preview: "dashboard",
      previewImage: null,
      demoUrl: null,
      sourceUrl: null,
      isSample: true,
    },
    {
      number: "03",
      title: "Green Space",
      category: "UI/UX",
      description:
        "A warm digital experience concept for a modern indoor plant shop and its growing community.",
      tags: ["Figma", "CSS"],
      preview: "studio",
      previewImage: null,
      demoUrl: null,
      sourceUrl: null,
      isSample: true,
    },
  ],
};
