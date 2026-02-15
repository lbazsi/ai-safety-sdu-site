export const MOTTO = "Building a safer AI future - together.";

export const SOCIAL_LINKS = {
  whatsapp: "https://chat.whatsapp.com/HzLVb9SP7RR5YpU7oaV6V4",
  facebook: "https://www.facebook.com/profile.php?id=61582480313874",
  instagram: "https://www.instagram.com/aisafetysdu/",
} as const;

export const ABOUT_LEAD =
  "A student-led community at the University of Southern Denmark dedicated to understanding and advancing AI safety research";

export const aboutParagraphs = [
  "SIRAIS - Student Initiative for AI Safety Research is a student-led initiative at the University of Southern Denmark dedicated to attracting and empowering talented individuals to contribute to the field of AI Safety. Our mission is to build a strong local and international community that collaborates on technical and governance-focused AI Safety research, and connects with leading organizations working toward the safe and beneficial development of artificial intelligence.",
  "We aim to cultivate this community through a range of educational, social, and research-oriented events — including seminars, hackathons, reading groups, social gatherings like movie nights, and opportunity-oriented events such as fellowships, retreats, and conferences. By combining academic curiosity with real-world collaboration, we seek to create an environment where students and researchers can actively advance the understanding and practice of AI Safety together.",
];

export const achievementsCards = [
  { icon: "users", value: "3", label: "Active Members" },
  { icon: "calendar", value: "0", label: "Events Hosted" },
  { icon: "book", value: "0", label: "Research Projects" },
  { icon: "brain", value: "∞", label: "Ideas Shared" },
] as const;

export type EventCadence = "recurring" | "occasional";

export type SiteEvent = {
  title: string;
  date: string;
  description: string;
  type: string;
  cadence: EventCadence;
};

export const events: ReadonlyArray<SiteEvent> = [
{
    title: "Intro to SIRAIS",
    date: "November 18, 2025",
    description: "Introductory seminar about AI Safety and the organization from 17:00",
    type: "Seminar",
    cadence: "occasional",
  },
  {
    title: "EU AI Act Hackathon",
    date: "November 22, 2025",
    description:
      "Open to all students (including European Studies and Business), full-day event (9:00–20:00)",
    type: "Hackathon",
    cadence: "occasional",
  },
];
export const aiSafetyIntro =
  "The goal of AI safety is to understand how these systems operate fundamentally, how they can be misused or misaligned, and how to prevent these scenarios.";

export const safetyTopics = [
  {
    emoji: "⚠️",
    title: "Alignment",
    description: "Ensuring AI systems behave in accordance with human values and intentions",
  },
  {
    emoji: "📢",
    title: "Awareness",
    description:
      "Inspiring curiosity and conversation about how we can shape AI systems to serve humanity safely",
  },
  {
    emoji: "📖",
    title: "Interpretability",
    description: "Understanding how AI systems make decisions and identifying potential risks",
  },
  {
    emoji: "🎯",
    title: "Governance",
    description: "Developing policies and frameworks for responsible AI development",
  },
  {
    emoji: "🔍",
    title: "Transparency",
    description: "Making AI systems and their decision-making processes understandable and accountable",
  },
  {
    emoji: "⚖️",
    title: "Fairness",
    description: "Preventing bias and discrimination in AI systems across different populations",
  },
  {
    emoji: "🛡️",
    title: "Evaluation",
    description:
      "Understanding how AI systems can be harmful to prevent malitious misuse, misalignment",
  },
  {
    emoji: "🤝",
    title: "Ethics",
    description: "Ensuring AI development respects human rights, dignity, and societal values",
  },
] as const;

export const contactEmail = "aisafetysdu@gmail.com";
export const contactLocation = "Denmark, Sønderborg";

export const teamContacts = [
  { name: "Balázs László", email: "lbazsi09@gmail.com" },
  { name: "Edna Guerreiro", email: "ednaguerreiro14@gmail.com" },
] as const;
