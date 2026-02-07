// src/data/jobs.ts
// Central job data + helpers (Amsterdam). Auto-builds `shortDescrition` to include per-gig/per-sale amount + a concise text from `descriptionHtml`.
// Also adds a place for a per-listing logo (logoUrl/logoAlt).

// src/data/jobs.ts — add an external URL for outbound clicks
export type Employment =
  | "PART_TIME"
  | "FULL_TIME"
  | "CONTRACTOR"
  | "TEMPORARY"
  | "INTERN"
  | "VOLUNTEER";

export type JobRecord = {
  slug: string;
  title: string;
  orgName: string;
  descriptionHtml: string;
  shortDescrition: string;
  employmentType: Employment;
  baseSalaryMin?: number;
  baseSalaryMax?: number;
  currency?: "EUR";
  payUnit?: "HOUR" | "MONTH";
  addressLocality: "Amsterdam";
  addressRegion?: string;
  postalCode?: string;
  streetAddress?: string;
  area?: string;
  englishFriendly?: boolean;
  DUO?: boolean;
  workHours?: string;
  datePosted: string;
  validThrough?: string;
  categories: ("delivery" | "sales" | "hospitality" | "retail" | "tutoring" | "events" | "fieldwork")[];
  featured?: boolean;

  // NEW: clicking the card can go to this website if provided
  externalUrl?: string;

  // existing logo fields (already added earlier)
  perGigAmount?: number;
  perSaleAmount?: number;
  perGigAmountText?: string;
  perSaleAmountText?: string;
  logoUrl?: string;
  logoAlt?: string;
  heroImageUrl?: string; // example: "/blog/some-image.jpg" or "/jobs/pepperminds.jpg"
  heroImageAlt?: string;
  brandColor?: string; // example: "#E11D48" (remove it and the site uses default styling)
};

// ---- helpers to build shortDescrition from descriptionHtml + amounts ----
function stripHtml(html: string): string {
  // quick HTML -> text (collapse whitespace)
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstSentence(text: string, maxLen = 180): string {
  const dot = text.indexOf(".");
  if (dot !== -1 && dot < maxLen) return text.slice(0, dot + 1);
  return text.length > maxLen ? text.slice(0, maxLen - 1) + "…" : text;
}

function money(n?: number) {
  return typeof n === "number" && n > 0 ? `€${n.toString()}` : null;
}

function makeShortDescription(job: Partial<JobRecord>): string {
  const parts: string[] = [];

  // Prefer numeric amounts; fall back to text labels if provided.
  if (typeof job.perGigAmount === "number" && job.perGigAmount > 0) {
    parts.push(`${money(job.perGigAmount)} per gig`);
  } else if (job.perGigAmountText) {
    parts.push(`${job.perGigAmountText}`);
  }

  if (typeof job.perSaleAmount === "number" && job.perSaleAmount > 0) {
    parts.push(`${money(job.perSaleAmount)} per sale`);
  } else if (job.perSaleAmountText) {
    parts.push(`${job.perSaleAmountText}`);
  }

  const desc = firstSentence(stripHtml(job.descriptionHtml || ""));
  if (desc) parts.push(desc);

  return parts.join(" — ");
}

// ---- Define raw jobs (without shortDescrition), then map to final JOBS with computed shortDescrition ----
type RawJob = Omit<JobRecord, "shortDescrition">;

const RAW_JOBS: RawJob[] = [
  {
  slug: "domakin-agent-amsterdam",
  title: "Domakin Student Agent",
  orgName: "Domakin",
  descriptionHtml:
    "<p><strong>Domakin helps students in the Netherlands find housing.</strong> If you want a flexible role that makes a visible impact, and teaches you real communication and sales skills, this is it.</p>" +
    "<p>As a <strong>Domakin Agent</strong>, you combine two core missions:</p>" +
    "<ul>" +
    "<li><strong>Viewing Agent</strong>: attend property viewings on behalf of students who cannot be present, and report back with clear notes and photos.</li>" +
    "<li><strong>Property Seeker</strong>: help students find accommodation by sourcing rooms and studios, verifying the details, and guiding them through the process.</li>" +
    "</ul>" +
    "<h3>What you will do</h3>" +
    "<ul>" +
    "<li><strong>Remote viewings</strong>: go to properties in your area, take photos, check key points (registration, condition, neighborhood), and send a structured summary to the student.</li>" +
    "<li><strong>Property sourcing</strong>: find rooms and apartments, message or call landlords, confirm registration possibility, price, availability, and upload verified options to our system.</li>" +
    "<li><strong>Student support</strong>: help students move fast, make informed decisions, and avoid scams.</li>" +
    "<li><strong>Sales training</strong>: we train you to confidently pitch our process to landlords and students, including how we handle room listings and successful takeovers.</li>" +
    "</ul>" +
    "<h3>Time and compensation</h3>" +
    "<ul>" +
    "<li><strong>Per viewing</strong>: typically <strong>€20 to €40</strong>, and most viewings take <strong>up to 30 minutes</strong> on site (plus travel).</li>" +
    "<li><strong>Per room result</strong>: <strong>€200</strong> flat per room listing or match, with opportunities <strong>up to €300</strong> for a successful takeover, depending on the deal.</li>" +
    "<li><strong>Flexible schedule</strong>: take tasks when you want, scale up during busy periods.</li>" +
    "</ul>" +
    "<h3>Who this is for</h3>" +
    "<ul>" +
    "<li>Proactive and social people who can follow up consistently</li>" +
    "<li>Comfortable walking into viewings and asking direct questions</li>" +
    "<li>English friendly, international students welcome</li>" +
    "</ul>" +
    "<p><strong>How to apply:</strong> Send a message via the contact form on our website. Write <strong>“Domakin for the win”</strong> and include your email. We will reach out to schedule a short interview.</p>" +
    "<p><strong>Do work that matters.</strong> Every viewing and every verified room can be the difference between a student having a home, or being stuck for months.</p>",
  employmentType: "PART_TIME",
  currency: "EUR",
  addressLocality: "Amsterdam",
  area: "All around the Netherlands",
  englishFriendly: true,
  workHours: "6 to 20 h/week, flexible",
  datePosted: new Date().toISOString().slice(0, 10),
  validThrough: "2026-12-31",
  categories: ["sales", "fieldwork"],
  featured: true,

  // Commission style fields (clearer than hourly for this role)
  perGigAmount: 30,
  perGigAmountText: "€20 to €40 per remote viewing (avg. up to 30 min on site)",
  perSaleAmount: 200,
  perSaleAmountText: "€200 per room listing or match, up to €300 for a successful takeover",

  logoUrl: "/logos/domakin.png",
  logoAlt: "Domakin logo",
  // externalUrl: "https://www.domakin.nl/careers",
},
{
  slug: "ib-tutor",
  title: "IB Tutor (Online)",
  orgName: "AcademiaAI",

  descriptionHtml:
    "<p><strong>Earn well per hour</strong> while working flexibly as an IB tutor with AcademiaAI. You can start with as little as <strong>1 hour per week</strong>, or scale up and earn a substantial monthly income.</p>" +
    "<br>"+
    "<p>At AcademiaAI, you tutor only within your <strong>area of expertise</strong>. For example, an IB graduate who scored a 6 or 7 in Math AA HL and is studying or has completed a related university degree can tutor DP Math, but not DP Biology. This ensures <strong>high-quality lessons</strong>, which our students truly value.</p>" +
    "<br>"+
    "<p>We hire IB graduate tutors throughout the year. Once accepted, you can start tutoring quickly.</p>" +  
    "<br>"+
    "<p>When you apply please let us know: </p>"+
    "<p><strong>City of residence</strong></p>" +
    "<p><strong>Country of residence</strong></p>" +
    "<p><strong>Did you graduate from IB?</strong></p>" +
    "<p><strong>Have you graduated from the International Baccalaureate Diploma Programme (IB DP)?</strong></p>" +
    "<p><strong>Current and completed university studies</strong></p>" +
    "<br>"+
    "<p>Interested? Apply now and start tutoring with AcademiaAI!</p>",



  baseSalaryMin: 20,
  baseSalaryMax: 40,
  employmentType: "PART_TIME",
  DUO: true,
  currency: "EUR",
  payUnit: "HOUR",
  addressLocality: "Amsterdam",
  area: "Online tutoring",
  englishFriendly: true,
  workHours: "1–20 h/week",
  datePosted: new Date().toISOString().slice(0, 10),
  validThrough: "2026-12-31",
  categories: ["tutoring"],
  featured: true,
  perSaleAmountText: "High hourly pay depending on subject and experience",
  logoUrl: "/logos/academiaAI.png",
  logoAlt: "AcademiaAI logo",
},
    {
    slug: "pepperminds-door-to-door-sales-amsterdam",
    title: "Door-to-Door Sales",
    orgName: "Pepperminds",
  
    descriptionHtml:
     "<p><strong>Earn €150 per shift</strong> as part of Pepperminds’ door-to-door team in Amsterdam. We mix the <em>personal touch in a digital era</em> with energy, coaching, and paid training so you can grow fast and earn even faster.</p><ul><li><strong> Dutch is not required</strong>, and you can even receive DUO… if you work enough hours of course 😉</li><li><strong>The better you are, the more you earn!</strong> You start as a rookie, grow into a promoter, and can become a captain — with performance bonuses reaching up to <strong>€500 a day!</strong></li><li><strong>Learn real sales</strong> — your colleagues are students from all kinds of backgrounds, and together you’ll master the most versatile skill out there: sales!</li><li><strong>Challenge yourself</strong> — every day is different, full of teamwork, laughter, and growth.</li><li><strong>After work culture</strong> — we even have our own bar where the team celebrates wins and unwinds together!</li></ul><p>Ready to test your limits, make friends, and earn like a pro? <strong>Join the crew and start this week!</strong></p>",    baseSalaryMin: 12,
    employmentType: "PART_TIME",
    baseSalaryMax: 20,
    DUO: true,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Amsterdam",
    area: "Various districts",
    englishFriendly: false,
    workHours: "10–20 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["sales", "fieldwork"],
    featured: true,
    // unknown numeric commission -> use text fallback
    perSaleAmountText: "150 еuros per shift",
    logoUrl: "/logos/pepperminds.jpeg",
    logoAlt: "Pepperminds logo",
    // externalUrl: "https://www.pepperminds.nl/makeithappen/?mkt=LZ&utm_source=viavia&utm_medium=crewapp&utm_campaign=makeithappen",
  },

   {
  slug: "thuisbezorgd-takeaway-courier-netherlands",
  title: "Food Delivery",
  orgName: "Thuisbezorgd.nl",
descriptionHtml: "<p><strong>Are you tired of endless study sessions and sitting behind your laptop all day?</strong> This job is your perfect excuse to get outside, stay active, and earn solid money while exploring your city! Join <strong>Thuisbezorgd.nl</strong> as a Food Delivery Courier — hop on your bike, scooter, or car, and deliver happiness (and food) straight to hungry customers.</p><ul><li><strong>Flexible schedule</strong> — choose your own working hours so you can balance lectures, gym time, and parties 🍕🚴‍♂️</li><li><strong>Reliable income</strong> — hourly pay + tips + bonuses (and yes, rainy-day deliveries pay even better 😉)</li><li><strong>DUO-friendly</strong> — work enough hours and you can qualify for <strong>study financing (DUO)</strong> while keeping your freedom!</li><li><strong>Requirements</strong> — smartphone with data and your own bike, scooter, or car</li><li><strong>Perfect for students</strong> — stay fit, meet people, and make money on your own schedule</li></ul><p>Ready to swap your desk for the open road? <strong>Join Thuisbezorgd.nl and start earning this week!</strong></p>",  employmentType: "PART_TIME",
  baseSalaryMin: 12,
  baseSalaryMax: 15,
  DUO: true,
  currency: "EUR",
  payUnit: "HOUR",
  addressLocality: "Amsterdam",
  area: "Citywide / Multiple cities",
  englishFriendly: true,
  workHours: "Flexible shifts, 6–30 h/week",
  datePosted: new Date().toISOString().slice(0, 10),
  validThrough: "2026-12-31",
  categories: ["delivery", "fieldwork"],
  featured: true,
  perSaleAmountText: "14 euros per hour",
  logoUrl: "/logos/thuisbezorgd.png",
  logoAlt: "Thuisbezorgd.nl logo",
  externalUrl: "http://short.takeaway.com/nl355999758"
},

  {
slug: "uber-eats-courier-amsterdam",
title: "Uber Eats Courier",
orgName: "Uber",
descriptionHtml:
"<p><strong>Earn on your own schedule</strong> delivering with the Uber app in Amsterdam. Be your own boss, choose when you work, and track your earnings in real time.</p><p><strong>Limited-time promo:</strong> <strong>Receive an extra €750</strong> after you sign up and complete <strong>50 trips within 90 days</strong>. *Eligibility applies; see additional terms on Uber’s site.</p><ul><li><strong>Flexible hours</strong> — ride when it suits you (great alongside studies or another job).</li><li><strong>Fast onboarding</strong> — easy sign-up and start delivering once you’re approved.</li><li><strong>Real-time earnings</strong> — see trip totals live and cash out with available payout options.</li><li><strong>Multiple modes</strong> — deliver by bike, scooter, or car (requirements vary by city).</li><li><strong>Refer & earn</strong> — invite friends to drive or deliver and earn once they complete trips.</li></ul><p><strong>Join today</strong> and start delivering in Amsterdam — the city’s always moving.</p>",
baseSalaryMin: 12,
employmentType: "PART_TIME",
baseSalaryMax: 25,
DUO: true,
currency: "EUR",
payUnit: "HOUR",
addressLocality: "Amsterdam",
area: "Amsterdam & nearby districts",
englishFriendly: true,
workHours: "Flexible — you choose",
datePosted: new Date().toISOString().slice(0, 10),
validThrough: "2026-12-31",
categories: ["delivery"],
featured: false,
perSaleAmountText: "€750 sign-up reward after 50 trips (within 90 days; terms apply)",
logoUrl: "/logos/uber.png",
logoAlt: "Uber logo",
// externalUrl: "https://www.uber.com/signup/drive/deliver/?invite_code=a6cpc37",
}
]
// Paste into src/data/jobs.ts (after RAW_JOBS is defined)
// Add these external jobs (none featured), then push into RAW_JOBS.

const NEW_JOBS: RawJob[] = [
  {
    slug: "picnic-delivery-driver-Amsterdam",
    title: "Picnic Delivery Driver (Amsterdam area)",
    orgName: "Picnic",
    descriptionHtml:
      "<p>Deliver groceries from a Picnic hub, tips on top, weekly pay, and flexible scheduling.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 9.88,
    baseSalaryMax: 15.96,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Amsterdam",
    workHours: "16 to 40 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["delivery"],
    externalUrl: "https://jobs.picnic.app/en/vacancies/delivery-driver-nl",
  },

  {
    slug: "albert-heijn-medewerker-allround-Amsterdam",
    title: "Albert Heijn Medewerker Allround (Store shifts)",
    orgName: "Albert Heijn",
    descriptionHtml:
      "<p>Allround supermarket role: shelves, self scan area, produce, and service. Varied store shifts and lots of teamwork.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    workHours: "Flexible store shifts",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["retail"],
    externalUrl: "https://werk.ah.nl/vacature/12051/medewerker-allround-5",
  },
  {
    slug: "albert-heijn-stock-associate-Amsterdam",
    title: "Albert Heijn Stock Associate (Amsterdam)",
    orgName: "Albert Heijn",
    descriptionHtml:
      "<p>Stock and shelf replenishment in store. Flexible hours and a classic student friendly retail job.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    workHours: "Flexible",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["retail"],
    externalUrl: "https://werk.ah.nl/en/vacancy/38370/stock-associate-60",
  },
  {
    slug: "primark-verkoopmedewerker-damrak-Amsterdam",
    title: "Primark Verkoopmedewerker (Amsterdam Damrak)",
    orgName: "Primark",
    descriptionHtml:
      "<p>Retail assistant role in the Amsterdam store, customer help, stock, and keeping the shop floor tidy. Part time roles listed on Primark careers.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    workHours: "Part time",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["retail"],
    externalUrl: "https://careers.primark.com/en/location/amsterdam-jobs/8171/2750405-2749879-2759794/4",
  },
  {
    slug: "decathlon-verkoopmedewerker-Amsterdam",
    title: "Decathlon Verkoopmedewerker (Amsterdam)",
    orgName: "Decathlon",
    descriptionHtml:
      "<p>Help customers with sport advice, keep shelves stocked, support inventory and freight flow. Retail job in Amsterdam.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    workHours: "Store shifts, typically evenings and weekends",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["retail"],
    externalUrl: "https://www.werkenbijdecathlon.nl/vacatures/verkoopmedewerker-amsterdam-5654553",
  },
  {
    slug: "coffeecompany-barista-amsterdam-oost-Amsterdam",
    title: "Barista Coffeecompany Amsterdam Oost",
    orgName: "Coffeecompany (via Albron)",
    descriptionHtml:
      "<p>Flexible barista job that pairs well with studying. Learn coffee skills and work in a fast paced team.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    workHours: "Flexible",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl: "https://www.werkenbijalbron.nl/vacatures/barista-coffeecompany-amsterdam-oost-amsterdam-1129740",
  },
  {
    slug: "bagels-beans-allround-medewerker-Amsterdam",
    title: "Bagels and Beans Allround Medewerker (Amsterdam)",
    orgName: "Bagels and Beans",
    descriptionHtml:
      "<p>Daytime hospitality role: service, prep, coffee, and team support. Multiple Amsterdam locations recruit via the Bagels and Beans job site.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    workHours: "Day shifts, usually no late evenings",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl: "https://www.werkenbijbagelsbeans.nl/",
  },
  {
    slug: "starbucks-barista-amsterdam-zuid-cs-Amsterdam",
    title: "Barista Starbucks Amsterdam Zuid CS",
    orgName: "SSP (Starbucks store)",
    descriptionHtml:
      "<p>Barista role at a Starbucks location in Amsterdam. Customer focused work, training, and shift flexibility.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 14.91,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Amsterdam",
    workHours: "Shifts, weekend availability commonly requested",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl: "https://nl.indeed.com/q-barista-starbucks-l-amsterdam-vacatures.html",
  },
  {
    slug: "sales-promotor-rai-Amsterdam",
    title: "Sales Promotor at RAI (Amsterdam)",
    orgName: "YoungCapital (RAI assignment)",
    descriptionHtml:
      "<p>Demonstrate products on the RAI floor and engage visitors. Listed pay is €15 per hour.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 15.0,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Amsterdam",
    workHours: "32 to 40 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["sales", "events"],
    externalUrl: "https://www.youngcapital.nl/vacatures/5701070-fulltime-sales-promotor-in-amsterdam-15-p-u",
  },
  {
    slug: "johan-cruijff-arena-steward-host-Amsterdam",
    title: "Johan Cruijff ArenA Event Crew (Steward, Host, Bar)",
    orgName: "Randstad (Johan Cruijff ArenA)",
    descriptionHtml:
      "<p>Work matches and concerts as event crew. Typical student setup with a few events per month and short shifts per event.</p>",
    employmentType: "TEMPORARY",
    addressLocality: "Amsterdam",
    workHours: "2 to 5 events per month, about 4.5 hours per event",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["events"],
    externalUrl: "https://www.randstad.nl/werknemers/vacatures/topwerkgevers/johan-cruijff-arena",
  },
  {
    slug: "pal-voor-de-klas-teaching-assistant-Amsterdam",
    title: "PAL voor de Klas (Teaching Assistant) via UvA and VU",
    orgName: "PAL voor de Klas",
    descriptionHtml:
      "<p>Support teachers at a secondary school: assist in class, help with tutoring and materials. About 8 hours per week, pay mentioned as at least €11 per hour.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 11.0,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Amsterdam",
    workHours: "About 8 h/week (minimum availability typically 4 h/week)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["tutoring"],
    externalUrl: "https://student.uva.nl/informatie/assisteren-bij-onderwijs",
  },
  {
    slug: "rai-flexpool-event-crew-Amsterdam",
    title: "RAI Flexpool (Event crew, hospitality, floor support)",
    orgName: "RAI Amsterdam",
    descriptionHtml:
      "<p>Work flexible event shifts at RAI Amsterdam via their flex routes. Roles vary per event and department.</p>",
    employmentType: "TEMPORARY",
    addressLocality: "Amsterdam",
    workHours: "Event based shifts",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["events", "hospitality"],
    externalUrl: "https://careers.rai.nl/departments/flex",
  },
];

RAW_JOBS.push(...NEW_JOBS);
const NEW_JOBS2: RawJob[] = [
  {
    slug: "goodnews-barista-staff-Amsterdam",
    title: "Barista / Staff (GoodNews Amsterdam)",
    orgName: "GoodNews",
    descriptionHtml:
      "<p>Barista and shop staff role in Amsterdam. Customer service, coffee prep, opening/closing, and occasional brand activations. English is recommended and pay is listed as €14.71 gross per hour.</p>",
    employmentType: "PART_TIME",
    baseSalaryMin: 14.71,
    baseSalaryMax: 14.71,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Amsterdam",
    englishFriendly: true,
    workHours: "13 to 32.5 h/week (multiple contract options)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://careers.goodnewsco.es/jobs/4270410-barista-staff-at-goodnews-amsterdam",
  },
  {
    slug: "social-hub-front-office-host-Amsterdam-west",
    title: "Front Office Host (Amsterdam West)",
    orgName: "The Social Hub",
    descriptionHtml:
      "<p>Guest facing front of house role: welcome, self check-in kiosk help, bookings support, and service in bars and restaurant areas. Fluent English is required.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    area: "Amsterdam West",
    englishFriendly: true,
    workHours: "Shifts",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl: "https://job-boards.eu.greenhouse.io/thesocialhub/jobs/4728264101",
  },
  {
    slug: "meininger-receptionist-Amsterdam-city-west",
    title: "Receptionist (Amsterdam City West)",
    orgName: "MEININGER Hotels",
    descriptionHtml:
      "<p>Hotel reception role in Amsterdam City West. Guest service, check-in/out, and front desk support in an international environment. Listed as NL/EN.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    area: "City West",
    englishFriendly: true,
    workHours: "Shifts (part time)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://www.hotelprofessionals.nl/en/job/receptionist-fmd-amsterdam-173484",
  },
  {
    slug: "holiday-inn-express-fb-attendant-amsterdam-noord-riverside",
    title: "Food and Beverage Attendant (Amsterdam Noord Riverside)",
    orgName: "Holiday Inn Express (Odyssey Hotel Group)",
    descriptionHtml:
      "<p>Food and beverage team role with breakfast, bar, and dinner service support. Good fit for students who like morning shifts and fast paced hospitality.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    area: "Noord",
    englishFriendly: true,
    workHours: "Morning focused shifts",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://www.hotelprofessionals.nl/en/job/food-and-beverage-attendant-amsterdam-173854",
  },
  {
    slug: "spirit-receptionist-european-medicines-agency-Amsterdam",
    title: "Receptionist (European Medicines Agency)",
    orgName: "Spirit Hospitality Services",
    descriptionHtml:
      "<p>Receptionist role at the European Medicines Agency in Amsterdam. International environment and fluent English is required.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    englishFriendly: true,
    workHours: "Part time",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["hospitality"],
    externalUrl:
      "https://www.spirit-hospitality.nl/vacancies/receptionist-at-the-european-medicines-agency/",
  },
  {
    slug: "flagship-host-bartender-canal-cruise-Amsterdam",
    title: "Host and Bartender (Canal Cruise, start March 2026)",
    orgName: "Flagship Amsterdam",
    descriptionHtml:
      "<p>Host and bartender on canal cruises. Weekend availability is the basis, with extra weekday shifts depending on tourism and weather. Good command of English is required and Dutch is a plus.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    englishFriendly: true,
    workHours: "Mostly weekends, seasonal",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["events", "hospitality"],
    externalUrl:
      "https://werkenbijflagshipamsterdam.recruitee.com/l/en/o/hostbartender-op-rondvaartboot-in-amsterdam-startdatum-maart-2026?lang=en",
  },
  {
    slug: "abike-shop-assistant-sales-tiger-Amsterdam",
    title: "Shop Assistant (Sales, part time)",
    orgName: "A-Bike Rental and Tours",
    descriptionHtml:
      "<p>Bike rental shop assistant role in Amsterdam locations. Customer help, contracts, recommendations, and sales focused support. Fluency in English is listed as required.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    englishFriendly: true,
    workHours: "8 to 20 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["retail", "sales"],
    externalUrl: "https://a-bike.nl/join-our-team-at-a-bike/",
  },
  {
    slug: "abike-bike-mechanic-part-time-Amsterdam",
    title: "Bike Mechanic (part time)",
    orgName: "A-Bike Rental and Tours",
    descriptionHtml:
      "<p>Part time bike mechanic role for rentals and tours. Basic bike repairs and keeping the fleet tour ready. English is listed as required and Dutch is a plus.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    englishFriendly: true,
    workHours: "8 to 20 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["retail"],
    externalUrl: "https://a-bike.nl/join-our-team-at-a-bike/",
  },
  {
    slug: "abike-tour-guide-part-time-Amsterdam",
    title: "Tour Guide (bike tours, part time)",
    orgName: "A-Bike Rental and Tours",
    descriptionHtml:
      "<p>Lead bike tours through Amsterdam landmarks and hidden gems. Outdoor work with tourists and storytelling. Part time options are listed.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    englishFriendly: true,
    workHours: "8 to 20 h/week",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["events"],
    externalUrl: "https://a-bike.nl/join-our-team-at-a-bike/",
  },
  {
    slug: "macbike-rental-officer-seasonal-Amsterdam",
    title: "Rental Officer (seasonal, bike rental shops)",
    orgName: "MacBike",
    descriptionHtml:
      "<p>Seasonal shop role helping customers with rentals, safety advice, bike adjustments, and minor repairs. The role asks for excellent English and other languages are a plus.</p>",
    employmentType: "TEMPORARY",
    addressLocality: "Amsterdam",
    englishFriendly: true,
    workHours: "Seasonal shifts",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["retail", "sales"],
    externalUrl: "https://www.macbike.nl/en/about-us/vacature-verhuurder-en/",
  },
  {
    slug: "360amsterdamtours-tour-guide-freelance-Amsterdam",
    title: "Tour Guide (freelance)",
    orgName: "360 Amsterdam Tours",
    descriptionHtml:
      "<p>Outdoor tour guide role for visitors in Amsterdam. The listing mentions €30 to €40 per hour freelance and requires a valid work permit plus KvK registration.</p>",
    employmentType: "TEMPORARY",
    baseSalaryMin: 30,
    baseSalaryMax: 40,
    currency: "EUR",
    payUnit: "HOUR",
    addressLocality: "Amsterdam",
    englishFriendly: true,
    workHours: "Flexible (freelance)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["events"],
    externalUrl: "https://360amsterdamtours.com/jobs/",
  },
  {
    slug: "heineken-experience-retail-internship-Amsterdam",
    title: "Retail Internship (Heineken Experience Flagship Store)",
    orgName: "HEINEKEN",
    descriptionHtml:
      "<p>Full time retail internship based in Amsterdam with a listed monthly allowance of €650 gross (40 hours). Starting in March, duration 6 months.</p>",
    employmentType: "TEMPORARY",
    baseSalaryMin: 650,
    currency: "EUR",
    payUnit: "MONTH",
    addressLocality: "Amsterdam",
    englishFriendly: true,
    workHours: "40 h/week (internship)",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["retail"],
    externalUrl:
      "https://careers.theheinekencompany.com/TheNetherlands/job/Amsterdam-Internship-Retail-Heineken-Experience-Flagship-Store/1288588101/",
  },
  {
    slug: "redbull-student-marketeer-Amsterdam",
    title: "Student Marketeer (Amsterdam)",
    orgName: "Red Bull",
    descriptionHtml:
      "<p>Student marketing and brand activation role. Typical student friendly setup tied to campus life and events, listed for Amsterdam.</p>",
    employmentType: "PART_TIME",
    addressLocality: "Amsterdam",
    englishFriendly: true,
    workHours: "Part time",
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: "2026-12-31",
    categories: ["sales", "events"],
    externalUrl: "https://nl.linkedin.com/jobs/view/student-marketeer-amsterdam-at-red-bull-4210538771",
  },
];

RAW_JOBS.push(...NEW_JOBS2);


export const JOBS: JobRecord[] = RAW_JOBS.map((j) => ({
  ...j,
  shortDescrition: makeShortDescription(j),
}));

// helper lookups
export function getJobBySlug(slug: string) {
  return JOBS.find((j) => j.slug === slug) || null;
}
export function listJobs() {
  return JOBS;
}
export function listFeaturedJobs() {
  return JOBS.filter((j) => j.featured);
}


