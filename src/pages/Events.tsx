import { Calendar } from "lucide-react";
import { events, type SiteEvent } from "../content/siteData";

function EventCard({ event }: { event: SiteEvent }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors w-full max-w-sm">
      <div className="flex justify-between items-start mb-4 gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1 bg-zinc-950 text-stone-50 rounded-full">
            {event.type}
          </span>
          <span className="text-xs font-semibold px-3 py-1 bg-zinc-800 text-stone-50 rounded-full">
            {event.location}
          </span>
        </div>
        <Calendar className="w-5 h-5 text-zinc-600 flex-shrink-0" />
      </div>

      <h3 className="text-xl font-semibold mb-2 text-zinc-950">{event.title}</h3>
      <p className="text-sm text-zinc-700 mb-3">{event.date}</p>
      {event.description ? <p className="text-zinc-700">{event.description}</p> : null}
    </div>
  );
}

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
              Occasional events
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {occasionalEvents.map((event) => (
                <EventCard key={`${event.title}-${event.date}`} event={event} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
              Recurring events
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {recurringEvents.map((event) => (
                <EventCard key={`${event.title}-${event.date}`} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
