// src/app/guides/student-jobs-groningen-complete-guide-2026/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PUBLISH_DATE = "2026-10-02";
const MODIFIED_DATE = "2026-10-02";
const CANONICAL =
  "https://studentjobsgroningen.nl/blog/student-jobs-groningen-complete-guide-2026";
const OG_IMAGE =
  "https://studentjobsgroningen.nl/blog/international-students-looking-for-English-speaking-jobs-near-Groningens-Erasmus-Bridge.jpg"; // place /public/guides/placeholder.jpg

export const metadata: Metadata = {
  title:
    "Student Jobs in Groningen — Complete Guide (2026): Visas, Contracts, Wages, Neighborhoods",
  description:
    "A complete, practical guide for student jobs in Groningen: permits, contracts, pay, neighborhoods, CV templates, and where to find English-speaking roles fast.",
  keywords: [
    "student jobs Groningen",
    "English speaking jobs Groningen",
    "student visa work Netherlands",
    "part-time jobs Groningen students",
    "Groningen wages students",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Student Jobs in Groningen — Complete Guide (2026): Visas, Contracts, Wages, Neighborhoods",
    description:
      "Permits, contracts, pay ranges, neighborhoods, and step-by-step tactics to land a student job in Groningen.",
    url: CANONICAL,
    type: "article",
    locale: "en_NL",
    siteName: "Student Jobs Groningen",
    publishedTime: PUBLISH_DATE,
    modifiedTime: MODIFIED_DATE,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Student Jobs in Groningen — Complete Guide (2026): Visas, Contracts, Wages, Neighborhoods",
    description:
      "Everything you need to start working in Groningen as a student — fast and legally.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function GuideComplete() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Student Jobs in Groningen — Complete Guide (2026)
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            By <span className="font-medium">Student Jobs Groningen</span> • Updated{" "}
            {new Date(MODIFIED_DATE).toLocaleDateString("en-NL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border bg-white">
            <Image
              src="/blog/groningen-bike.png"
              alt="groningen-bike"
              width={1280}
              height={720}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </header>

        {/* CONTENT + TOC */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* TOC (mobile first) */}
          <nav
            aria-label="Table of contents"
            className="
              order-1 lg:order-2
              lg:sticky lg:top-24 h-max
              rounded-2xl border p-4 bg-slate-50
              text-sm text-slate-700
            "
          >
            <div className="font-semibold">On this page</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#quickstart" className="underline">Quick-start checklist</a></li>
              <li><a href="#permits" className="underline">Work permits & hours</a></li>
              <li><a href="#contracts-pay" className="underline">Contracts, pay & allowances</a></li>
              <li><a href="#neighborhoods" className="underline">Neighborhoods & commute tips</a></li>
              <li><a href="#categories" className="underline">Best categories for students</a></li>
              <li><a href="#where-to-look" className="underline">Where to find jobs (fast)</a></li>
              <li><a href="#cv-templates" className="underline">CV & message templates</a></li>
              <li><a href="#schedule" className="underline">Weekly schedule that works with classes</a></li>
              <li><a href="#tax-bsn" className="underline">BSN, bank, taxes & payslips</a></li>
              <li><a href="#faq" className="underline">FAQ</a></li>
            </ul>
          </nav>

          {/* ARTICLE */}
          <article
            className="
              order-2 lg:order-1
              max-w-3xl
              space-y-6
              leading-relaxed text-slate-800
              [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold
              [&_h3]:mt-6  [&_h3]:text-xl  [&_h3]:font-semibold
              [&_p]:mt-3   [&_ul]:mt-3   [&_ol]:mt-3
              [&_ul]:list-disc [&_ul]:pl-6
              [&_ol]:list-decimal [&_ol]:pl-6
              [&_a]:underline [&_a]:text-brand-700 hover:[&_a]:text-brand-600
            "
          >
            <h2 id="quickstart">Quick-start checklist</h2>
            <ul>
              <li>Create a <strong>1-page CV</strong> (English or Dutch) with availability block and skills line.</li>
              <li>
                Choose <strong>2–3 categories</strong> to focus on:{" "}
                <Link href="/categories/hospitality">Hospitality</Link>,{" "}
                <Link href="/categories/delivery">Delivery</Link>,{" "}
                <Link href="/categories/fieldwork">Fieldwork</Link>,{" "}
                <Link href="/categories/tutoring">Tutoring</Link>,{" "}
                <Link href="/categories/sales">Sales</Link>.
              </li>
              <li>Apply <strong>before 10:00</strong>, then <strong>follow up the same day</strong>.</li>
              <li>Bring <strong>ID, BSN/appointment, IBAN</strong> and (if needed) residence/work permission.</li>
              <li>
                Save time: <Link href="/jobs">browse all jobs</Link> or{" "}
                <Link href="/jobs?english=true">English-friendly only</Link>.
              </li>
            </ul>

            <h2 id="permits">Work permits & hours</h2>
            <p>Rules differ by nationality and enrollment. As a general orientation (confirm specifics with your employer):</p>
            <ul>
              <li><strong>EU/EEA</strong>: usually free to work; standard Dutch employment rules apply.</li>
              <li>
                <strong>Non-EU</strong>: many students are limited to <strong>~16 h/week during the academic year</strong> (and more in
                summer) with the correct permission. Always verify your personal situation before accepting hours.
              </li>
            </ul>

            <h2 id="contracts-pay">Contracts, pay & allowances</h2>
            <ul>
              <li><strong>Types</strong>: part-time, on-call (0-uren), min-max, or temp/agency. Ask about guaranteed hours.</li>
              <li><strong>Pay</strong>: many student roles pay <strong>€13–€17/h</strong>. Tutoring can reach <strong>€15–€18+/h</strong>.</li>
              <li><strong>Allowances</strong>: evening/night/weekend premiums, travel reimbursements, and <strong>8% holiday pay</strong>.</li>
              <li><strong>Payslip</strong>: check gross vs net, hours, and allowances each month.</li>
            </ul>

            <h2 id="neighborhoods">Neighborhoods & commute tips</h2>
            <p>Groningen is spread out; quick commutes help you keep grades and income balanced:</p>
            <ul>
              <li><strong>Centrum/Markthal</strong>: hospitality/retail density and festivals.</li>
              <li><strong>Kralingen</strong>: near campus; café and tutoring gigs.</li>
              <li><strong>Waalhaven/Port</strong>: logistics & warehouse evening shifts.</li>
              <li><strong>Zuid/Zuidplein</strong>: retail and events; good metro links.</li>
            </ul>

            <h2 id="categories">Best categories for students</h2>
            <ul>
              <li><strong>Hospitality & Events</strong>: fast onboarding and flexible shifts.</li>
              <li><strong>Delivery & Logistics</strong>: reliable pay; evening schedules fit studies.</li>
              <li><strong>Tutoring</strong>: high hourly pay; great for strong English/specific subjects.</li>
              <li><strong>Sales / Support</strong>: international teams value language skills.</li>
            </ul>

            <h2 id="where-to-look">Where to find jobs (fast)</h2>
            <ul>
              <li><Link href="/jobs">Student Jobs Groningen — all jobs</Link></li>
              <li>
                <Link href="/categories">Browse by category</Link> or <Link href="/jobs?english=true">English-friendly only</Link>.
              </li>
              <li><Link href="/employers">Are you a business? Feature your job</Link> (for partners).</li>
            </ul>

            <h2 id="cv-templates">CV & message templates</h2>
            <p>Paste this into your notes/cover field for quick applications:</p>
            <blockquote>
              Hi! I’m a student in Groningen with availability on weekdays after 16:00 and weekends. I have
              customer-facing experience and can start immediately. CV attached. Thanks for your time!
            </blockquote>
            <p>
              Add a one-line skills bar on your CV: <em>English C1 • Dutch A2 • Barista • Excel • Driver’s license B</em>.
              List neighborhoods you can reach (Kralingen, Centrum, Zuidplein).
            </p>

            <h2 id="schedule">Weekly schedule that works with classes</h2>
            <ul>
              <li><strong>Mon–Thu</strong>: 1–2 evening shifts (logistics, retail, hospitality).</li>
              <li><strong>Fri–Sun</strong>: 1–2 day/evening shifts (events, café).</li>
              <li>Keep a stable weekly pattern; managers love predictability.</li>
            </ul>

            <h2 id="tax-bsn">BSN, bank, taxes & payslips</h2>
            <ul>
              <li><strong>BSN</strong>: required for payroll; keep the confirmation from your appointment if still pending.</li>
              <li><strong>Bank/IBAN</strong>: Dutch account speeds up payment.</li>
              <li><strong>Taxes</strong>: students often get refunds; keep payslips and annual statements.</li>
            </ul>

            <div className="rounded-2xl border p-5 bg-white">
              <div className="font-semibold text-lg">Ready to apply?</div>
              <p className="mt-1">
                Start here: <Link href="/jobs">see all jobs</Link>,{" "}
                <Link href="/jobs?english=true">English-friendly only</Link> or{" "}
                <Link href="/categories">browse categories</Link>. Hiring?{" "}
                <Link href="/employers">Feature your job</Link>.
              </p>
            </div>

            <h2 id="faq">FAQ</h2>
            <h3>Is Dutch required?</h3>
            <p>Not always. Hospitality, logistics, delivery, events, and many tutoring roles are English-friendly. Basic Dutch helps for retail.</p>

            <h3>How many hours should I target?</h3>
            <p>Many students do <strong>8–20 h/week</strong>. Confirm any restrictions tied to your residence/permit.</p>

            <h3>What’s a good starting wage?</h3>
            <p>Often <strong>€13–€17/h</strong> for hospitality/logistics and <strong>€15–€18+/h</strong> for tutoring, plus allowances where applicable.</p>
          </article>
        </div>

        {/* JSON-LD: Article + Breadcrumb + FAQ + HowTo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Student Jobs in Groningen — Complete Guide (2026): Visas, Contracts, Wages, Neighborhoods",
              description:
                "Permits, contracts, pay ranges, neighborhoods, and step-by-step tactics to land a student job in Groningen.",
              image: OG_IMAGE,
              datePublished: PUBLISH_DATE,
              dateModified: MODIFIED_DATE,
              author: {
                "@type": "Organization",
                name: "Student Jobs Groningen",
                url: "https://studentjobsgroningen.nl/",
              },
              publisher: { "@type": "Organization", name: "Student Jobs Groningen" },
              mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Blog", item: "https://studentjobsgroningen.nl/blog" },
                { "@type": "ListItem", position: 2, name: "Student Jobs in Groningen — Complete Guide (2026)", item: CANONICAL },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Dutch required?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Not always. Hospitality, logistics, delivery, events, and many tutoring roles are English-friendly. Basic Dutch helps for retail.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How many hours should I target?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Many students do 8–20 hours/week. Confirm restrictions tied to your residence/permit before accepting shifts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What’s a good starting wage?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Often €13–€17/h for hospitality/logistics and €15–€18+/h for tutoring, with evening/night/weekend allowances where applicable.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to quickly land a student job in Groningen",
              image: OG_IMAGE,
              totalTime: "PT2H",
              supply: [
                { "@type": "HowToSupply", name: "1-page CV (PDF)" },
                { "@type": "HowToSupply", name: "ID + BSN/appointment" },
                { "@type": "HowToSupply", name: "IBAN (bank account)" },
              ],
              step: [
                {
                  "@type": "HowToStep",
                  name: "Pick 2–3 categories",
                  text:
                    "Choose roles that match your schedule and language (hospitality, logistics, delivery, tutoring, sales).",
                },
                {
                  "@type": "HowToStep",
                  name: "Apply before 10:00",
                  text:
                    "Send 5–10 targeted applications in the morning; follow up the same day.",
                },
                {
                  "@type": "HowToStep",
                  name: "Use a short message",
                  text:
                    "Paste a 2–3 sentence note highlighting availability and start date; attach your CV.",
                },
                {
                  "@type": "HowToStep",
                  name: "Confirm documents",
                  text:
                    "Bring ID, BSN/appointment letter, IBAN, and any required work permission.",
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}
