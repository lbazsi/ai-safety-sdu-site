import { Calendar } from "lucide-react";
import { events } from "../content/siteData";

export default function EventsPage() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Events</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
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
              <h2 className="text-xl font-semibold mb-2 text-zinc-950">{event.title}</h2>
              <p className="text-sm text-zinc-700 mb-3">{event.date}</p>
              <p className="text-zinc-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
