import { Mail, MessageCircle } from "lucide-react";

const boardMembers = [
  {
    name: "Balázs",
    imageSrc: "/balazs.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    email: "balazs@example.com",
    whatsapp: "https://wa.me/4500000000",
  },
  {
    name: "Edna",
    imageSrc: "/edna.png",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    email: "edna@example.com",
    whatsapp: "https://wa.me/4500000000",
  },
  {
    name: "Etele",
    imageSrc: "/etele.png",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    email: "etele@example.com",
    whatsapp: "https://wa.me/4500000000",
  },
] as const;

export default function OurBoardPage() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Our Board</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {boardMembers.map((m) => (
            <div
              key={m.name}
              className="bg-white p-6 rounded-2xl border border-zinc-200 hover:border-zinc-400 transition-colors w-full max-w-sm text-center"
            >
              <img
                src={m.imageSrc}
                alt={`${m.name} profile`}
                className="w-full aspect-square rounded-2xl object-cover border border-zinc-200"
              />

              <h2 className="mt-5 text-2xl font-semibold text-zinc-950">{m.name}</h2>
              <p className="mt-3 text-zinc-700 leading-relaxed">{m.bio}</p>

              <div className="mt-5 flex flex-col items-center gap-2 text-sm">
                <a
                  href={`mailto:${m.email}`}
                  className="inline-flex items-center gap-2 text-zinc-800 hover:text-zinc-950 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{m.email}</span>
                </a>
                <a
                  href={m.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-800 hover:text-zinc-950 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
