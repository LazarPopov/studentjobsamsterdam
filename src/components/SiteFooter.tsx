// src/components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="text-lg sm:text-xl font-semibold">Student Jobs Groningen</div>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Local guides and listings for students in Groningen. English-friendly roles, fast apply tips, and real pay ranges.
          </p>
        </div>

        {/* Explore */}
        <nav aria-label="Footer navigation">
          <div className="font-semibold">Explore</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="underline underline-offset-2">Home</Link></li>
            <li><Link href="/jobs" className="underline underline-offset-2">Jobs</Link></li>
            <li><Link href="/categories" className="underline underline-offset-2">Categories</Link></li>
            <li><Link href="/blog" className="underline underline-offset-2">Blog</Link></li>
            <li><Link href="/employers" className="underline underline-offset-2">Employers</Link></li>
            <li><Link href="/contact" className="underline underline-offset-2">Contact</Link></li>
          </ul>
        </nav>

        {/* Popular reads */}
        <nav aria-label="Popular articles">
          <div className="font-semibold">Popular reads</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/blog/english-speaking-student-jobs-groningen" className="underline underline-offset-2">
                English-Speaking Student Jobs (2026)
              </Link>
            </li>
            <li>
              <Link href="/blog/best-paying-student-jobs-groningen-2026" className="underline underline-offset-2">
                Best-Paying Student Jobs (2026)
              </Link>
            </li>
            <li>
              <Link href="/blog/student-jobs-groningen-complete-guide-2026" className="underline underline-offset-2">
                Complete Guide (2026)
              </Link>
            </li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div>
          <div className="font-semibold">Weekly jobs newsletter</div>
          <p className="mt-2 text-sm text-slate-600">One email per week. Unsubscribe anytime.</p>
          <form action="/api/lead" method="POST" className="mt-3 grid gap-2">
            <input
              name="name"
              placeholder="Your name"
              className="border rounded-xl px-4 py-3 text-sm"
              aria-label="Your name"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="border rounded-xl px-4 py-3 text-sm"
              aria-label="Your email"
              required
            />
            <input type="hidden" name="city" value="groningen" />
            <button
              className="w-full sm:w-auto rounded-xl px-4 py-3 border bg-black text-white text-sm"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {year} Student Jobs Groningen. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="underline underline-offset-2">Privacy</Link>
            <Link href="/terms" className="underline underline-offset-2">Terms</Link>
            <Link href="/sitemap.xml" className="underline underline-offset-2">Sitemap</Link>
            <a href="#main" className="underline underline-offset-2">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
