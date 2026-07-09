import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Globe2, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import heroImg from "@/assets/hero-quran.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--73c065f6-dcf7-4b8a-854c-b5898a5962c4.lovable.app/og-hero.jpg" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: BookOpen, title: "Complete Quran Curriculum", desc: "Noorani Qaida, fluent recitation, memorisation (Hifz), translation and full Tajweed rules — step by step." },
  { icon: ShieldCheck, title: "100% Accurate Teaching", desc: "Every letter, makhraj and rule taught precisely, verified against classical Tajweed sources." },
  { icon: Heart, title: "Student-First Care", desc: "Patient, encouraging lessons for children and adults. Your satisfaction is the priority." },
  { icon: Globe2, title: "Worldwide, Any Timezone", desc: "Students in the UK, USA, Canada, Australia, Europe and the Middle East — classes fit your schedule." },
  { icon: Users, title: "For Every Age & Level", desc: "Beginners to advanced. Kids, teens, adults, reverts — a personalised path for each learner." },
  { icon: Sparkles, title: "Since 2020", desc: "Over five years of trusted online teaching with hundreds of happy students and families." },
];

const countries = ["🇬🇧 United Kingdom", "🇺🇸 United States", "🇨🇦 Canada", "🇦🇺 Australia", "🇦🇪 UAE", "🇩🇪 Germany", "🇫🇷 France", "🇸🇦 Saudi Arabia"];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-gradient" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,215,140,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,215,140,0.25), transparent 40%)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary-foreground/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
              <Sparkles size={14} /> Teaching worldwide since 2020
            </div>
            <h1 className="mt-6 font-display text-[2.75rem] font-light leading-[1.02] tracking-[-0.02em] md:text-7xl lg:text-8xl">
              Learn the <span className="text-gradient-gold italic font-normal">Quran</span> with care, clarity and correct <span className="text-gradient-gold italic font-normal">Tajweed</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              Nur al-Huda Academy — personalised 1-on-1 online Quran and Tajweed classes. Trusted by families across the UK, USA, Canada, Europe and beyond.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/apply" className="rounded-full bg-gold px-7 py-3 font-medium text-primary-deep shadow-gold transition-transform hover:scale-105">
                Start your free trial
              </Link>
              <Link to="/fees" className="rounded-full border border-primary-foreground/30 px-7 py-3 font-medium text-primary-foreground hover:bg-primary-foreground/10">
                View fees
              </Link>
            </div>
            <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
              <div><div className="font-serif text-3xl text-gold">5+</div><div className="text-xs text-primary-foreground/70">Years teaching</div></div>
              <div><div className="font-serif text-3xl text-gold">20+</div><div className="text-xs text-primary-foreground/70">Countries served</div></div>
              <div><div className="font-serif text-3xl text-gold">100%</div><div className="text-xs text-primary-foreground/70">Accurate Tajweed</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gold/20 blur-3xl" />
            <img src={heroImg} alt="Open Quran on a wooden stand" className="relative rounded-3xl shadow-elegant" />
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="border-b border-border bg-secondary/50 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">Serving students in</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-foreground/80">
            {countries.map(c => <span key={c}>{c}</span>)}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="ornament-divider text-xs uppercase tracking-[0.25em]">Why families choose us</p>
          <h2 className="mt-6 text-4xl md:text-5xl text-primary-deep">Reliable, accurate, and rooted in care.</h2>
          <p className="mt-4 text-muted-foreground">Every class is planned around the student — with the correct pronunciation, Tajweed, and love for the Quran at its centre.</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(f => (
            <div key={f.title} className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-gold/60 hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-gradient text-primary-foreground">
                <f.icon size={22} />
              </div>
              <h3 className="mt-6 text-2xl text-primary-deep">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold">What we cover</p>
              <h2 className="mt-4 text-4xl text-primary-deep">Every detail of Quran & Tajweed</h2>
              <p className="mt-4 text-muted-foreground">A complete journey — from your first Arabic letter to fluent, rule-perfect recitation of the entire Quran, inshaAllah.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Noorani Qaida", "Arabic letters, makharij, and foundations for children and adults."],
                ["Nazra Quran", "Fluent reading of the Quran with correct pronunciation and pace."],
                ["Full Tajweed", "All rules — Idgham, Ikhfa, Qalqalah, Madd, waqf and more — with practice."],
                ["Hifz (Memorisation)", "Structured plan with revision to memorise the Quran at your pace."],
                ["Translation & Tafseer basics", "Understand the meaning of what you recite."],
                ["Islamic studies", "Duas, Salah, Aqeedah essentials and Seerah for children."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-xl text-primary-deep">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-gradient p-12 text-center text-primary-foreground shadow-elegant md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <h2 className="text-4xl md:text-5xl">Begin your Quran journey today</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">Book a free trial class — no commitment. Discover a peaceful, focused way to learn the Quran from home.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/apply" className="rounded-full bg-gold px-7 py-3 font-medium text-primary-deep shadow-gold hover:scale-105 transition-transform">Apply now</Link>
            <a href="https://wa.me/923452662274" className="rounded-full border border-primary-foreground/40 px-7 py-3 font-medium hover:bg-primary-foreground/10">Message on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}
