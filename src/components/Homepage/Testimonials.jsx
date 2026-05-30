import { useState } from "react";
import { X } from "lucide-react";

const testimonials = [
  {
    title: "If I had to describe Sim in one word, it would be reassuring.",
    preview:
      "Starting a fitness journey can feel overwhelming, but from the moment I began working with Sim, I felt supported, understood, and genuinely capable of achieving my goals.",
    content: [
      "If I had to describe Sim in one word, it would be reassuring.",
      "Starting a fitness journey can feel overwhelming, but from the moment I began working with Sim, I felt supported, understood, and genuinely capable of achieving my goals. She has an incredible ability to create an environment where you feel comfortable pushing yourself while knowing you're in safe hands.",
      "What sets Sim apart is that she doesn't focus on quick fixes or temporary results. She truly cares about long-term progress, confidence, and building sustainable habits that improve both your physical and mental wellbeing. Her approach is thoughtful, encouraging, and completely tailored to the individual.",
      "Even during the times I struggled most with motivation or self-belief, Sim remained consistent, patient, and supportive. She knows how to challenge you while still making you feel encouraged every step of the way.",
      "Every session feels positive, motivating, and empowering. You can tell how much passion and care she puts into what she does, and it reflects in the results and confidence she helps bring out in people.",
      "Sim is an incredibly knowledgeable and supportive coach who genuinely wants the best for her clients. If you're looking for someone who will guide you, motivate you, and help you build lasting results, I can't recommend her enough.",
    ],
    name: "Name",
    role: "Job Title",
  },
  {
    title: "Working with Sim has genuinely been one of the best investments I've made in my health.",
    preview:
      "She helped me get into the best shape of my life, but what made the biggest difference wasn't just the training, it was the education and accountability she provided throughout the journey.",
    content: [
      "Working with Sim has genuinely been one of the best investments I've made in my health. She helped me get into the best shape of my life, but what made the biggest difference wasn't just the training, it was the education and accountability she provided throughout the journey.",
      "Rather than simply giving me a meal plan, she taught me how to make better food choices and develop healthier habits that I can maintain long-term. One of the biggest game changers was her attention to detail around nutrition. She had me send photos of every meal, reviewed them carefully, and gave honest, constructive feedback. That level of diligence and support kept me accountable and completely changed my relationship with food.",
      "The workouts were always challenging, varied and engaging. No two sessions felt the same, which kept things fresh and ensured I was constantly progressing. Despite pushing me hard, she always brought a great sense of humour to every session, making even the toughest workouts enjoyable.",
      "What really sets her apart is her approach. She is supportive, patient and genuinely cares about her clients, but at the same time she creates the consistency and commitment needed to achieve real results. It's a rare balance that helped me stay focused and motivated throughout.",
      "If you're looking for a trainer who combines expertise, accountability, encouragement and genuine care, I couldn't recommend her highly enough.",
    ],
    name: "Name",
    role: "Job Title",
  },
];

function TextCard({ title, preview, name, role, onReadMore }) {
  return (
    <div className="rounded-[28px] bg-[#ffffff] p-8">
      <h3 className="font-serif text-[28px] font-semibold leading-tight tracking-tight text-[#1e1c1a]">
        {title}
      </h3>

      <p className="mt-6 text-lg leading-[1.5] text-[#867f76]">{preview}</p>

      <button
        type="button"
        onClick={onReadMore}
        className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#9d9287] transition hover:text-[#867f76]"
      >
        Read More
      </button>

      <div className="mt-8">
        <p className="text-lg font-medium text-[#1e1c1a]">{name}</p>
        <p className="mt-1 text-base text-[#867f76]">{role}</p>
      </div>
    </div>
  );
}

function TestimonialModal({ testimonial, onClose }) {
  if (!testimonial) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1e1c1a]/60 px-4 py-8 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[28px] bg-[#ffffff] shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e8e1da] bg-white text-[#1e1c1a] transition hover:border-[#9d9287]"
        >
          <X size={20} />
        </button>

        <div className="max-h-[90vh] overflow-y-auto p-8 sm:p-10">
          <h3 className="pr-12 font-serif text-[28px] font-semibold leading-tight tracking-tight text-[#1e1c1a] sm:text-[34px]">
            {testimonial.title}
          </h3>

          <div className="mt-8 space-y-5">
            {testimonial.content.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-[#867f76] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 border-t border-[#e8e1da] pt-6">
            <p className="text-lg font-medium text-[#1e1c1a]">{testimonial.name}</p>
            <p className="mt-1 text-base text-[#867f76]">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  return (
    <>
      <section id="testimonials" className="w-full bg-[#f7f4f1] py-16 md:py-20">
        <div className="mx-auto max-w-[1050px] px-4">
          <div className="mb-16 text-center">
            <span className="inline-flex rounded-full border border-[#e8e1da] px-5 py-2 text-sm text-[#1e1c1a]">
              Testimonials
            </span>

            <h2 className="mt-6 font-serif text-5xl font-semibold tracking-tight text-[#1e1c1a] md:text-7xl">
              Voices from our community
            </h2>

            <p className="mx-auto mt-5 max-w-md text-lg leading-snug text-[#867f76]">
              Hear from the people who've experienced Sim's support, guidance, and long-term coaching approach firsthand.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:items-start">
            {testimonials.map((testimonial) => (
              <TextCard
                key={testimonial.title}
                title={testimonial.title}
                preview={testimonial.preview}
                name={testimonial.name}
                role={testimonial.role}
                onReadMore={() => setActiveTestimonial(testimonial)}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialModal
        testimonial={activeTestimonial}
        onClose={() => setActiveTestimonial(null)}
      />
    </>
  );
}
