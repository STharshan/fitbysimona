import {
  ClipboardList,
  UserRoundPen,
  FileHeart,
  Smartphone,
  Dumbbell,
  MessageCircleMore,
  ChartNoAxesCombined,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Apply & Choose Your Coaching Package",
    desc: "Start by filling out your application form and selecting the coaching package that best fits your goals, lifestyle, and level of support needed.",
    icon: ClipboardList,
  },
  {
    number: "2",
    title: "Complete Your Client Questionnaire",
    desc: "You’ll answer a detailed questionnaire covering your fitness goals, training experience, lifestyle, nutrition, routine, and any challenges you currently face.",
    icon: UserRoundPen,
  },
  {
    number: "3",
    title: "Receive Your Personalised Plan",
    desc: "Your training and nutrition plan will be fully tailored to you — built around your goals, schedule, preferences, and lifestyle to make progress realistic and sustainable.",
    icon: FileHeart,
  },
  {
    number: "4",
    title: "Access Your Coaching App",
    desc: "Everything will be available inside your coaching app, including workouts, nutrition guidance, progress tracking, check-ins, and support.",
    icon: Smartphone,
  },
  {
    number: "5",
    title: "Start Training & Building Momentum",
    desc: "Follow your structured programme, track your progress, and focus on building confidence, strength, and consistency week by week.",
    icon: Dumbbell,
  },
  {
    number: "6",
    title: "Ongoing Support & Accountability",
    desc: "Depending on your coaching package, you’ll receive regular check-ins, feedback, plan adjustments, accountability, and direct support to keep you progressing.",
    icon: MessageCircleMore,
  },
  {
    number: "7",
    title: "Adjust, Improve & Progress",
    desc: "As your body, goals, and lifestyle evolve, your coaching evolves with you — ensuring you continue making progress in a healthy and sustainable way.",
    icon: ChartNoAxesCombined,
  },
];

export default function CoachingSteps() {
  return (
    <section className="w-full bg-[#f7f4f1] py-16 md:py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-4">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="rounded-[34px] border border-[#e8e1da] bg-[#ffffff]/70 p-5 shadow-[0_10px_30px_rgba(59,41,33,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(59,41,33,0.08)]"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                {/* NUMBER */}
                <div className="flex justify-center md:justify-start">
                  <div className="flex h-[96px] w-[96px] items-center justify-center rounded-full bg-[#e8e1da] text-5xl font-semibold text-[#1e1c1a]">
                    {step.number}
                  </div>
                </div>

                {/* ICON */}
                <div className="flex justify-center md:justify-start">
                  <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#ffffff]">
                    <Icon
                      size={70}
                      strokeWidth={1.7}
                      className="text-[#c0846b]"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-[#1e1c1a] md:text-5xl">
                    {step.title}
                  </h3>

                  <p className="max-w-4xl text-lg leading-[1.7] text-[#867f76] md:text-[32px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
