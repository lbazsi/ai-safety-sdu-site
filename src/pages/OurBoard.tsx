import { Mail, MessageCircle } from "lucide-react";

const boardMembers = [
  {
    name: "Balázs László",
    imageSrc: "/balazs.png",
    bio: "Hey! My primary focus is technical AI Safety research with research experience in mech interp and evaluations, monitoring frameworks. I started my journey through AI Safety as a member of AIS Hungary, and now finished multiple courses, fellowships, including the BlueDot AGI Stratefy course. I am well versed in the world of governance, robotics, CS, as well as competitive sports. Additionally, I recently completed the Algoverse AI Research Program, going to start the Sentien Futures Project Incubator and I am the Founder and President of this university group. I would love to share my knowledge, experience and guide ambitios, talented students towards impactful careers. Looking forward to seeing you!",
    email: "lbazsi09@gmail.com",
    whatsapp: "https://wa.me/36703656656",
  },
  {
    name: "Edna",
    imageSrc: "/edna.png",
    bio: "Hey there! My main focus is AI development and research, with a strong interest in building and understanding intelligent systems from the ground up. I am currently a software engineering student and have been diving deeper into AI for quite some time now - exploring everything from core concepts to hands-on projects. I serve as one of the founders and the Vice-President of this organization, where I am passionate about fostering a collaborative space for curious, driven students who want to push the boundaries of what is possible with AI. I am excited to share what I have learned, grow alongside you all and help guide motivated minds toward meaningful and innovative paths in this field. I look forward to seeing and connecting to you all <3",
    email: "ednaguerreiro14@gmail.com",
    whatsapp: "https://wa.me/351930612363",
  },
  {
    name: "Etele",
    imageSrc: "/etele.png",
    bio: "I’m a student at SDU with a strong interest in robotics and the broader field of AI. I enjoy building and experimenting with robots and electronics, and I’m always curious about how theory can lead to real-world impact. Outside of my projects, I love exploring new tech ideas and learning about practical ways to make AI safer, as well as hiking in the mountains and practicing karate. I believe taking a leading role in this group will have an overall positive impact on the field of AI Safety and I wish to lead others towards its captivating and interesting field. I look forward to seeing the ambitious and eager students in our group!",
    email: "kadar.kiss.etele@gmail.com",
    whatsapp: "https://wa.me/36205100407",
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
