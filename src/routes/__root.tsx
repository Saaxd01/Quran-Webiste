import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl text-primary-deep">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-deep transition-colors">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or return home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-deep">
            Try again
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nur al-Huda Academy — Online Quran & Tajweed Classes" },
      { name: "description", content: "Nur al-Huda Academy offers trusted online Quran and Tajweed classes for kids and teenagers in the UK, USA, Canada, Europe and beyond. Teaching since 2020." },
      { name: "author", content: "Nur al-Huda Academy" },
      { property: "og:title", content: "Nur al-Huda Academy — Online Quran & Tajweed Classes" },
      { property: "og:description", content: "Trusted online Quran and Tajweed classes for kids and teenagers worldwide since 2020." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/fees", label: "Fees" },
  { to: "/apply", label: "Apply" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-gradient shadow-gold">
            <span className="font-display text-lg text-primary-foreground">ٱ</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-medium text-primary-deep tracking-tight">Nur al-Huda Academy</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Online Quran & Tajweed</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary-deep" activeProps={{ className: "text-primary-deep" }} activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/apply" className="rounded-full bg-primary-deep px-5 py-2 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-105">
            Book a trial
          </Link>
        </nav>
        <button className="md:hidden text-primary-deep" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">Nur al-Huda Academy</div>
          <p className="mt-3 text-sm text-primary-foreground/70 max-w-xs">
            Online Quran and Tajweed tuition — delivered with care, accuracy and full attention to every student worldwide since 2020.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map(l => (
              <li key={l.to}><Link to={l.to} className="text-primary-foreground/80 hover:text-gold">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>WhatsApp: <a href="https://wa.me/923452662274" className="hover:text-gold">+92 345 2662274</a></li>
            <li>Email: <a href="mailto:asiyaalirana001@gmail.com" className="hover:text-gold">asiyaalirana001@gmail.com</a></li>
            <li>Serving UK, USA, Canada, Europe & worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Nur al-Huda Academy. All rights reserved.
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
