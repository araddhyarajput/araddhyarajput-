import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, FileText, Briefcase, Code2, GraduationCap, ExternalLink, BarChart3, Cpu, PieChart, Building2, CheckCircle2 } from "lucide-react";

export default function Portfolio() {
  const [active, setActive] = useState("home");

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const skills = {
    "Financial Analysis & Strategy": [
      "Financial Modeling (DCF, WACC, FTE, LBO)",
      "Valuation & Forecasting",
      "Scenario Modeling & Variance Analysis",
      "Capital Budgeting",
      "KPI Development & Financial Reporting",
      "FP&A & Capital Raising Support",
    ],
    "Tools & Systems": [
      "Excel (VLOOKUP, Pivots, Dynamic Arrays)",
      "PowerPoint",
      "Bloomberg (familiar)",
      "Python, R",
      "Power BI, Tableau",
      "Advent Geneva (familiar)",
    ],
    "Client & Management": [
      "Cross‑functional Collaboration",
      "Executive Reporting",
      "Strategic Planning",
      "Stakeholder Management",
      "Problem Solving",
      "Process Optimization",
    ],
  };

  const experience = [
    {
      role: "Strategy & Operations Analyst — Intern",
      company: "Boston University",
      time: "Jun 2024 – Aug 2024",
      bullets: [
        "Built Excel/Python/R financial planning & scenario models for university-wide initiatives.",
        "Designed Tableau & Power BI dashboards to elevate KPI storytelling and decision-making.",
        "Ensured 98% data accuracy across complex datasets for budgeting & forecasting.",
        "Streamlined AP workflows, reducing processing time by ~30% via automation.",
        "Implemented performance tracking with risk metrics for stronger operational oversight.",
      ],
    },
    {
      role: "Financial Analyst",
      company: "Parshuram Printers",
      time: "Jan 2023 – Aug 2023",
      bullets: [
        "Led due diligence & valuation for a potential $5M acquisition; maintained 95% data accuracy.",
        "Program-managed a financial system rollout, boosting production efficiency by ~40% (300+ staff).",
        "Built DCF/WACC models to support strategic planning & capital allocation.",
        "Created risk‑adjusted return models; supported FP&A decisioning.",
        "Presented market & credit analytics using Bloomberg data.",
      ],
    },
    {
      role: "Financial Analyst — Intern",
      company: "Xoriant Solutions Pvt Ltd",
      time: "May 2022 – Nov 2022",
      bullets: [
        "Automated T&E/AP workflows; reduced manual effort by ~25% with Power BI/Tableau.",
        "Built SQL models for spend categorization & AP trend forecasting; flagged delays via dashboards.",
        "Developed interactive KPI dashboards to improve reporting accuracy.",
      ],
    },
  ];

  const projects = [
    {
      title: "FP&A Forecasting Suite",
      tag: "Excel • Python • Power BI",
      blurb:
        "A driver-based P&L/BS/CF model with scenario toggles and variance bridge visuals; improved forecast accuracy and sped up month-end reviews.",
      link: "#",
    },
    {
      title: "M&A Valuation Case: $5M Target",
      tag: "DCF • WACC • Comps",
      blurb:
        "Built integrated valuation with sensitivity tables and deal model; assessed synergy ranges and downside protection.",
      link: "#",
    },
    {
      title: "Operations KPI Command Center",
      tag: "Tableau • Power BI",
      blurb:
        "Unified AP/AR, spend, and productivity metrics; implemented alerts to reduce payment delays and highlight bottlenecks.",
      link: "#",
    },
  ];

  const Item = ({ icon: Icon, title, children }) => (
    <div className="flex gap-3 items-start">
      <div className="rounded-2xl shadow p-3"><Icon className="h-5 w-5" /></div>
      <div>
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="text-sm opacity-80">{children}</p>
      </div>
    </div>
  );

  const Section = ({ id, title, children }) => (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold mb-6"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
          <a href="#home" className="font-bold">Araddhya Rajput</a>
          <ul className="hidden md:flex gap-6 text-sm">
            {nav.map(n => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setActive(n.id)}
                  className={`hover:opacity-100 opacity-80 ${active===n.id?"font-semibold":""}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:araddhyarajput28@gmail.com"
            className="text-sm inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 shadow-sm hover:shadow transition"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </nav>
      </header>

      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="uppercase tracking-wide text-xs font-semibold opacity-70">Finance • Analytics • Strategy</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mt-2">Result‑Driven Analyst focused on FP&A, Valuation, and Data‑Driven Decisions</h1>
            <p className="mt-4 text-slate-700">
              Master's in Financial Management (Investment Analysis) from Boston University.
              I build robust financial models, automate reporting, and turn data into insights that leaders can use.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow hover:shadow-md transition">
                <BarChart3 className="h-4 w-4"/> View Projects
              </a>
              <a href="https://www.linkedin.com/in/araddhya-rajput" target="_blank" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow hover:shadow-md transition">
                <Linkedin className="h-4 w-4"/> LinkedIn
              </a>
              <a href="/assets/Resume-Araddhya-Rajput.docx" download className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow hover:shadow-md transition">
                <FileText className="h-4 w-4"/> Download Résumé
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <Item icon={PieChart} title="FP&A">Forecasting • Variance • Budgeting</Item>
              <Item icon={Cpu} title="Analytics">Python • R • Power BI • Tableau</Item>
              <Item icon={Building2} title="Ops & Strategy">AP optimization • KPI systems</Item>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-slate-200 to-slate-100 blur"/>
              <img
                src="/assets/Araddhya_20112307.jpg"
                alt="Araddhya Rajput portrait"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 text-slate-700 leading-relaxed">
            I'm an analyst who blends <strong>finance</strong> and <strong>data</strong>. My work spans FP&A, valuation, and operational analytics—always with an eye for data integrity and scalable processes. I enjoy turning messy datasets into clean dashboards and actionable narratives for leadership.
          </div>
          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Highlights</h3>
            <ul className="text-sm list-disc ml-5 space-y-1">
              <li>Reduced AP processing time ~30% via automation</li>
              <li>Improved KPI reporting and decision‑making at BU</li>
              <li>Led $5M acquisition valuation and diligence</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Code2 className="h-4 w-4"/>{cat}</h3>
              <ul className="text-sm space-y-1">
                {items.map((s) => <li key={s} className="opacity-90">• {s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {experience.map((e) => (
            <div key={e.role} className="rounded-2xl border p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2"><Briefcase className="h-5 w-5"/>{e.role}</h3>
                  <p className="text-sm opacity-80">{e.company} · {e.time}</p>
                </div>
              </div>
              <ul className="mt-3 text-sm space-y-2 list-disc ml-5">
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border p-5 shadow-sm flex flex-col">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-xs uppercase tracking-wide opacity-70 mt-1">{p.tag}</p>
              <p className="text-sm mt-3 flex-1">{p.blurb}</p>
              <a href={p.link} className="mt-4 inline-flex items-center gap-2 text-sm underline">
                View details <ExternalLink className="h-4 w-4"/>
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold flex items-center gap-2"><GraduationCap className="h-5 w-5"/> Boston University — Metropolitan College</h3>
            <p className="text-sm opacity-80">MS, Financial Management — Investment Analysis • Jan 2024 – May 2025</p>
            <ul className="mt-2 text-sm space-y-1 list-disc ml-5">
              <li>Graduate Teaching Assistant — Financial Regulation & Ethics</li>
              <li>Coursework: Fixed Income, Derivatives, Accounting Standards, Quant Finance, M&A, Portfolio Mgmt, Ethics</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold flex items-center gap-2"><GraduationCap className="h-5 w-5"/> Christ University</h3>
            <p className="text-sm opacity-80">BSc, Economics & Data Analytics • Jun 2020 – Jun 2023</p>
            <ul className="mt-2 text-sm space-y-1 list-disc ml-5">
              <li>VP — Economics Club; Winner, 2022 Financial Frontiers Summit</li>
              <li>Coursework: Econometrics, Macro, Micro</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-5 shadow-sm">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> araddhyarajput28@gmail.com</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> 240‑756‑6936</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Boston, MA</div>
              <a className="flex items-center gap-2 underline" href="https://www.linkedin.com/in/araddhya-rajput" target="_blank"><Linkedin className="h-4 w-4"/> linkedin.com/in/araddhya-rajput</a>
            </div>
            <div className="mt-5 text-sm opacity-80">
              *International student open to sponsorship. Available for FP&A, Strategy, and Investment Analyst roles.*
            </div>
          </div>
          <form
            onSubmit={(e)=>{e.preventDefault(); alert("Thanks! I’ll reach out soon.");}}
            className="rounded-2xl border p-5 shadow-sm grid gap-3"
          >
            <div className="grid gap-1">
              <label className="text-sm">Name</label>
              <input required className="border rounded-xl px-3 py-2" placeholder="Your name"/>
            </div>
            <div className="grid gap-1">
              <label className="text-sm">Email</label>
              <input required type="email" className="border rounded-xl px-3 py-2" placeholder="name@email.com"/>
            </div>
            <div className="grid gap-1">
              <label className="text-sm">Message</label>
              <textarea required className="border rounded-xl px-3 py-2 min-h-[110px]" placeholder="How can I help?"/>
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow hover:shadow-md transition w-max">
              <SendIcon className="h-4 w-4"/> Send Message
            </button>
          </form>
        </div>
      </Section>

      <footer className="py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Araddhya Rajput · Built with React & Tailwind
      </footer>
    </div>
  );
}

function SendIcon(props){
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
