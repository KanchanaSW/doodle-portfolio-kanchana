export const site = {
  name: "Kanchana Walagambahu",
  shortName: "Kanchana",
  role: "Senior Software Engineer, Frontend",
  pitch:
    "I ship React and Next.js for enterprise SaaS, and I teach the craft while I build it.",
  location: "Colombo, Sri Lanka",
  email: "sachithrakanchana.ks@gmail.com",
  phone: "0771556815",
  education:
    "BEng (Hons) Software Engineering, Staffordshire University via APIIT Sri Lanka, 2022",
  links: {
    github: "https://github.com/KanchanaSW",
    linkedin: "https://www.linkedin.com/in/connectskw/",
    npm: "https://www.npmjs.com/package/doodleui-react",
    docs: "https://doodle-ui.netlify.app",
    libraryRepo: "https://github.com/KanchanaSW/doodle-ui",
  },
} as const;

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
] as const;

export const about = {
  bio: "Senior Software Engineer and emerging Tech Lead with 4+ years shipping scalable React and Next.js for enterprise SaaS. I run feasibility with Product and Design, turn that into developer guides, and keep FE and BE moving in parallel so releases stay on time.",
  extras:
    "I mentor juniors through weekly 1:1s and PR reviews, lead frontend architecture calls, and give internal talks on the tools we actually use.",
} as const;

export const experience = [
  {
    org: "Axiata Digital Labs",
    role: "Senior Software Engineer",
    location: "Colombo, Sri Lanka",
    dates: "Oct 2022 to present",
    note: "Promoted from Software Engineer in Mar 2025",
    highlights: [
      "Cut mid-sprint rework by running technical feasibility with Product and UI/UX before planning, then writing build steps, test checklists, and QA handoff notes.",
      "Broke a monolithic API into fine-grained endpoints and added CMS-driven TTL caching, which dropped redundant hits, lowered client API cost, and sped up data-heavy screens.",
      "Mentored juniors and interns through weekly 1:1s, PR reviews, and coding standards. Co-led modular architecture for the Axonect Enterprise Product Catalog.",
    ],
  },
  {
    org: "Informatics International",
    role: "Associate Software Engineer",
    location: "Colombo, Sri Lanka",
    dates: "Mar 2022 to Oct 2022",
    highlights: [
      "Built enterprise UIs with React, TypeScript, Material UI, and Redux, with consistent design and cross-browser support.",
      "Worked with two UX designers and backend teams to lock API contracts and component specs before a sprint started.",
      "Tightened Redux usage and closed 10+ frontend defects that were showing up in usability reports.",
    ],
  },
] as const;

export const projects = [
  {
    title: "doodleui-react",
    blurb:
      "Hand-drawn React kit with rough.js chrome and real HTML text. This site is built with it.",
    href: "https://www.npmjs.com/package/doodleui-react",
    extraHref: "https://github.com/KanchanaSW/doodle-ui",
    extraLabel: "GitHub",
    cta: "npm",
    tags: ["React", "TypeScript", "rough.js", "Radix"],
    featured: true,
  },
  {
    title: "JSON Vibe",
    blurb:
      "Shareable JSON editor with live validation, YAML/XML/CSV conversion, and ERD-style schema maps. Zero backend. Client-side encryption.",
    href: "https://jsonshare.org",
    cta: "Open site",
    tags: ["Next.js 14", "CodeMirror 6", "React Flow", "Web Crypto"],
    featured: false,
  },
  {
    title: "SL Stocks",
    blurb:
      "AI-assisted Colombo Stock Exchange tracker for the top 50 names, with a three-tier scoring engine and scheduled Groq insights.",
    href: "https://slstocks.netlify.app",
    cta: "Open site",
    tags: ["Next.js", "Convex", "Recharts", "Groq"],
    featured: false,
  },
  {
    title: "Wildwood Packiyo",
    blurb:
      "Inventory and order platform for Tribird in Norway. Real-time stock, dashboards, and bulk workflows for operations teams.",
    href: "",
    cta: "",
    tags: ["Next.js", "GraphQL", "React Query", "Zustand"],
    featured: false,
  },
] as const;

export const writing = [
  {
    title: "Your React app isn't slow because of React",
    blurb:
      "Seven production levers, in order of impact: profile first, memo second, then split, virtualize, and fix images.",
    href: "https://www.linkedin.com/posts/connectskw_reactjs-webperformance-frontenddevelopment-activity-7476289761997910016-7eG6",
  },
  {
    title: "Stop the extra renders",
    blurb:
      "Most slowness is wasted work. Keep state close, break up large trees, and open the Profiler before you optimize.",
    href: "https://www.linkedin.com/posts/connectskw_react-reactjs-javascript-activity-7482702682827190272-2SXe",
  },
  {
    title: "TTL caching is a product decision",
    blurb:
      "Freshness is not one number. Prices, AI notes, and user actions each need a different clock.",
    href: "https://www.linkedin.com/posts/connectskw_webdevelopment-reactjs-nextjs-activity-7471856463133425664-1oZ4",
  },
] as const;

export const talks = [
  {
    title: "Exploring the Future of Coding with Cursor AI",
    org: "Axiata Digital Labs",
    blurb: "Internal talk with a live demo of AI-assisted day-to-day delivery.",
  },
] as const;

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Frontend architecture",
  "Mentoring",
  "Redux",
  "Zustand",
  "React Query",
  "GraphQL",
  "Tailwind CSS",
  "doodleui-react",
  "Radix UI",
  "shadcn/ui",
  "Framer Motion",
  "Node.js",
  "Firebase",
  "Supabase",
  "Convex",
  "Storybook",
  "CI/CD",
  "SonarQube",
  "Android / Kotlin",
] as const;
