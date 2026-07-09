import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fees & Class Plans — Nur al-Huda Academy" },
      { name: "description", content: "Flexible, negotiable pricing for online Quran and Tajweed classes — weekly and monthly plans for students worldwide." },
      { property: "og:title", content: "Fees — Nur al-Huda Academy" },
      { property: "og:description", content: "Negotiable weekly and monthly plans for 1-on-1 online Quran and Tajweed lessons." },
    ],
  }),
  component: Fees,
});

const plans = [
  {
    name: "2 Days / Week",
    priceLabel: "Starting from",
    price: "£25",
    usd: "≈ $32",
    unit: "/ month",
    tag: "Light",
    desc: "Two focused classes a week — great for a gentle start or busy school schedules.",
    features: [
      "1-on-1 live online classes",
      "2 classes per week",
      "30-minute focused sessions",
      "Choose any course or track",
      "Flexible timing in your timezone",
    ],
  },
  {
    name: "3 Days / Week",
    priceLabel: "Starting from",
    price: "£35",
    usd: "≈ $44",
    unit: "/ month",
    tag: "Balanced",
    desc: "Three classes a week — steady progress without overloading the week.",
    features: [
      "1-on-1 live online classes",
      "3 classes per week",
      "30-minute focused sessions",
      "Noorani Qaida, Nazra, Tajweed or Hifz",
      "Weekly progress updates to parents",
    ],
  },
  {
    name: "5 Days / Month",
    priceLabel: "Starting from",
    price: "£50",
    usd: "≈ $63",
    unit: "/ month",
    tag: "Most popular",
    highlight: true,
    desc: "Best value for consistent progress. Ideal for kids and teenagers building a long-term Quran routine.",
    features: [
      "1-on-1 live online classes",
      "5 classes per week (Mon–Fri)",
      "30-minute focused sessions",
      "Noorani Qaida, Nazra, Tajweed or Hifz",
      "Weekly progress updates to parents",
      "Free trial class included",
      "WhatsApp support",
    ],
  },
  {
    name: "Custom",
    priceLabel: "Fully negotiable",
    price: "Let's talk",
    usd: "",
    unit: "",
    tag: "Family & group",
    desc: "Multiple children, siblings, or a specific schedule? Message on WhatsApp and we'll build a plan that fits.",
    features: [
      "Family & sibling discounts",
      "Group classes on request",
      "Custom weekly hours",
      "Special rates for hardship cases",
      "Any currency — GBP, USD, EUR, PKR",
    ],
  },
];

const included = [
  "Personalised lesson plan for each student",
  "Weekly progress updates for parents",
  "Focused on kids & teenagers — all welcome",
  "Reschedule missed classes fairly",
  "No hidden fees — cancel anytime",
  "All prices negotiable — just ask",
];

function Fees() {
  return (
    <div>
      <section className="bg-emerald-gradient text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Simple & negotiable pricing</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Fees & Plans</h1>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/85">
            All prices below are starting points — fees are fully negotiable. Contact us on WhatsApp for a plan tailored to your child and budget.
          </p>
          <a href="https://wa.me/923452662274" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-medium text-primary-deep shadow-gold hover:scale-105 transition-transform">
            <MessageCircle size={18} /> Negotiate on WhatsApp
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Prices in GBP (£) — USD shown as approximate reference</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map(p => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border-2 bg-card p-8 transition-all ${
                p.highlight
                  ? "border-gold shadow-elegant md:-translate-y-4"
                  : "border-border hover:border-gold/60"
              }`}
            >
              <div className={`absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-medium ${p.highlight ? "bg-gold text-primary-deep" : "bg-secondary text-secondary-foreground"}`}>{p.tag}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">{p.name}</div>
              <div className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground">{p.priceLabel}</div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-display text-5xl text-primary-deep">{p.price}</span>
                {p.unit && <span className="text-sm text-muted-foreground">{p.unit}</span>}
              </div>
              {p.usd && <div className="mt-1 text-xs text-muted-foreground">{p.usd} USD</div>}
              <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-gradient text-primary-foreground">
                      <Check size={10} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/apply"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-105 ${
                  p.highlight
                    ? "bg-primary-deep text-primary-foreground shadow-elegant"
                    : "border border-primary-deep text-primary-deep hover:bg-primary-deep hover:text-primary-foreground"
                }`}
              >
                Apply for this plan
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8">
          <h2 className="text-2xl text-primary-deep">What's included with every plan</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {included.map(i => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <Check size={16} className="mt-0.5 text-gold shrink-0" />
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/5 p-6 text-sm text-foreground/80">
          <strong className="text-primary-deep">Payment methods:</strong> International bank transfer, Wise, PayPal, or local UK/US bank transfer. Final fee is confirmed on WhatsApp before your first paid class — everything is discussed and agreed together.
        </div>
      </section>
    </div>
  );
}
