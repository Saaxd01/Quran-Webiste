import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply for Online Quran Classes — Nur al-Huda Academy" },
      { name: "description", content: "Apply online for free trial Quran and Tajweed classes. Simple application form for students in the UK, USA and worldwide." },
      { property: "og:title", content: "Apply — Online Quran Classes" },
      { property: "og:description", content: "Book your free trial in under a minute." },
    ],
  }),
  component: Apply,
});

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  country: z.string().trim().min(2, "Please enter your country").max(60),
  age: z.string().trim().min(1, "Please enter age").max(3),
  course: z.string().min(1, "Please choose a course"),
  timing: z.string().trim().min(2, "Preferred timing is required").max(120),
  gender: z.string().min(1, "Please choose"),
  notes: z.string().max(500).optional(),
});

const WHATSAPP = "923452662274";

function Apply() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach(i => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = result.data;
    const msg = `Assalamu Alaikum, I'd like to apply for Quran classes.%0A%0A*Name:* ${d.fullName}%0A*Email:* ${d.email}%0A*Country:* ${d.country}%0A*Age:* ${d.age}%0A*Gender:* ${d.gender}%0A*Course:* ${d.course}%0A*Preferred timing:* ${d.timing}%0A*Notes:* ${d.notes || "-"}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const field = "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
  const label = "block text-sm font-medium text-foreground/80 mb-1.5";

  return (
    <div>
      <section className="bg-emerald-gradient text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Free trial • No commitment</p>
          <h1 className="mt-4 text-5xl md:text-6xl">Application Form</h1>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/85">
            Fill in a few details and I'll reach out on WhatsApp to schedule your free trial class.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        {submitted ? (
          <div className="rounded-2xl border border-gold/40 bg-card p-10 text-center shadow-elegant">
            <CheckCircle2 size={56} className="mx-auto text-primary" />
            <h2 className="mt-4 text-3xl text-primary-deep">JazakAllah khair!</h2>
            <p className="mt-3 text-muted-foreground">Your application is ready to send via WhatsApp. If the WhatsApp window didn't open, tap the button below.</p>
            <a href={`https://wa.me/${WHATSAPP}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-deep px-7 py-3 font-medium text-primary-foreground">
              <MessageCircle size={18} /> Continue on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-elegant md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={label} htmlFor="fullName">Full name</label>
                <input id="fullName" name="fullName" className={field} placeholder="Your full name" />
                {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
              </div>
              <div>
                <label className={label} htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className={field} placeholder="you@example.com" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className={label} htmlFor="country">Country</label>
                <input id="country" name="country" className={field} placeholder="UK, USA, Canada..." />
                {errors.country && <p className="mt-1 text-xs text-destructive">{errors.country}</p>}
              </div>
              <div>
                <label className={label} htmlFor="age">Student age</label>
                <input id="age" name="age" type="number" min="4" max="99" className={field} placeholder="e.g. 12" />
                {errors.age && <p className="mt-1 text-xs text-destructive">{errors.age}</p>}
              </div>
              <div>
                <label className={label} htmlFor="gender">Student gender</label>
                <select id="gender" name="gender" className={field} defaultValue="">
                  <option value="" disabled>Choose…</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                {errors.gender && <p className="mt-1 text-xs text-destructive">{errors.gender}</p>}
              </div>
              <div>
                <label className={label} htmlFor="course">Course</label>
                <select id="course" name="course" className={field} defaultValue="">
                  <option value="" disabled>Choose…</option>
                  <option>Noorani Qaida (Beginner)</option>
                  <option>Nazra Quran (Reading)</option>
                  <option>Tajweed Course</option>
                  <option>Hifz (Memorisation)</option>
                  <option>Translation & Tafseer basics</option>
                  <option>Islamic Studies for Kids</option>
                </select>
                {errors.course && <p className="mt-1 text-xs text-destructive">{errors.course}</p>}
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="timing">Preferred class timing (with your timezone)</label>
                <input id="timing" name="timing" className={field} placeholder="e.g. 6pm GMT weekdays, or 4pm EST" />
                {errors.timing && <p className="mt-1 text-xs text-destructive">{errors.timing}</p>}
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="notes">Anything else? (optional)</label>
                <textarea id="notes" name="notes" rows={4} className={field} placeholder="Previous experience, learning goals, questions..." />
              </div>
            </div>
            <button type="submit" className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary-deep px-6 py-4 font-medium text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform">
              <MessageCircle size={18} /> Submit & continue on WhatsApp
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              By submitting, you'll be redirected to WhatsApp with your details prefilled for Nur al-Huda Academy.
            </p>
          </form>
        )}
      </section>
    </div>
  );
}
