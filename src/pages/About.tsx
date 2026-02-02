import { ABOUT_LEAD, aboutParagraphs } from "../content/siteData";

export default function AboutPage() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">About</h1>
        <p className="text-lg text-zinc-700 mb-10 max-w-3xl">{ABOUT_LEAD}</p>

        <div className="space-y-6 leading-relaxed max-w-prose">
          {aboutParagraphs.map((p) => (
            <p key={p} className="text-base sm:text-lg text-zinc-800">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
