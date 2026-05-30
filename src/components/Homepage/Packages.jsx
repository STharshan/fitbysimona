import { Check } from "lucide-react";

const plans = [
  {
    name: "Foundation",
    weeklyPrice: "9.99",
    signUpFee: "99",
    desc: "Perfect for women ready to build consistency, confidence, and healthier habits.",
    features: [
      "Personalised workout plan",
      "Tailored nutrition guidance",
      "Progress tracking app",
      "Structured fitness roadmap",
      "Email check-in every 2 weeks",
      "Ongoing support & accountability",
    ],
  },
  {
    name: "Elevate",
    weeklyPrice: "24.99",
    signUpFee: "99",
    desc: "For women wanting closer guidance, accountability, and faster progress.",
    popular: true,
    dark: true,
    features: [
      "Personalised workout plan",
      "Tailored nutrition guidance",
      "Progress tracking app",
      "Weekly email check-ins",
      "Monthly 1-to-1 coaching call",
      "Goal reviews & plan adjustments",
      "Ongoing motivation & support",
    ],
  },
  {
    name: "Pocket Personal Trainer",
    weeklyPrice: "49.99",
    signUpFee: "0",
    desc: "Your coach in your pocket - designed for women who want high-level support and accountability.",
    features: [
      "Personalised workout plan",
      "Tailored nutrition guidance",
      "Progress tracking app",
      "Weekly progress monitoring",
      "Priority coaching support",
      "24/7 WhatsApp access",
      "Fast adjustments & feedback",
      "Daily accountability to keep you on track",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="packages" className="w-full bg-[#f7f4f1] py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex h-full flex-col rounded-[34px] p-4 shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                plan.dark
                  ? "bg-[#3b2921] text-[#ffffff]"
                  : "border border-[#e8e1da] bg-[#ffffff] text-[#1e1c1a]"
              }`}
            >
              <div
                className={`rounded-[26px] p-7 ${
                  plan.dark ? "bg-[#1e1c1a]" : "bg-[#e8e1da]"
                }`}
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="font-serif text-2xl font-semibold tracking-tight">
                    {plan.name}
                  </h3>

                  {plan.popular && (
                    <span className="rounded-full bg-[#f5c77c] px-4 py-2 text-sm font-bold text-[#1e1c1a]">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mb-5">
                  <div className="flex flex-wrap items-end gap-2">
                    <span className="text-5xl font-black tracking-tight">
                      GBP {plan.weeklyPrice}
                    </span>

                    <span
                      className={`mb-1 text-base ${
                        plan.dark ? "text-[#e8e1da]" : "text-[#1e1c1a]"
                      }`}
                    >
                      /week
                    </span>
                  </div>

                  <p
                    className={`mt-2 text-sm font-semibold ${
                      plan.dark ? "text-[#f5c77c]" : "text-[#6e655d]"
                    }`}
                  >
                    GBP {plan.signUpFee} Sign-Up Fee
                  </p>
                </div>

                <p
                  className={`text-lg leading-8 ${
                    plan.dark ? "text-[#e8e1da]" : "text-[#867f76]"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              <div className="flex-1 px-6 pb-7 pt-8">
                <p className="mb-6 text-sm font-bold uppercase tracking-wide text-[#867f76]">
                  This Plan Includes:
                </p>

                <ul className="space-y-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5c77c] text-[#1e1c1a]">
                        <Check size={14} strokeWidth={3} />
                      </span>

                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto px-2 pb-2">
                <button
                  className={`h-14 w-full rounded-xl text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    plan.dark
                      ? "bg-[#f5c77c] text-[#1e1c1a]"
                      : "bg-[#9d9287] text-[#ffffff]"
                  }`}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
