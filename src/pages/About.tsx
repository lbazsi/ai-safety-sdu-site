import { Brain, Book, Calendar, Users } from "lucide-react";
import { ABOUT_LEAD, MOTTO, aboutParagraphs, achievementsCards } from "../content/siteData";

const icons = {
  users: Users,
  calendar: Calendar,
  book: Book,
  brain: Brain,
} as const;

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

          <div className="space-y-6 leading-relaxed max-w-prose mx-auto">
            {aboutParagraphs.map((p) => (
              <p key={p} className="text-base sm:text-lg text-zinc-800">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-zinc-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievementsCards.map((card) => {
              const Icon = icons[card.icon];
              return (
                <div
                  key={card.label}
                  className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors text-center"
                >
                  <Icon className="w-9 h-9 text-zinc-900 mb-4 mx-auto" />
                  <div className="text-3xl font-bold text-zinc-950 mb-1">{card.value}</div>
                  <div className="text-zinc-700">{card.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
