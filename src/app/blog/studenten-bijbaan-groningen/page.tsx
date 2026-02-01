// src/app/studenten-bijbaan-groningen/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PUBLISH_DATE = "2026-10-02";
const MODIFIED_DATE = "2026-10-02";
const CANONICAL = "https://studentjobsgroningen.nl/studenten-bijbaan-groningen";
const OG_IMAGE =
  "https://studentjobsgroningen.nl/blog/international-students-looking-for-English-speaking-jobs-near-Groningens-Erasmus-Bridge.jpg";

export const metadata: Metadata = {
  title: "Studenten bijbaan Groningen (2026) – Goed betaald, Engelstalig & weekend",
  description:
    "De ultieme gids voor een studenten bijbaan in Groningen: avond/weekend, Engelstalig, zonder ervaring. Uurloon-tabellen, contractvormen, wijken en snelle filters.",
  keywords: [
    "studenten bijbaan groningen",
    "bijbaan groningen",
    "student jobs groningen",
    "parttime vacatures groningen",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Studenten bijbaan Groningen (2026) – Goed betaald, Engelstalig & weekend",
    description:
      "Pillar-pagina met snelle filters (avond, weekend, Engels, zonder ervaring), uurloon per sector en live vacatures in Groningen.",
    url: CANONICAL,
    type: "article",
    locale: "nl_NL",
    siteName: "Student Jobs Groningen",
    publishedTime: PUBLISH_DATE,
    modifiedTime: MODIFIED_DATE,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studenten bijbaan Groningen (2026) – Goed betaald, Engelstalig & weekend",
    description:
      "Waar vind je snel een bijbaan in Groningen? Bekijk filters, uurloon-tabellen en live vacatures.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function StudentenBijbaanGroningen() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Studenten bijbaan in Groningen: de ultieme gids (2026)
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Door <span className="font-medium">Student Jobs Groningen</span> • Bijgewerkt{" "}
            {new Date(MODIFIED_DATE).toLocaleDateString("nl-NL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* Language toggle / A/B: Read in English */}
          <div className="mt-3">
            <Link
              href="/blog/student-jobs-groningen-complete-guide-2026"
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm underline hover:no-underline"
              aria-label="Read in English"
              data-ab="english-cta"
            >
              Read in English →
            </Link>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border bg-white">
            <Image
              src="/blog/international-students-looking-for-English-speaking-jobs-near-Groningens-Erasmus-Bridge.jpg"
              alt="Studenten bij de Erasmusbrug op zoek naar een (Engelstalige) bijbaan in Groningen"
              width={1280}
              height={720}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Quick filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/jobs?city=Groningen&evening=true" className="rounded-full border px-3 py-1 text-sm underline">
              Avond
            </Link>
            <Link href="/jobs?city=Groningen&weekend=true" className="rounded-full border px-3 py-1 text-sm underline">
              Weekend
            </Link>
            <Link href="/jobs?city=Groningen&noExperience=true" className="rounded-full border px-3 py-1 text-sm underline">
              Zonder ervaring
            </Link>
            <Link href="/jobs?city=Groningen&english=true" className="rounded-full border px-3 py-1 text-sm underline">
              Engels
            </Link>
            <Link href="/jobs?city=Groningen" className="rounded-full border px-3 py-1 text-sm underline">
              Alle vacatures (Groningen)
            </Link>
          </div>
        </header>

        {/* CONTENT + TOC */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* TOC (mobile first) */}
          <nav
            aria-label="Inhoud"
            className="
              order-1 lg:order-2
              lg:sticky lg:top-24 h-max
              rounded-2xl border p-4 bg-slate-50
              text-sm text-slate-700
            "
          >
            <div className="font-semibold">Op deze pagina</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#waar-vinden" className="underline">Waar vind je snel een bijbaan (wijken)</a></li>
              <li><a href="#engels" className="underline">Engelstalige studentenbanen</a></li>
              <li><a href="#roosters" className="underline">Weekend & avond</a></li>
              <li><a href="#zonder-ervaring" className="underline">Zonder ervaring: 10 instapfuncties</a></li>
              <li><a href="#uurloon" className="underline">Uurloon & fooi (tabel)</a></li>
              <li><a href="#contracten" className="underline">Contractvormen</a></li>
              <li><a href="#non-eu" className="underline">Non-EU studenten</a></li>
              <li><a href="#sollicitatie" className="underline">Sollicitatietips + gratis CV</a></li>
              <li><a href="#live-vacatures" className="underline">Live vacatures (Groningen)</a></li>
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
              [&_a]:underline hover:[&_a]:no-underline
            "
          >
            <h2 id="waar-vinden">Waar vind je snel een bijbaan in Groningen (Kralingen/EUR, Centrum, Zuidplein, Waalhaven)</h2>
            <p>
              De snelste matches ontstaan als je dichtbij inzetbaar bent. Begin met{" "}
              <Link href="/jobs?city=Groningen">alle vacatures</Link> en filter op jouw wijk:
            </p>
            <ul>
              <li><strong>Kralingen / EUR</strong>: cafés, bijles, campusbanen, barista.</li>
              <li><strong>Centrum</strong>: horeca, retail, events (festival/locatie).</li>
              <li><strong>Zuidplein</strong>: retail, events, klantenservice.</li>
              <li><strong>Waalhaven / Haven</strong>: logistiek, magazijn, avond-/nachttoeslagen.</li>
            </ul>

            <h2 id="engels">Engelstalige studentenbanen (hospitality, delivery/logistiek, retail, klantenservice)</h2>
            <p>
              Groningen heeft veel <strong>Engelstalige teams</strong>, vooral in hospitality, bezorging/logistiek,
              internationale retail en support. Start hier:{" "}
              <Link href="/jobs?city=Groningen&english=true">Engels-vriendelijke vacatures</Link>.
            </p>

            <h2 id="roosters">Weekend & avond: roosters die naast college passen</h2>
            <ul>
              <li><strong>Avondshifts</strong> (na 17:00) in logistiek, events, horeca.</li>
              <li><strong>Weekend</strong> voor maximale uren zonder college-conflicten.</li>
              <li><strong>Toeslagen</strong>: avond/nacht/weekend + <strong>8% vakantiegeld</strong> (vaak maandelijks/jaarlijks).</li>
            </ul>

            <h2 id="zonder-ervaring">Zonder ervaring: 10 instapfuncties</h2>
            <ul>
              <li>Vakkenvuller</li>
              <li>Afwas / Keukenhulp</li>
              <li>Bezorger (fiets/auto)</li>
              <li>Host/Hostess</li>
              <li>Flyer/promotie</li>
              <li>Runner/bediening</li>
              <li>Magazijnmedewerker</li>
              <li>Kassamedewerker</li>
              <li>Data-labeling (remote)</li>
              <li>Schoonmaak</li>
            </ul>

            <h2 id="uurloon">Uurloon & fooi: realistische ranges per sector</h2>
            <div className="overflow-x-auto rounded-2xl border bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3">Sector</th>
                    <th className="px-4 py-3">Uurloon (bruto)</th>
                    <th className="px-4 py-3">Toeslagen</th>
                    <th className="px-4 py-3">Fooi/Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3">Horeca (barista/bediening)</td>
                    <td className="px-4 py-3">€13 – €16</td>
                    <td className="px-4 py-3">Weekend/avond</td>
                    <td className="px-4 py-3">€1 – €3 p/u (fooi, variabel)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Logistiek / Magazijn</td>
                    <td className="px-4 py-3">€14 – €18</td>
                    <td className="px-4 py-3">Avond/nacht/weekend</td>
                    <td className="px-4 py-3">—</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Bezorging (platform/retail)</td>
                    <td className="px-4 py-3">€13 – €17</td>
                    <td className="px-4 py-3">Weekend/weer</td>
                    <td className="px-4 py-3">Per rit/bonus</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Events / Crew / Lead</td>
                    <td className="px-4 py-3">€13 – €17+</td>
                    <td className="px-4 py-3">Weekend/avond</td>
                    <td className="px-4 py-3">Lead-toeslag</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Retail / Kassamedewerker</td>
                    <td className="px-4 py-3">€13 – €16</td>
                    <td className="px-4 py-3">Zondag/feestdag</td>
                    <td className="px-4 py-3">Personeelskorting</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Klantenservice / Support</td>
                    <td className="px-4 py-3">€14 – €17</td>
                    <td className="px-4 py-3">Avond/weekend</td>
                    <td className="px-4 py-3">Bonus KPI</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Bijles / Tutoring</td>
                    <td className="px-4 py-3">€15 – €22</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3">Extra bij specialisatie</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              Indicatief voor 2026. Werkelijk loon hangt af van leeftijd, ervaring, cao en toeslagen.
            </p>

            <h2 id="contracten">Contractvormen: parttime / tijdelijk / oproep – wat past bij jou?</h2>
            <ul>
              <li><strong>Parttime</strong>: vaste uren per week; voorspelbaar rooster.</li>
              <li><strong>Oproep (0-uren / min-max)</strong>: flexibel; vraag naar minimumuren en opzegtermijn.</li>
              <li><strong>Tijdelijk / Uitzend</strong>: snel starten; let op periode en toeslagen.</li>
            </ul>

            <h2 id="non-eu">Non-EU studenten: urenlimiet, TWV (kort, feitelijk)</h2>
            <p>
              Niet-EU studenten hebben vaak een <strong>urenlimiet tijdens het studiejaar</strong> en een{" "}
              <strong>TWV (tewerkstellingsvergunning)</strong> nodig via werkgever/uitzendbureau. Controleer altijd je
              persoonlijke situatie en de meest recente regels bij officiële bronnen zoals{" "}
              <a href="https://ind.nl" target="_blank" rel="noopener noreferrer" className="underline">IND</a> of{" "}
              <a href="https://www.rijksoverheid.nl/onderwerpen/werken-tijdens-studie" target="_blank" rel="noopener noreferrer" className="underline">
                Rijksoverheid
              </a>.
            </p>

            <h2 id="sollicitatie">Sollicitatietips + gratis CV-template (CTA)</h2>
            <ul>
              <li>Houd je CV <strong>op 1 pagina</strong> met een korte skills-bar (Nederlands A2 / Engels C1 / Barista / Excel).</li>
              <li>Solliciteer <strong>voor 10:00</strong> en <strong>volg dezelfde dag</strong> op.</li>
              <li>Noem <strong>wijken</strong> die je snel bereikt (Kralingen, Centrum, Zuidplein, Waalhaven).</li>
            </ul>
            <div className="rounded-2xl border p-5 bg-white">
              <div className="font-semibold text-lg">Klaar om te starten?</div>
              <p className="mt-1">
                Bekijk <Link href="/jobs?city=Groningen">alle vacatures (Groningen)</Link>,{" "}
                <Link href="/jobs?city=Groningen&english=true">Engels-vriendelijk</Link> of{" "}
                <Link href="/categories">categorieën</Link>. Werkgever?{" "}
                <Link href="/employers">Adverteer je vacature</Link>.
              </p>
              <p className="mt-2 text-sm">
                Gratis CV-template: <Link href="/assets/cv-template-student.pdf">download hier</Link>.
              </p>
            </div>

            <h2 id="live-vacatures">Live vacatures (embed)</h2>
            <p className="text-sm text-slate-600">
              Tip: filter op <Link href="/jobs?city=Groningen&evening=true">avond</Link>,{" "}
              <Link href="/jobs?city=Groningen&weekend=true">weekend</Link>,{" "}
              <Link href="/jobs?city=Groningen&noExperience=true">zonder ervaring</Link>,{" "}
              <Link href="/jobs?city=Groningen&english=true">Engels</Link>.
            </p>
            <div className="rounded-2xl border bg-white p-4">
              {/* Als je een embed-modus hebt, kun je die route gebruiken; anders linkt dit blok door. */}
              <Link href="/jobs?city=Groningen" className="underline">
                Open live vacatures voor Groningen
              </Link>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link href="/categories/hospitality" className="rounded-full border px-3 py-1 text-sm underline">
                  Horeca
                </Link>
                <Link href="/categories/delivery" className="rounded-full border px-3 py-1 text-sm underline">
                  Bezorging / Logistiek
                </Link>
                <Link href="/categories/retail" className="rounded-full border px-3 py-1 text-sm underline">
                  Retail
                </Link>
                <Link href="/categories/events" className="rounded-full border px-3 py-1 text-sm underline">
                  Events
                </Link>
                <Link href="/categories/support" className="rounded-full border px-3 py-1 text-sm underline">
                  Klantenservice
                </Link>
                <Link href="/categories/tutoring" className="rounded-full border px-3 py-1 text-sm underline">
                  Bijles
                </Link>
              </div>
            </div>

            <h2 id="faq">FAQ</h2>
            <h3>Hoeveel uur mag ik werken?</h3>
            <p>
              Veel studenten werken <strong>8–20 uur per week</strong>. Voor Non-EU kunnen er extra beperkingen gelden;
              check officiële bronnen of je werkgever/uitzendbureau.
            </p>

            <h3>Zijn er Engelstalige bijbanen?</h3>
            <p>
              Ja. Vooral in horeca, bezorging/logistiek, retail en klantenservice. Start bij{" "}
              <Link href="/jobs?city=Groningen&english=true">Engels-vriendelijke vacatures</Link>.
            </p>

            <h3>Wat verdient een student in 2026?</h3>
            <p>
              Vaak <strong>€13–€17 per uur</strong> in horeca/logistiek/retail en <strong>€15–€22</strong> voor bijles.
              Toeslagen en fooi kunnen je uurloon verhogen.
            </p>

            <h3>Welke wijken zijn het handigst?</h3>
            <p>
              <strong>Kralingen/EUR</strong> (campus, cafés), <strong>Centrum</strong> (horeca/retail/events),
              <strong> Zuidplein</strong> (retail/events) en <strong>Waalhaven</strong> (logistiek/avond).
            </p>
          </article>
        </div>

        {/* JSON-LD: Article + Breadcrumb + FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Studenten bijbaan Groningen (2026) – Goed betaald, Engelstalig & weekend",
              description:
                "Pillar-gids voor studenten bijbanen in Groningen met snelle filters, uurloon-tabellen, contractvormen en live vacatures.",
              image: OG_IMAGE,
              datePublished: PUBLISH_DATE,
              dateModified: MODIFIED_DATE,
              inLanguage: "nl-NL",
              author: { "@type": "Organization", name: "Student Jobs Groningen", url: "https://studentjobsgroningen.nl/" },
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
                { "@type": "ListItem", position: 1, name: "Home", item: "https://studentjobsgroningen.nl/" },
                { "@type": "ListItem", position: 2, name: "Studenten bijbaan Groningen", item: CANONICAL },
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
                  name: "Hoeveel uur mag ik werken?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Veel studenten werken 8–20 uur per week. Voor Non-EU studenten kunnen extra beperkingen en vergunningseisen gelden; controleer de actuele regels en je persoonlijke situatie.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Zijn er Engelstalige bijbanen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja. Vooral in horeca, bezorging/logistiek, retail en klantenservice. Filter op Engels-vriendelijke vacatures om sneller te matchen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wat verdient een student in 2026?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Doorgaans €13–€17 per uur in horeca/logistiek/retail en €15–€22 voor bijles. Toeslagen (avond/nacht/weekend) en fooi kunnen het uurloon verhogen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welke wijken zijn het handigst?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Kralingen/EUR (campus/cafés), Centrum (horeca/retail/events), Zuidplein (retail/events) en Waalhaven (logistiek/avond).",
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}
