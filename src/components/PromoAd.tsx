"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Ad = {
  id: string;
  headline: string;
  description: string;
  cta: string;
  badge: string;
  sponsorText: string;
  href: string;
  imageSrc?: string;
  showDiscount?: boolean;
  rating?: number;
  priceHighlights?: string[];
};

const CITY_LABELS: Record<string, string> = {
  groningen: "Groningen",
  amsterdam: "Amsterdam",
  rotterdam: "Rotterdam",
  eindhoven: "Eindhoven",
  delft: "Delft",
  enschede: "Enschede",
  maastricht: "Maastricht",
  leeuwarden: "Leeuwarden",
  breda: "Breda",
  utrecht: "Utrecht",
  leiden: "Leiden",
  tilburg: "Tilburg",
};

function getCityFromHostname(): string | null {
  if (typeof window === "undefined") return null;
  const host = window.location.hostname.toLowerCase().replace(/^www\./, "");
  if (!host.startsWith("studentjobs")) return null;

  const rawCity = host.split(".")[0].replace("studentjobs", "");
  return (
    CITY_LABELS[rawCity] ||
    (rawCity ? rawCity.charAt(0).toUpperCase() + rawCity.slice(1) : null)
  );
}

const trackEvent = (eventName: string, params: Record<string, any>) => {
  if (typeof window === "undefined") return;
  const gtag = (window as any).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, params);
    return;
  }
  const dataLayer = (window as any).dataLayer;
  if (Array.isArray(dataLayer)) {
    dataLayer.push({ event: eventName, ...params });
  }
};

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-0.5 mb-1">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#CBD5E1" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}
      <span className="ml-1.5 text-xs font-bold text-slate-600">{rating} / 5</span>
    </div>
  );
};

const STARTDOCK_VARIANTS = [
  {
    headline: "Stop working from your bed.",
    description:
      "StartDock Amsterdam gives students and young builders a serious workspace across top central locations like Keizersgracht, Herengracht, Singel, and Prins Hendrikkade.",
    badge: "FOR BUILDERS",
    cta: "See StartDock Amsterdam",
    priceHighlights: ["Amsterdam", "5 central locations"],
  },
  {
    headline: "Network while you study.",
    description:
      "Join the StartDock Amsterdam community and work near Leidseplein, Koningsplein, and Central Station in spaces filled with entrepreneurs and ambitious people.",
    badge: "COMMUNITY",
    cta: "Discover the Community",
    priceHighlights: ["Canal belt", "Central Station"],
  },
  {
    headline: "Calm workspace in the heart of Amsterdam.",
    description:
      "Need focus, strong WiFi, and a better study routine? Work from StartDock Amsterdam in inspiring canal-side locations with real professional energy.",
    badge: "STUDENT PICK",
    cta: "Book Your Spot",
    priceHighlights: ["Study smarter", "Coworking Amsterdam"],
  },
];

function getRandomStartDockVariant() {
  return STARTDOCK_VARIANTS[Math.floor(Math.random() * STARTDOCK_VARIANTS.length)];
}

function createStartDockAd(): Ad {
  const variant = getRandomStartDockVariant();

  return {
    id: `startdock_amsterdam_${variant.headline
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")}`,
    headline: variant.headline,
    description: variant.description,
    cta: variant.cta,
    badge: variant.badge,
    sponsorText: "Sponsored by StartDock Amsterdam",
    href: "https://startdock.nl/en/locations/amsterdam/",
    imageSrc: "/logos/startdock-amsterdam.png",
    showDiscount: false,
    priceHighlights: variant.priceHighlights,
  };
}

export default function PromoAd({
  placement = "general",
}: {
  placement?: string;
}) {
  const [activeAd, setActiveAd] = useState<Ad | null>(null);
  const lastImpressionKeyRef = useRef<string | null>(null);

  useEffect(() => {
    const cityName = getCityFromHostname();
    const adPool: Ad[] = [];

    const signaalBase = {
      sponsorText: "Sponsored by Signaal.app",
      href: "https://go.signaal.app/studentjobsnl",
      imageSrc: "/signaal.png",
      showDiscount: true,
    };

    if (cityName) {
      adPool.push({
        ...signaalBase,
        id: "signaal_city_students",
        headline: `Find a student room in ${cityName}, faster.`,
        description: `Stop refreshing tabs. Get instant alerts for every new student listing in ${cityName} the second it goes live.`,
        cta: `Search ${cityName} Housing`,
        badge: "STUDENT FAVORITE",
      });

      if (cityName === "Amsterdam") {
        adPool.push(createStartDockAd());
      }

      // other city ads
    } else {
      adPool.push(createStartDockAd());
    }

    const randomAd = adPool[Math.floor(Math.random() * adPool.length)];
    setActiveAd(randomAd);
  }, [placement]);

  useEffect(() => {
    if (!activeAd) return;
    const locationName = getCityFromHostname() || "Netherlands";
    const impressionKey = `${placement}:${activeAd.id}:${locationName}`;
    if (lastImpressionKeyRef.current === impressionKey) return;
    lastImpressionKeyRef.current = impressionKey;

    trackEvent("view_promotion", {
      items: [
        {
          promotion_id: activeAd.id,
          promotion_name: activeAd.headline,
          creative_name: "PromoAd",
          creative_slot: placement,
          location_id: locationName,
        },
      ],
    });
  }, [activeAd, placement]);

  if (!activeAd) return null;

  const isExternalLink = activeAd.href.startsWith("http");

  return (
    <div className="my-8 flex justify-center w-full px-4">
      <a
        href={activeAd.href}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
        className="group relative block w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-xl"
      >
        <div className="absolute top-0 right-0 rounded-bl-lg bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          {activeAd.badge}
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-gradient-to-br from-blue-50 to-slate-50 shadow-inner overflow-hidden">
            {activeAd.imageSrc ? (
              <Image
                src={activeAd.imageSrc}
                alt={activeAd.sponsorText}
                width={56}
                height={56}
                className="object-contain transition-transform group-hover:scale-110"
              />
            ) : (
              <span className="text-3xl">🏢</span>
            )}
          </div>

          <div className="flex-1 text-left">
            <div className="flex flex-col gap-0.5 mb-1">
              <div className="text-xs font-bold uppercase tracking-tight text-blue-600">
                {activeAd.sponsorText}
              </div>
              {activeAd.rating && <StarRating rating={activeAd.rating} />}
            </div>

            <h4 className="text-xl font-extrabold leading-tight text-slate-900 md:text-2xl">
              {activeAd.headline}
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {activeAd.description}
            </p>

            {activeAd.priceHighlights && (
              <div className="mt-3 flex flex-wrap gap-2">
                {activeAd.priceHighlights.map((price, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded-md border border-green-200 bg-green-50 px-2 py-1 text-xs font-bold text-green-700"
                  >
                    {price}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-blue-600">
                {activeAd.cta}
              </span>

              {activeAd.showDiscount && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium italic text-slate-500">Use code:</span>
                  <span className="rounded-md border-2 border-dashed border-blue-200 bg-blue-50 px-2 py-1 text-sm font-mono font-bold text-blue-700">
                    ASJOBS
                  </span>
                  <span className="text-sm font-bold text-blue-700">(10% off)</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}