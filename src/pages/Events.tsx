import { Calendar } from "lucide-react";
import { events, type SiteEvent } from "../content/siteData";

export default function EventsPage() {
  const { recurringEvents, occasionalEvents } = events.reduce<{
    recurringEvents: SiteEvent[];
    occasionalEvents: SiteEvent[];
  }>(
    (acc, e) => {
      if (e.cadence === "recurring") acc.recurringEvents.push(e);
      else if (e.cadence === "occasional") acc.occasionalEvents.push(e);
      return acc;
    },
    { recurringEvents: [], occasionalEvents: [] }
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Events</h1>

        <div className="space-y-14">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
              Recurring events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recurringEvents.map((event) => (
                <div
                  key={`${event.title}-${event.date}`}
                  className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold px-3 py-1 bg-zinc-950 text-stone-50 rounded-full">
                      {event.type}
                    </span>
                    <Calendar className="w-5 h-5 text-zinc-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-950">{event.title}</h3>
                  <p className="text-sm text-zinc-700 mb-3">{event.date}</p>
                  <p className="text-zinc-700">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
              Occasional events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {occasionalEvents.map((event) => (
                <div
                  key={`${event.title}-${event.date}`}
                  className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold px-3 py-1 bg-zinc-950 text-stone-50 rounded-full">
                      {event.type}
                    </span>
                    <Calendar className="w-5 h-5 text-zinc-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-950">{event.title}</h3>
                  <p className="text-sm text-zinc-700 mb-3">{event.date}</p>
                  <p className="text-zinc-700">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
