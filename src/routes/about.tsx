import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Clock, Globe, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nur al-Huda Academy | Online Quran Tutor since 2020" },
      { name: "description", content: "Nur al-Huda Academy is an experienced online Quran and Tajweed academy teaching kids and teenagers worldwide since 2020 with care, accuracy, and dedication." },
      { property: "og:title", content: "About — Nur al-Huda Academy" },
      { property: "og:description", content: "Trusted online Quran and Tajweed teaching serving families across the UK, USA and worldwide since 2020." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Care first", desc: "Every student is met with patience, warmth and encouragement." },
  { icon: Award, title: "Accuracy", desc: "Correct makharij, Tajweed and pronunciation, verified rule by rule." },
  { icon: Clock, title: "Consistency", desc: "Regular classes, gentle progress, real results over time." },
  { icon: Globe, title: "Worldwide reach", desc: "Flexible scheduling across every timezone — you set the time." },
];

function About() {
  return (
    <div>
      <section className="bg-emerald-gradient text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">About the academy</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-light tracking-tight">Nur al-Huda Academy</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85">
            Online Quran and Tajweed classes for kids and teenagers — teaching internationally since 2020.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="prose prose-lg max-w-none text-foreground/85 leading-relaxed">
          <p className="text-xl">
            Assalamu Alaikum — welcome to <strong>Nur al-Huda Academy</strong>. For over five years we've had the honour of teaching the Quran online to <strong>kids and teenagers</strong> across the UK, USA, Canada, Europe, the Middle East and beyond.
          </p>
          <p className="mt-6">
            Our classes are built on three simple promises: <strong>accurate teaching</strong>, <strong>reliable schedules</strong>, and <strong>genuine care</strong> for every student's progress. Whether your child is picking up the Quran for the first time or refining their recitation, every lesson is planned around <em>them</em> — their level, their pace, their goals.
          </p>
          <p className="mt-6">
            We cover the complete journey: from Noorani Qaida and Arabic letters, to fluent recitation, the full rules of Tajweed, memorisation (Hifz), and the beauty of understanding what is being recited. Nothing is skipped, and nothing is rushed.
          </p>
          <p className="mt-6">
            Classes are one-on-one over video call, at times that suit your family. Our goal is not only to teach the Quran, but to help each student <em>love</em> reading it — with confidence, correctness, and connection.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl text-primary-deep">What guides every class</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(v => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-gradient text-primary-foreground">
                  <v.icon size={22} />
                </div>
                <h3 className="mt-4 text-xl text-primary-deep">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">For parents</p>
          <h2 className="mt-4 text-4xl text-primary-deep">Kids & Teenagers FAQ</h2>
          <p className="mt-3 text-muted-foreground">Everything you need to know about how online classes work for your child.</p>
        </div>
        <div className="mt-12 space-y-3">
          {[
            {
              q: "How do online classes actually work?",
              a: "Classes are 1-on-1 live video calls over Zoom, Google Meet or Skype — whichever your family prefers. Your child only needs a phone, tablet or laptop with a stable internet connection. I share the Quran page on screen so they can follow along and read directly with me. Each session is 30 minutes, 5 days a week (Monday to Friday), at a time that fits your family's routine.",
            },
            {
              q: "What ages do you teach?",
              a: "I teach kids from age 4 and teenagers up to 18. Lessons are adjusted to each child's age and level — younger kids get shorter, more playful sessions with songs and repetition, while teens get a focused, structured curriculum.",
            },
            {
              q: "My child is a complete beginner — is that okay?",
              a: "Absolutely. Most students start from zero. We begin with Noorani Qaida (Arabic letters, sounds and joining), move to fluent Quran reading (Nazra), then step into Tajweed rules. There is no pressure — every child moves at their own pace.",
            },
            {
              q: "What exactly do you cover?",
              a: "The full journey: Arabic alphabet and pronunciation, Noorani Qaida, Nazra (fluent reading), complete Tajweed rules, memorisation (Hifz) with revision plans, essential duas, Salah, and basic Islamic studies for kids. Teens can also start Quran translation and simple Tafseer.",
            },
            {
              q: "Do you teach both boys and girls?",
              a: "Yes — kids and teenagers of all genders are welcome. Just mention any preferences when you apply and we'll arrange a schedule that works for your family.",
            },
            {
              q: "How can parents track their child's progress?",
              a: "Parents receive regular WhatsApp updates — usually a short weekly note on what was covered, how the child is doing, and what's next. You're also welcome to sit in on any class, ask for a monthly progress review, or request a short recorded recitation to hear improvement over time.",
            },
            {
              q: "What if my child misses a class?",
              a: "Just let me know in advance on WhatsApp and we'll reschedule fairly. Life happens — school events, illness, holidays — and I always try to make up missed sessions.",
            },
            {
              q: "Is there a free trial?",
              a: "Yes. Every family gets a completely free trial class first, so you and your child can meet me, see the teaching style, and decide with no pressure.",
            },
          ].map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-border bg-card p-5 transition-colors open:border-gold/50 open:shadow-elegant">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-medium text-primary-deep list-none">
                <span>{q}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-gradient text-primary-foreground text-lg leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <h2 className="text-3xl text-primary-deep">Ready to begin?</h2>
        <p className="mt-3 text-muted-foreground">Book a free trial class — see the teaching style first, then decide.</p>
        <Link to="/apply" className="mt-8 inline-flex rounded-full bg-primary-deep px-8 py-3 font-medium text-primary-foreground shadow-elegant hover:scale-105 transition-transform">
          Apply now
        </Link>
      </section>
    </div>
  );
}
