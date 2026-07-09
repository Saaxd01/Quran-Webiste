import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Clock, Globe } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nur al-Huda Academy" },
      { name: "description", content: "Get in touch with Nur al-Huda Academy for online Quran and Tajweed classes. Reach out via WhatsApp or email — worldwide students welcome." },
      { property: "og:title", content: "Contact — Nur al-Huda Academy" },
      { property: "og:description", content: "WhatsApp or email your online Quran academy." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <section className="bg-emerald-gradient text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Let's connect</p>
          <h1 className="mt-4 text-5xl md:text-6xl">Contact</h1>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/85">
            Have a question, or ready to start? Reach out anytime — I usually reply within a few hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <a href="https://wa.me/923452662274" className="group rounded-2xl border-2 border-border bg-card p-8 transition-all hover:border-gold hover:shadow-elegant">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-gradient text-primary-foreground">
              <MessageCircle size={26} />
            </div>
            <h2 className="mt-5 text-2xl text-primary-deep">WhatsApp</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fastest way to reach me. Message anytime.</p>
            <div className="mt-4 font-serif text-2xl text-gold">+92 345 2662274</div>
          </a>
          <a href="mailto:asiyaalirana001@gmail.com" className="group rounded-2xl border-2 border-border bg-card p-8 transition-all hover:border-gold hover:shadow-elegant">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-gradient text-primary-foreground">
              <Mail size={26} />
            </div>
            <h2 className="mt-5 text-2xl text-primary-deep">Email</h2>
            <p className="mt-2 text-sm text-muted-foreground">For detailed enquiries or documents.</p>
            <div className="mt-4 font-serif text-xl text-gold break-all">asiyaalirana001@gmail.com</div>
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-secondary/40 p-8">
            <div className="flex items-center gap-3 text-gold">
              <Clock size={20} />
              <div className="text-xs uppercase tracking-[0.2em]">Availability</div>
            </div>
            <p className="mt-4 text-foreground/80">Classes scheduled 7 days a week across all timezones — UK, US East/West, Canada, Europe, Middle East, Australia.</p>
          </div>
          <div className="rounded-2xl border border-border bg-secondary/40 p-8">
            <div className="flex items-center gap-3 text-gold">
              <Globe size={20} />
              <div className="text-xs uppercase tracking-[0.2em]">Languages</div>
            </div>
            <p className="mt-4 text-foreground/80">Instruction in English & Urdu. Classes suitable for native English speakers and non-Arabic learners.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
