import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChartNoAxesCombined,
  ClipboardList,
  Dumbbell,
  FileHeart,
  MessageCircleMore,
  Smartphone,
  UserRoundPen,
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
    desc: "You'll answer a detailed questionnaire covering your fitness goals, training experience, lifestyle, nutrition, routine, and any challenges you currently face.",
    icon: UserRoundPen,
  },
  {
    number: "3",
    title: "Receive Your Personalised Plan",
    desc: "Your training and nutrition plan will be fully tailored to you - built around your goals, schedule, preferences, and lifestyle to make progress realistic and sustainable.",
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
    desc: "Depending on your coaching package, you'll receive regular check-ins, feedback, plan adjustments, accountability, and direct support to keep you progressing.",
    icon: MessageCircleMore,
  },
  {
    number: "7",
    title: "Adjust, Improve & Progress",
    desc: "As your body, goals, and lifestyle evolve, your coaching evolves with you - ensuring you continue making progress in a healthy and sustainable way.",
    icon: ChartNoAxesCombined,
  },
];

function BookNowBtn() {
  return (
    <button className="flex items-center gap-2 whitespace-nowrap rounded-full bg-[#9d9287] px-6 py-2.5 text-xs font-medium text-[#ffffff] transition-all duration-300 hover:bg-[#867f76] sm:px-7 sm:py-3 sm:text-sm">
      Learn more
      <ArrowRight size={16} />
    </button>
  );
}

export default function ServicesSection() {
  const outerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollableHeight = el.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / scrollableHeight, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const splitProgress = Math.min(progress / 0.3, 1);
  const cardsProgress = progress > 0.3 ? (progress - 0.3) / 0.7 : 0;

  const textTranslateX =
    typeof window !== "undefined" && window.innerWidth >= 768
      ? 25 * (1 - splitProgress)
      : 0;

  return (
    <section
      ref={outerRef}
      id="services"
      className="relative w-full bg-[#f7f4f1] pt-20 md:pt-24"
      style={{ height: "255vh" }}
    >
      <div className="sticky top-16 flex h-screen w-full items-center overflow-hidden px-4 sm:top-20 sm:px-8 md:px-[8%]">
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          <div
            className="z-10 flex flex-col items-center gap-4 text-center transition-all duration-75 ease-out will-change-transform md:items-start md:text-left"
            style={{
              transform: `translateX(${textTranslateX}vw)`,
            }}
          >
            <div className="h-7 w-7 text-[#c0846b] sm:h-8 sm:w-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4M12,18A2,2 0 0,1 10,16A2,2 0 0,1 12,14A2,2 0 0,1 14,16A2,2 0 0,1 12,18Z" />
              </svg>
            </div>

            <div className="flex max-w-md flex-col gap-3 sm:gap-4 md:max-w-none">
              <h2 className="m-0 text-[28px] font-serif leading-[1.2] text-[#1e1c1a] sm:text-[36px] md:leading-[1.15] lg:text-[44px]">
                Here's how online coaching works.
              </h2>
              <p className="m-0 mx-auto max-w-sm text-sm leading-relaxed text-[#867f76] sm:text-base md:mx-0">
                From application to accountability, every step is designed to help you build progress that fits your life and lasts.
              </p>
            </div>

            <div className="mt-1 sm:mt-2">
              <BookNowBtn />
            </div>
          </div>

          <div
            className="relative flex h-[340px] w-full items-start justify-center sm:h-[370px] md:h-[430px] lg:h-[460px]"
            style={{
              opacity: splitProgress,
              transform: `scale(${0.9 + splitProgress * 0.1})`,
            }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const totalCards = steps.length;
              const segment = 1 / totalCards;
              const cardStart = index * segment;
              const cardEnd = (index + 1) * segment;

              let translateY = 0;
              let opacity = 1;
              let rotate = (index - 3) * 2;

              if (cardsProgress > cardStart) {
                const cardActiveProgress =
                  (cardsProgress - cardStart) / (cardEnd - cardStart);
                translateY = cardActiveProgress * -108;
                rotate = rotate - cardActiveProgress * 6;
                opacity = 1 - cardActiveProgress;
              }

              return (
                <div
                  key={step.number}
                  className="absolute w-[90%] rounded-[24px] border border-[#e8e1da] bg-[#ffffff] p-4 shadow-xl shadow-[#3b2921]/5 transition-all duration-75 ease-out will-change-transform sm:w-[82%] sm:rounded-[28px] sm:p-5 md:w-[90%]"
                  style={{
                    zIndex: totalCards - index,
                    transform: `translateY(${translateY}%) rotate(${rotate}deg)`,
                    opacity,
                  }}
                >
                  <div className="flex flex-col rounded-[20px] bg-[#fcfaf8] p-6 sm:p-7">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5c77c] text-[#1e1c1a] sm:h-14 sm:w-14">
                        <Icon size={24} />
                      </div>
                      <span className="text-4xl font-black leading-none text-[#e8e1da] sm:text-5xl">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mb-4 text-lg font-bold leading-tight text-[#1e1c1a] sm:text-xl lg:text-2xl">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-6 text-[#6e655d] sm:text-[15px] lg:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
