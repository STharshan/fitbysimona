import { Play } from "lucide-react";

const testimonials = [
  {
    type: "video",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=900",
  },
  {
    type: "text",
    title: "“Welcoming, never intimidating.”",
    text: "“As a complete beginner, I was nervous to join. The team made me feel instantly comfortable and gave clear guidance throughout. Now I genuinely look forward to every class.”",
    name: "Sophie Malik",
    role: "University lecturer",
  },
  {
    type: "text",
    title: "“Real change in my body and mind.”",
    text: "“After a few months of regular practice, my back pain has eased, my sleep is deeper, and I’m much calmer at work. It’s become part of how I take care of myself.”",
    name: "Daniel Brooks",
    role: "Architect",
  },
  {
    type: "video",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=900",
  },
  {
    type: "text",
    title: '"This studio is my anchor in the city."',
    text: "“I’ve been coming to Sun & Moon for over a year, and it’s become my anchor in the chaos of London life. The teachers are attentive, and I always leave feeling grounded.”",
    name: "Ben Howard",
    role: "Sales assistant",
  },
  {
    type: "text",
    title: "“A space where I can truly slow down.”",
    text: "“Between work and family life, I rarely switch off. Yin and Breathwork classes here give me a reset I didn’t realize I needed.”",
    name: "Oliver Hayes",
    role: "Project manager",
  },
];

function VideoCard({ image }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-[#e8e1da]">
      <img src={image} alt="" className="h-[360px] w-full object-cover" />

      <button className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f7f4f1]/90 text-[#1e1c1a] backdrop-blur-md">
        <Play size={36} fill="#1e1c1a" className="ml-1" />
      </button>
    </div>
  );
}

function TextCard({ title, text, name, role }) {
  return (
    <div className="rounded-[28px] bg-[#ffffff] p-8">
      <h3 className="text-[28px] font-medium leading-tight tracking-tight text-[#1e1c1a]">
        {title}
      </h3>

      <p className="mt-6 text-lg leading-[1.5] text-[#867f76]">{text}</p>

      <div className="mt-8">
        <p className="text-lg font-medium text-[#1e1c1a]">{name}</p>
        <p className="mt-1 text-base text-[#867f76]">{role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#f7f4f1] py-20">
      <div className="mx-auto max-w-[1050px] px-4">
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-[#e8e1da] px-5 py-2 text-sm text-[#1e1c1a]">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-light tracking-tight text-[#1e1c1a] md:text-7xl">
            Voices from our community
          </h2>

          <p className="mx-auto mt-5 max-w-md text-lg leading-snug text-[#867f76]">
            Hear from the people who’ve made Sun & Moon Studio part of their
            weekly rhythm.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:items-start">
          <div className="flex flex-col gap-4 md:-translate-y-4">
            <VideoCard image={testimonials[0].image} />
            <TextCard {...testimonials[1]} />
          </div>

          <div className="flex flex-col gap-4 md:translate-y-8">
            <TextCard {...testimonials[2]} />
            <VideoCard image={testimonials[3].image} />
          </div>

          <div className="flex flex-col gap-4 md:-translate-y-2">
            <TextCard {...testimonials[4]} />
            <TextCard {...testimonials[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
