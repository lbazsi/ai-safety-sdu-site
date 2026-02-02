import { aiSafetyIntro, safetyTopics } from "../content/siteData";

export default function AiSafetyPage() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6 text-center">AI Safety</h1>
        <p className="text-lg text-zinc-700 text-center mb-16 max-w-3xl mx-auto">{aiSafetyIntro}</p>

        <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            .scroll-container {
              display: flex;
              animation: scroll 40s linear infinite;
            }

            .scroll-container:hover {
              animation-play-state: paused;
            }
          `}</style>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="scroll-container flex gap-6">
              {safetyTopics.concat(safetyTopics).map((topic, index) => (
                <div
                  key={`${topic.title}-${index}`}
                  className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors flex-shrink-0 w-72"
                >
                  <div className="text-2xl mb-4">{topic.emoji}</div>
                  <h2 className="text-xl font-semibold mb-3 text-zinc-950">{topic.title}</h2>
                  <p className="text-zinc-700">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
