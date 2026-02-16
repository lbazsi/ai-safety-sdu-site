import { aiSafetyIntro, safetyTopics } from "../content/siteData";

export default function AiSafetyPage() {
  const resources = [
    {
      title: "AI Safety Atlas",
      url: "https://ai-safety-atlas.com/",
      description:
        "A curated map of AI safety concepts, subfields, and learning paths—use it to orient yourself and pick a direction.",
    },
    {
      title: "The AI Safety Book",
      url: "https://www.aisafetybook.com/",
      description:
        "An accessible, well-structured book that explains core ideas, risks, and research directions with clear examples.",
    },
    {
      title: "ARENA Curriculum",
      url: "https://www.arena.education/curriculum",
      description:
        "Hands-on technical training: alignment, interpretability, and evaluation exercises that build real research skills.",
    },
    {
      title: "BlueDot — AI Governance",
      url: "https://bluedot.org/courses/governance/1/1",
      description:
        "A guided course on AI governance: institutions, policy levers, standards, and how to reason about real-world impact.",
    },
    {
      title: "BlueDot — AGI Strategy",
      url: "https://bluedot.org/courses/agi-strategy/1/1",
      description:
        "A strategic overview of advanced AI development: incentives, timelines, key actors, and decision points that shape outcomes.",
    },
    {
      title: "SAFE.AI (Center for AI Safety)",
      url: "https://safe.ai/",
      description:
        "A policy-facing hub on catastrophic risks from advanced AI, including proposals, statements, and background materials.",
    },
    {
      title: "AISafety.com",
      url: "https://www.aisafety.com/",
      description:
        "A broad directory of AI safety resources—links, orgs, writings, and communities across many subfields.",
    },
  ] as const;

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

        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 text-center">
            What AI safety is about
          </h2>

          <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed text-base sm:text-lg">
            <p>
              AI safety is the field concerned with making advanced AI systems reliable, secure, and aligned with human
              intent—especially in situations where mistakes are costly or incentives are messy. In practice, this means
              reducing the chance that systems cause harm through accidents (like failures, brittleness, or unintended
              behaviors) and through misuse (like enabling cyberattacks, deception, fraud, or unsafe automation).
            </p>

            <p>
              The reason it matters is simple: modern AI systems are increasingly capable, increasingly deployed, and
              increasingly embedded in real-world workflows. That combination creates a risk multiplier. Even a small
              failure rate can scale into big impact when a model is used by thousands of people or plugged into
              high-leverage tooling. AI safety research tries to keep the benefits while making the failure modes rarer,
              detectable, and containable.
            </p>

            <div className="pt-2">
              <h3 className="text-xl font-semibold text-zinc-950 mb-3">What researchers work on</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <span className="font-semibold text-zinc-950">Evaluations & red teaming:</span> measuring what models can
                  do (and where they fail), stress-testing them under adversarial prompts, and building benchmarks that
                  track real risks like jailbreaks, deception, or harmful capability uplift.
                </li>
                <li>
                  <span className="font-semibold text-zinc-950">Mechanistic interpretability:</span> trying to understand how
                  models compute internally—what circuits represent, where certain behaviors live, and how to intervene in
                  a targeted, testable way (instead of only “prompting harder”).
                </li>
                <li>
                  <span className="font-semibold text-zinc-950">Robustness & reliability:</span> reducing brittleness under
                  distribution shift, improving calibration and uncertainty, and making systems behave consistently across
                  languages, settings, and edge cases.
                </li>
                <li>
                  <span className="font-semibold text-zinc-950">Alignment & control:</span> making models follow human goals
                  when goals are underspecified, conflicting, or adversarially exploited—covering techniques like
                  preference learning, reward modeling, constitutional approaches, and scalable oversight.
                </li>
                <li>
                  <span className="font-semibold text-zinc-950">Cybersecurity & model security:</span> protecting models and
                  their deployments against threats like prompt injection, data exfiltration, training-data poisoning,
                  model theft, and supply-chain attacks—especially important when models are connected to tools.
                </li>
                <li>
                  <span className="font-semibold text-zinc-950">Multi-agent systems:</span> understanding what happens when
                  many AI agents interact—coordination, collusion, emergent deception, and the safety of autonomous
                  workflows that span multiple tools and roles.
                </li>
                <li>
                  <span className="font-semibold text-zinc-950">Governance & technical governance:</span> creating the rules,
                  audits, and infrastructure that keep development and deployment safe—things like evaluations as
                  standards, model reporting, compute monitoring, secure model release practices, and compliance tooling.
                </li>
                <li>
                  <span className="font-semibold text-zinc-950">Sentience & moral patienthood (frontier topic):</span>
                  investigating whether future systems could have experiences or morally relevant properties, and what
                  precautionary principles would look like if there’s uncertainty.
                </li>
              </ul>
            </div>

            <p>
              A useful mental model is: AI safety isn’t one “silver bullet.” It’s a stack. We need good measurements
              (evals), good understanding (interpretability), strong engineering practices (security and reliability), and
              strong institutions (governance). And we need these pieces to reinforce each other: evaluations should drive
              real mitigations; mitigations should be testable; and deployment should be monitored so failures are caught
              early.
            </p>

            <p>
              If you’re new, the best way to start is to pick one slice of the stack and go deep—then connect it to the
              rest. For example: learn how to evaluate jailbreaks, then explore why they work; learn a basic interpretability
              tool, then test an intervention; or map a governance proposal and tie it to concrete audit methods.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 text-center">
            Useful links and resources
          </h2>
          <p className="mt-4 text-zinc-700 text-center max-w-3xl mx-auto">
            A short, high-signal set of starting points—ordered to help you go from broad orientation to concrete skill-building.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors block"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-zinc-950 leading-snug">{r.title}</h3>
                  <span className="text-xs font-semibold px-3 py-1 bg-zinc-950 text-stone-50 rounded-full whitespace-nowrap">
                    Link
                  </span>
                </div>
                <p className="text-zinc-700">{r.description}</p>
                <p className="mt-4 text-sm text-zinc-600">Open resource →</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
