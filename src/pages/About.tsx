import { Brain, Book, Calendar, Users } from "lucide-react";
import { ABOUT_LEAD, MOTTO, aboutParagraphs, achievementsCards } from "../content/siteData";

const icons = {
  users: Users,
  calendar: Calendar,
  book: Book,
  brain: Brain,
} as const;

const activities = [
  {
    title: "Seminars",
    subtitle: "Educational events",
    description:
      "We host practical, skill-focused sessions that make it easier to contribute and communicate well — covering how to give clear talks, how Effective Altruism relates to AI safety priorities, how to build healthy communities, how to get the most out of conferences, and how to turn “I’m interested in AI safety” into a concrete plan.",
  },
  {
    title: "Reading groups",
    description:
      "We read important papers and articles together and pressure-test the ideas in discussion, so members build genuine understanding rather than just collecting links.",
  },
  {
    title: "Co-working sessions",
    description:
      "We host regular co-working blocks where people show up, focus, and get work done with light structure and accountability — great for studying, writing, coding, and application sprints.",
  },
  {
    title: "Fellowships",
    description:
      "We run cohort-based programs with readings, discussions, and small deliverables to help members level up fast: an 8-week Leaders Fellowship for organizers, plus Introductory and In-Depth fellowships for building strong fundamentals and then pushing deeper into specific AI safety topics.",
  },
  {
    title: "Mentoring",
    description:
      "We pair motivated members with dedicated mentors or overseers who help them pick a direction, stay consistent, and build toward ambitious goals — both inside AI safety and in the broader skills that make them effective.",
  },
  {
    title: "Opportunity fairs",
    description:
      "We turn “I should apply someday” into action by exploring what paths make sense, choosing goals together, and then doing shared application sessions where people draft, review, and submit side-by-side.",
  },
  {
    title: "Apart Research Sprint Hub",
    description:
      "We run a monthly sprint cycle where members pick a concrete goal, meet regularly for structure and accountability, and finish the month with something real — notes, a write-up, an application, a prototype, or a research plan.",
  },
  {
    title: "Small research group",
    description:
      "For members aiming to produce serious outputs, we run a tighter group focused on turning ideas into publishable work — scoping questions, reviewing related work, building experiments, and writing — explicitly targeting venues like ICML, AAAI, and NeurIPS.",
  },
  {
    title: "Conferences (EAG / EAGx)",
    description:
      "We help members prepare strategically — setting goals, planning who to meet, and following up properly — and we support paper and talk submissions by workshopping ideas, polishing abstracts, and doing practice runs.",
  },
  {
    title: "Guest speakers",
    description:
      "We invite researchers, builders, and organizers to share what they’ve learned, give blunt career advice, and offer concrete next steps — not just inspiration.",
  },
  {
    title: "Retreats",
    subtitle: "When funding allows",
    description:
      "When we can afford it, we run retreats designed for deep work and strong bonds: fewer distractions, longer focused sessions, and time to push projects forward together.",
  },
  {
    title: "Movie nights",
    subtitle: "e.g., Pantheon",
    description:
      "We do occasional low-stakes socials that still connect to our themes — good stories make technical conversations more accessible, and they build the friendships that keep a community alive.",
  },
] as const;

export default function AboutPage() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Front-page statement */}
        <div className="mb-14 text-center">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-zinc-950 leading-tight">
            {MOTTO}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-700 max-w-3xl mx-auto">
            {ABOUT_LEAD}
          </p>
        </div>

        {/* About section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">About</h2>

          <div className="space-y-6 leading-relaxed max-w-none mx-auto">
            {aboutParagraphs.map((p) => (
              <p key={p} className="text-base sm:text-lg text-zinc-800">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Boxes */}
        <div className="mt-14 pt-10 border-t border-zinc-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievementsCards.map((card) => {
              const Icon = icons[card.icon];
              return (
                <div
                  key={card.label}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-zinc-200 hover:border-zinc-400 transition-colors text-center flex flex-col items-center justify-center aspect-square"
                >
                  <Icon className="w-9 h-9 text-zinc-900 mb-4 mx-auto" />
                  <div className="text-3xl font-bold text-zinc-950 mb-1">{card.value}</div>
                  <div className="text-zinc-700">{card.label}</div>
                </div>
              );
            })}
          </div>

          {/* What we do */}
          <div className="mt-14">
            <h2 className="text-4xl font-bold tracking-tight mb-8 text-center">What we do</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activities.map((a) => (
                <div
                  key={a.title}
                  className="bg-white p-6 rounded-2xl border border-zinc-200 hover:border-zinc-400 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-semibold text-zinc-950">{a.title}</h3>
                    {"subtitle" in a && a.subtitle ? (
                      <span className="text-sm text-zinc-600">{a.subtitle}</span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-zinc-700 leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
