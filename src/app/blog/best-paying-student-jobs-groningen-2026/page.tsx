// src/app/guides/best-paying-student-jobs-groningen-2026/page.tsx
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const PUBLISH_DATE = "2026-10-02";
const MODIFIED_DATE = "2026-10-02";
const CANONICAL =
  "https://studentjobsgroningen.nl/blog/best-paying-student-jobs-groningen-2026";
const OG_IMAGE =
  "https://studentjobsgroningen.nl/blog/international-students-looking-for-English-speaking-jobs-near-Groningens-Erasmus-Bridge.jpg"; // place /public/guides/placeholder.jpg

export const metadata: Metadata = {
  title:
    "Best-Paying Student Jobs in Groningen (2026) — Shift Types, Industries & Certifications",
  description:
    "Discover the best-paying student jobs in Groningen for 2026: evening/weekend shifts, logistics, tutoring, events lead roles, and certifications like BHV, HACCP, VCA, forklift.",
  keywords: [
    "best paying student jobs Groningen",
    "high paying student jobs Groningen",
    "student wage Groningen",
    "BHV HACCP VCA forklift certificate",
    "evening night weekend allowance Netherlands",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Best-Paying Student Jobs in Groningen (2026)",
    description:
      "Shift types, industries, and certifications that add €€ to your hourly rate — with quick wins for students.",
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
    title: "Best-Paying Student Jobs in Groningen (2026)",
    description:
      "Which student jobs pay the most in Groningen? Get the tactics, categories, and certs to boost your rate fast.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function BestPayingGuide() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Best-Paying Student Jobs in Groningen (2026)
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
              src="/blog/groningen-bridge-photo.png"
              alt="groningen-bridge-photo"
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
              <li>
                <a href="#top-categories" className="underline">
                  Top-paying categories for students
                </a>
              </li>
              <li>
                <a href="#shift-bonuses" className="underline">
                  Shift bonuses that boost pay
                </a>
              </li>
              <li>
                <a href="#certifications" className="underline">
                  Certifications that add €€
                </a>
              </li>
              <li>
                <a href="#quick-wins" className="underline">
                  Quick wins to raise your rate
                </a>
              </li>
              <li>
                <a href="#example-paths" className="underline">
                  Example upgrade paths
                </a>
              </li>
              <li>
                <a href="#apply-now" className="underline">
                  Apply now (high-paying filters)
                </a>
              </li>
              <li>
                <a href="#faq" className="underline">
                  FAQ
                </a>
              </li>
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
            <h2 id="top-categories">Top-paying categories for students</h2>
            <p>
              Actual wages vary by age and experience, but these categories often pay at the higher end for students:
            </p>
            <ul>
              <li>
                <strong>Tutoring / Teaching Assistants</strong> — subject tutors and uni assistant roles can pay well
                thanks to specialized skills. Start here:{" "}
                <Link href="/categories/tutoring">Tutoring jobs</Link>.
              </li>
              <li>
                <strong>Logistics & Port-Adjacent Roles</strong> — evening/late shifts and physical roles can add
                allowances. See <Link href="/categories/delivery">Delivery</Link> and{" "}
                <Link href="/categories/fieldwork">Fieldwork</Link>.
              </li>
              <li>
                <strong>Events (Lead / Team Lead)</strong> — staff with responsibility earn more than entry-level crew.
                Browse <Link href="/categories/events">Events</Link>.
              </li>
              <li>
                <strong>Sales with Commission</strong> — base + bonuses (door-to-door, call/chat, retail add-ons).
                Check <Link href="/categories/sales">Sales</Link>.
              </li>
              <li>
                <strong>Hospitality (Skilled)</strong> — barista or shift lead roles usually pay more than runner/host.
                Explore <Link href="/categories/hospitality">Hospitality</Link>.
              </li>
            </ul>

            <h2 id="shift-bonuses">Shift bonuses that boost pay</h2>
            <p>You can increase your net hourly rate just by choosing the right schedule:</p>
            <ul>
              <li>
                <strong>Evening / Night / Weekend allowances</strong> — common in logistics, warehouses, events,
                hospitality. Check listings for exact percentages or fixed premiums.
              </li>
              <li>
                <strong>Holiday pay (8%)</strong> — often paid monthly or annually on top of the hourly rate.
              </li>
              <li>
                <strong>Travel reimbursements</strong> — matters if you commute to Waalhaven/Port or event sites.
              </li>
            </ul>

            <h2 id="certifications">Certifications that add €€</h2>
            <p>Short, affordable certificates can move you from entry-level to higher-paid shifts:</p>
            <ul>
              <li>
                <strong>BHV</strong> (bedrijfshulpverlening / first aid + emergency response) — useful in
                events/hospitality.
              </li>
              <li>
                <strong>HACCP</strong> — food safety; increases trust for café/restaurant/kitchen roles.
              </li>
              <li>
                <strong>VCA</strong> — safety standard often requested for fieldwork/logistics/event build-up.
              </li>
              <li>
                <strong>Forklift (heftruck)</strong> — relevant for warehouses; tends to unlock higher-paying slots.
              </li>
              <li>
                <strong>Barista training</strong> — moves you up the hospitality ladder quickly.
              </li>
            </ul>
            <p className="text-sm text-slate-600">
              Tip: ask employers if they’ll sponsor or reimburse certifications after a probation period.
            </p>

            <h2 id="quick-wins">Quick wins to raise your rate</h2>
            <ul>
              <li>
                <strong>Target evening/weekend shifts</strong> in logistics or events for allowances.
              </li>
              <li>
                <strong>Pitch availability upfront</strong> (reliability ⇒ better shifts). Use our template in
                applications.
              </li>
              <li>
                <strong>List neighborhoods</strong> you can reach fast (Centrum, Kralingen, Zuidplein, Waalhaven).
              </li>
              <li>
                <strong>Upgrade one skill</strong> in 1–2 weeks (barista, BHV, VCA) and ask for lead or premium shifts.
              </li>
              <li>
                <strong>Add English + basic Dutch</strong> on your CV (A2) — it unlocks more roles and duties.
              </li>
            </ul>

            <h2 id="example-paths">Example upgrade paths</h2>
            <ol>
              <li>
                <strong>Hospitality runner → Barista → Shift lead</strong>: take a weekend barista course, then ask to
                be scheduled on machine + close shifts (usually higher pay).
              </li>
              <li>
                <strong>Warehouse picker → Forklift-certified</strong>: get a short forklift course and move to
                higher-paying stations.
              </li>
              <li>
                <strong>Event crew → Team lead</strong>: do BHV and volunteer to brief teams; leads typically earn more.
              </li>
              <li>
                <strong>Good grades → Tutor</strong>: start with general tutoring, then specialize (math, programming,
                languages) for higher rates.
              </li>
            </ol>

            <h2 id="apply-now">Apply now (high-paying filters)</h2>
            <div className="rounded-2xl border p-5 bg-white">
              <div className="font-semibold text-lg">Ready to earn more?</div>
              <p className="mt-1">
                Start here: <Link href="/jobs">see all jobs</Link>,{" "}
                <Link href="/jobs?english=true">English-friendly only</Link>, and browse{" "}
                <Link href="/categories">categories</Link>. If you’re an employer,{" "}
                <Link href="/employers">feature your job</Link>.
              </p>
            </div>

            <h2 id="faq">FAQ</h2>
            <h3>Which student jobs pay the most in Groningen?</h3>
            <p>
              Often tutoring, logistics evening/night shifts, event leads, and sales with commission. Skilled
              hospitality (barista/lead) also earns more than entry roles.
            </p>

            <h3>How can I quickly increase my hourly rate?</h3>
            <p>
              Target shifts with allowances, get a short certificate (BHV, VCA, forklift, barista), and ask for duties
              with responsibility (team lead, machine operator, keyholder).
            </p>

            <h3>Do certifications really matter?</h3>
            <p>
              Yes. They signal safety and responsibility, letting managers schedule you on better-paid tasks/shifts.
            </p>
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
                "Best-Paying Student Jobs in Groningen (2026) — Shift Types, Industries & Certifications",
              description:
                "Shift types, industries, and certifications that add €€ to your hourly rate as a student in Groningen.",
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
                { "@type": "ListItem", position: 1, name: "Guides", item: "https://studentjobsgroningen.nl/blogs" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Best-Paying Student Jobs in Groningen (2026)",
                  item: CANONICAL,
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
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Which student jobs pay the most in Groningen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Tutoring, logistics evening/night shifts, event leads, and sales with commission. Skilled hospitality (barista/lead) also pays above entry level.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I quickly increase my hourly rate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Target shifts with allowances, obtain short certifications (BHV, VCA, forklift, barista), and ask for higher-responsibility duties like team lead.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do certifications really matter?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—certifications signal safety and responsibility, enabling managers to assign higher-paying tasks and shifts.",
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
              name: "How to boost your student wage in Groningen in 2 weeks",
              image: OG_IMAGE,
              totalTime: "P14D",
              supply: [
                { "@type": "HowToSupply", name: "1-page CV (PDF)" },
                { "@type": "HowToSupply", name: "BHV or VCA short course" },
                { "@type": "HowToSupply", name: "Availability plan (evenings/weekends)" },
              ],
              step: [
                {
                  "@type": "HowToStep",
                  name: "Pick a higher-paying category",
                  text:
                    "Choose logistics evening shifts, tutoring, events lead, or sales with commission based on your strengths.",
                },
                {
                  "@type": "HowToStep",
                  name: "Get a quick certification",
                  text:
                    "Complete BHV, VCA, forklift, or barista training to unlock premium shifts and responsibilities.",
                },
                {
                  "@type": "HowToStep",
                  name: "Apply with targeted availability",
                  text:
                    "Submit applications before 10:00, highlight evening/weekend availability, and follow up the same day.",
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}
