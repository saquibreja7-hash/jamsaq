import {
  BarChart3,
  Blocks,
  Brush,
  Compass,
  Gauge,
  Gem,
  Globe2,
  Hammer,
  Layers3,
  LineChart,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";

export const agency = {
  name: "jamsaq",
  shortName: "jamsaq",
  email: "hello@jamsaq.co",
  phone: "+91 00000 00000",
  location: "India / Remote Worldwide",
  tagline: "Websites with strategy, polish, and momentum.",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const capabilities = [
  "Strategy",
  "UX Design",
  "Web Design",
  "Development",
  "SEO Setup",
  "Conversion",
  "Maintenance",
  "Launch Systems",
];

export const caseStudies = [
  {
    title: "Stride Running Co.",
    type: "Brand + Web Design",
    metric: "+84% conversion lift",
    summary:
      "Rebuilt the marketing site around performance storytelling and product clarity. Launched in 19 days with a 38% drop in cart abandonment and measurably higher checkout intent.",
    tags: ["Web Design", "E-commerce", "Brand Direction"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Meridian Legal",
    type: "Website Redesign",
    metric: "3× qualified inquiries",
    summary:
      "Transformed a dated law firm website into a trust-first digital presence structured for conversion and local search. Qualified inquiry rate tripled in the first 30 days.",
    tags: ["Web Design", "SEO Foundations", "Copywriting"],
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Bloom Botanics",
    type: "Brand Identity + Launch",
    metric: "22-day launch sprint",
    summary:
      "End-to-end brand and website build for a clean beauty founder launching her first DTC collection. Shipped from zero to live in 22 days, with first sales in week one.",
    tags: ["Brand Identity", "Web Design", "DTC Launch"],
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80&auto=format&fit=crop",
  },
];

export const services = [
  {
    title: "Website Strategy",
    icon: Compass,
    summary: "Turn business goals into a page plan, offer structure, and conversion path.",
    deliverables: ["Site map", "Offer clarity", "Page goals"],
    fit: "Best for teams that know they need a better site but not exactly what to build.",
  },
  {
    title: "Web Design",
    icon: Brush,
    summary: "Create polished, responsive layouts that make your brand easier to trust.",
    deliverables: ["Homepage", "Service pages", "Design system"],
    fit: "Best for brands that need a premium look without losing clarity.",
  },
  {
    title: "Website Development",
    icon: Hammer,
    summary: "Build fast, maintainable frontend experiences with clean implementation.",
    deliverables: ["Responsive build", "Performance pass", "Launch support"],
    fit: "Best for businesses that want the design translated into a usable website.",
  },
  {
    title: "Landing Pages",
    icon: Target,
    summary: "Design focused campaign pages for launches, ads, lead magnets, and offers.",
    deliverables: ["Campaign page", "CTA flow", "Form structure"],
    fit: "Best for paid campaigns, launches, waitlists, and lead generation.",
  },
  {
    title: "Brand Identity Direction",
    icon: Sparkles,
    summary: "Shape visual direction, messaging, and digital presence foundations.",
    deliverables: ["Visual mood", "Type direction", "Message system"],
    fit: "Best for early brands that need a coherent digital expression.",
  },
  {
    title: "SEO & Conversion Foundations",
    icon: Search,
    summary: "Structure pages so search engines and humans understand the offer quickly.",
    deliverables: ["Metadata", "Headings", "CTA improvements"],
    fit: "Best for websites that need better discoverability and clearer actions.",
  },
  {
    title: "Website Redesign",
    icon: Layers3,
    summary: "Rebuild outdated websites into sharper, faster, more persuasive experiences.",
    deliverables: ["Audit", "Redesign", "Migration plan"],
    fit: "Best for businesses with traffic but weak trust, clarity, or conversions.",
  },
  {
    title: "Maintenance & Iteration",
    icon: Wrench,
    summary: "Keep improving pages after launch with updates, fixes, and experiments.",
    deliverables: ["Page updates", "Issue fixes", "Optimization backlog"],
    fit: "Best for teams that want an ongoing website partner.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    output: "Project brief",
    summary: "We clarify audience, goals, offer, competitors, constraints, and success metrics.",
  },
  {
    title: "Map",
    output: "Site architecture",
    summary: "We define the pages, section order, conversion path, and content responsibilities.",
  },
  {
    title: "Design",
    output: "Responsive concept",
    summary: "We create the visual system, key screens, interaction states, and content rhythm.",
  },
  {
    title: "Build",
    output: "Working website",
    summary: "We turn the approved direction into a fast, responsive, accessible frontend.",
  },
  {
    title: "Launch",
    output: "Live-ready handoff",
    summary: "We test responsive behavior, polish details, prepare metadata, and support launch.",
  },
  {
    title: "Improve",
    output: "Growth backlog",
    summary: "We review behavior, gather feedback, and identify the next useful improvements.",
  },
];

export const differentiators = [
  {
    title: "Strategy before visuals",
    icon: Blocks,
    summary: "Every page has a job before it has a look.",
  },
  {
    title: "Conversion paths built in",
    icon: LineChart,
    summary: "We design for trust, scanning, and decisive next steps.",
  },
  {
    title: "Fast frontend execution",
    icon: Gauge,
    summary: "Performance and responsiveness are treated as design requirements.",
  },
  {
    title: "Clear delivery system",
    icon: ShieldCheck,
    summary: "You get a structured process, not vague creative chaos.",
  },
];

export const metrics = [
  { value: "12+", label: "websites launched" },
  { value: "21", label: "avg. days to launch" },
  { value: "3×", label: "avg. inquiry rate lift" },
  { value: "100%", label: "on-time delivery" },
];

export const testimonials = [
  {
    name: "Aryan Mehta",
    role: "Founder, Meridian Legal",
    quote:
      "jamsaq understood the brief without hand-holding. They redesigned our site in three weeks and our qualified inquiry rate tripled within the first month. Best investment we've made in our digital presence.",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Head of Growth, Stride Running Co.",
    quote:
      "Fast, structured, and genuinely strategic. We went from brief to live in 23 days. The new site converts at nearly double the rate of our old one — and it actually looks the part.",
    avatar: "PS",
  },
  {
    name: "Kavya Nair",
    role: "Founder, Bloom Botanics",
    quote:
      "I'd been putting off the website for six months because I didn't trust any agency to get the aesthetic right. jamsaq nailed it on the first concept. Launched on time, first sales in week one.",
    avatar: "KN",
  },
];

export const insights = [
  {
    title: "Why most agency websites repel the clients they're trying to attract",
    category: "Strategy",
    status: "Coming soon",
  },
  {
    title: "The 7 signals that tell a visitor your site is trustworthy in 5 seconds",
    category: "Conversion",
    status: "Coming soon",
  },
  {
    title: "How we rebuilt a law firm's website and tripled their inquiry rate",
    category: "Case Study",
    status: "Coming soon",
  },
];

export const faqs = [
  {
    question: "What types of websites do you build?",
    answer:
      "We focus on marketing websites, service business websites, landing pages, redesigns, and conversion-focused web experiences for growing brands.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Most focused website projects can be planned, designed, and built in a few weeks. The exact timeline depends on page count, content readiness, and review speed.",
  },
  {
    question: "Do you provide copywriting?",
    answer:
      "We can structure page messaging and provide conversion-focused draft copy. Final brand-specific claims, proof, and legal details should be reviewed by you.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can audit the current site, preserve what works, improve clarity, rebuild the design system, and create a stronger conversion path.",
  },
  {
    question: "Do you handle development too?",
    answer:
      "Yes. GemSack can design and build the frontend experience. Backend integrations can be scoped separately when needed.",
  },
  {
    question: "Will the site be mobile responsive?",
    answer:
      "Yes. Responsive behavior is part of the core build, not an afterthought.",
  },
  {
    question: "Can you help with SEO?",
    answer:
      "We include SEO foundations such as page structure, metadata, clean headings, fast loading, and service-focused content architecture.",
  },
  {
    question: "How do we start?",
    answer:
      "Start with the project inquiry form. Share what you need, your timeline, and your current website if you have one.",
  },
];

export const heroStats = [
  { icon: Gem, label: "Premium web presence" },
  { icon: Rocket, label: "Launch-ready execution" },
  { icon: BarChart3, label: "Conversion-minded pages" },
  { icon: Globe2, label: "Built for modern brands" },
];
