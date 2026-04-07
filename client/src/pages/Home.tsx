import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BadgeCheck,
  CalendarDays,
  Clock3,
  Instagram,
  MapPin,
  Phone,
  Star,
  Users,
  WalletCards,
} from "lucide-react";

const bookingUrl =
  "https://booksy.com/en-us/144003_flash-da-barber_barber-shop_134786_dallas?do=invite&_branch_match_id=1527396760009896003&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVd8l2LUwJMk1zjUiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA%2Bf8t7TwAAAA%3D#ba_s=seo";
const phoneDisplay = "(214) 694-3634";
const phoneHref = "tel:+12146943634";
const instagramUrl = "https://www.instagram.com/trappincutz214/";
const directionsUrl =
  "https://maps.google.com/?q=4234+S+Westmoreland+Rd,+Oak+Cliff,+TX+75233";
const address = "4234 S Westmoreland Rd, Oak Cliff, TX 75233";
const hours = "Monday - Saturday · 10 am to 7pm";

const serviceMenuChips = ["Most booked", "Walk-ins welcome", "Kid-friendly"] as const;

const pricingMenu = [
  {
    name: "Hot towel shave",
    price: "$40.00",
    duration: "20 min",
    detail:
      "Hot towel prep with a steady razor finish—smooth skin, clean lines, and a relaxed close.",
  },
  {
    name: "Hair cut and beard",
    price: "$40.00",
    duration: "30 min",
    detail: "Full haircut paired with beard shaping and crisp edge work from neck to cheek.",
  },
  {
    name: "Hair cut",
    price: "$30.00",
    duration: "30 min",
    detail: "Sharp silhouette, blended fades or tapers, and a lineup that holds its shape.",
  },
  {
    name: "Line up(tape) with beard",
    price: "$25.00",
    duration: "25 min",
    detail: "Tape-assisted lineup with beard cleanup so the edges stay photo-ready.",
  },
  {
    name: "Line Up",
    price: "$20.00",
    duration: "15 min",
    detail: "Quick edge refresh—hairline, temples, and back taper touched up with precision.",
  },
  {
    name: "Enhancement",
    price: "$10.00",
    duration: "10 min",
    detail: "Targeted detail work to sharpen the finish and even out the look.",
  },
] as const;

const bookReviews = [
  {
    id: "1",
    clientName: "Charles",
    date: "Feb 15, 2026",
    dateIso: "2026-02-15",
    service: "Hair cut",
    staff: "Joel Roig",
    text: "Amazing cut, as always!",
  },
  {
    id: "2",
    clientName: "David",
    date: "Feb 11, 2026",
    dateIso: "2026-02-11",
    service: "Hair cut and beard",
    staff: "Joel Roig",
    text: "Amazing cut",
  },
  {
    id: "3",
    clientName: "Jonathan",
    date: "Jan 29, 2026",
    dateIso: "2026-01-29",
    service: "Hair cut and beard",
    staff: "Joel Roig",
    text: "Excellent service",
  },
  {
    id: "4",
    clientName: "Ned",
    date: "Dec 10, 2025",
    dateIso: "2025-12-10",
    service: "Hair cut and beard",
    staff: "Joel Roig",
    text: "Flash is easily the best barber in Oak Cliff.",
  },
  {
    id: "5",
    clientName: null as string | null,
    date: "Oct 30, 2025",
    dateIso: "2025-10-30",
    service: "Hair cut",
    staff: "Joel Roig",
    text: "Best fade I ever got. Highly recommend",
  },
] as const;

const gallery = [
  {
    eyebrow: "Featured",
    title: "Straight Razor Detail",
    image: "/assets/shop-hero.png",
    className: "gallery-feature-card md:row-span-2",
    imageClassName: "h-[420px] md:h-[520px] object-[48%_18%]",
  },
  {
    eyebrow: "Inside Trappin Cutz",
    title: "Fresh Cuts",
    image: "/assets/shop-gallery-vibe.png",
    className: "",
    imageClassName: "h-[300px] object-[50%_26%]",
  },
  {
    eyebrow: "Inside Trappin Cutz",
    title: "Shop Energy",
    image: "/assets/gallery-barber-smile.png",
    className: "",
    imageClassName: "h-[300px] object-[50%_12%]",
  },
  {
    eyebrow: "Inside Trappin Cutz",
    title: "Precision Focus",
    image: "/assets/shop-gallery-detail.png",
    className: "",
    imageClassName: "h-[220px] md:h-[240px] object-center",
  },
  {
    eyebrow: "Inside Trappin Cutz",
    title: "Good Vibes Only",
    image: "/assets/gallery-barber-red-portrait.png",
    className: "",
    imageClassName: "h-[220px] md:h-[240px] object-[50%_16%]",
  },
];

const stats = [
  { value: "4.9+", label: "rated by clients" },
  { value: "Mon-Sat", label: "serving Dallas six days a week" },
  { value: "10 am - 7pm", label: "shop hours" },
];

const shopFacts = [
  {
    icon: Users,
    title: "Community first",
    body: "Good vibes, great people, and top-tier barbers. The room feels welcoming without losing the premium edge.",
  },
  {
    icon: CalendarDays,
    title: "Walk-ins welcome",
    body: "Book ahead through Booksy or pull up and catch a seat when the timing is right.",
  },
  {
    icon: WalletCards,
    title: "Comfortable setup",
    body: "Kid-friendly service, restroom available, and a polished shop experience from start to finish.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href={bookingUrl} target="_blank" rel="noreferrer" className="floating-book">
        Book Now
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/72 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/assets/trappin-cutz-logo-transparent.png"
              alt="Trappin Cutz Barbershop logo"
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            />
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.42em] text-primary/80">Oak Cliff, Texas</p>
              <p className="font-display text-lg uppercase tracking-[0.18em] text-white sm:text-xl">
                Trappin Cutz
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.28em] text-foreground/70 md:flex">
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#services" className="transition-colors hover:text-primary">
              Services
            </a>
            <a href="#reviews" className="transition-colors hover:text-primary">
              Reviews
            </a>
            <a href="#gallery" className="transition-colors hover:text-primary">
              Gallery
            </a>
            <a href="#location" className="transition-colors hover:text-primary">
              Location
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </nav>

          <Button size="sm" onClick={() => window.open(bookingUrl, "_blank")}>
            Book Appointment
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="hero-shell relative overflow-hidden pt-28">
          <div className="hero-noise absolute inset-0 opacity-70" />
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="hero-spotlight absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full blur-3xl" />

          <div className="container relative grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <div className="fade-in-up space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.34em] text-primary">
                <MapPin size={14} />
                Southwest Dallas
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl font-display text-5xl uppercase leading-[0.88] tracking-[0.05em] text-white md:text-7xl xl:text-[5.5rem]">
                  Sharp Cuts.
                  <span className="block text-primary">Clean Fade.</span>
                  <span className="block text-white/76">Real Style.</span>
                </h1>
                <p className="detail-copy max-w-2xl text-[1.05rem] md:text-[1.18rem] md:leading-9">
                  Oak Cliff&apos;s go-to barbershop for fresh cuts, unmatched vibes, and a premium chair
                  experience that feels as sharp as the finish.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" onClick={() => window.open(bookingUrl, "_blank")}>
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" onClick={() => (window.location.href = phoneHref)}>
                  Call Now
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2 sm:gap-4">
                {stats.map((item) => (
                  <div key={item.label} className="stat-panel">
                    <p className="font-display text-[1.65rem] uppercase tracking-[0.06em] text-primary sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="eyebrow-copy mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-up delay-1 relative">
              <div className="hero-card">
                <img
                  src="/assets/shop-hero.png"
                  alt="Barber creating a fresh fade"
                  className="h-[600px] w-full object-cover object-[50%_18%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(9,8,6,0.92))]" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="glass-panel rounded-[1.75rem] p-5 sm:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="eyebrow-copy">4234 S Westmoreland Rd · Oak Cliff</p>
                        <p className="mt-2 font-display text-2xl uppercase tracking-[0.08em] text-white sm:text-3xl">
                          Premium cuts. Strong vibe. No weak finishes.
                        </p>
                      </div>
                      <Button variant="secondary" onClick={() => window.open(bookingUrl, "_blank")}>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-divider py-20 md:py-24">
          <div className="container grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start xl:gap-10">
            <div className="space-y-5">
              <p className="section-kicker">About Us</p>
              <h2 className="section-title max-w-[8ch]">Built for the city. Dialed for the details.</h2>
            </div>

            <div className="space-y-6 max-w-5xl">
              <p className="body-copy max-w-4xl">
                Trappin Cutz Barbershop brings together strong community energy, professional
                service, and quality work that speaks for itself. This is the kind of shop where
                the vibe stays easy, the room stays sharp, and every cut leaves looking intentional.
              </p>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {shopFacts.map((item) => (
                  <Card key={item.title} className="feature-card gap-4 p-6">
                    <item.icon className="text-primary" size={24} />
                    <div>
                      <h3 className="font-display text-2xl uppercase tracking-[0.06em] text-white">
                        {item.title}
                      </h3>
                      <p className="detail-copy mt-3">{item.body}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-divider bg-card/32 py-20 md:py-24">
          <div className="container">
            <div className="mb-12 grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="section-kicker">Services</p>
                <h2 className="section-title">Sharp work, clean detail, and options for every seat.</h2>
              </div>
              <p className="detail-copy max-w-xl lg:justify-self-end">
                Exact times and prices on every card—pick your service and book in one tap.
              </p>
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
              <Card className="service-hero-card rounded-[2rem] p-7 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  {serviceMenuChips.map((label) => (
                    <span key={label} className="service-chip">
                      {label}
                    </span>
                  ))}
                </div>
                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_minmax(0,auto)] lg:items-end">
                  <div>
                    <p className="service-index">01</p>
                    <h3 className="mt-4 font-display text-[2.2rem] uppercase leading-none tracking-[0.05em] text-white sm:text-[2.8rem] md:text-[3.25rem]">
                      {pricingMenu[0].name}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-foreground/50">
                      {pricingMenu[0].duration}
                    </p>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">{pricingMenu[0].detail}</p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-end lg:flex-col xl:flex-row xl:items-end">
                    <div className="service-hero-price min-w-[10rem]">
                      <p className="service-hero-label">Price</p>
                      <p className="service-hero-amount text-5xl md:text-6xl">{pricingMenu[0].price}</p>
                    </div>
                    <Button
                      size="lg"
                      className="shrink-0 uppercase tracking-[0.2em]"
                      onClick={() => window.open(bookingUrl, "_blank")}
                    >
                      Book
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
                {pricingMenu.slice(1).map((item, index) => (
                  <Card key={item.name} className="service-card rounded-[1.8rem] border-white/10 p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="service-index">0{index + 2}</p>
                        <h3 className="mt-4 font-display text-[1.55rem] uppercase leading-[1.05] tracking-[0.06em] text-white sm:text-[1.8rem]">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-xs uppercase tracking-[0.22em] text-foreground/46">
                          {item.duration}
                        </p>
                      </div>
                      <p className="shrink-0 font-display text-2xl uppercase tracking-[0.08em] text-primary sm:text-3xl">
                        {item.price}
                      </p>
                    </div>
                    <div className="service-divider" />
                    <p className="detail-copy text-[1rem] leading-8">{item.detail}</p>
                    <div className="mt-6 flex justify-end">
                      <Button size="sm" className="uppercase tracking-[0.22em]" onClick={() => window.open(bookingUrl, "_blank")}>
                        Book
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="section-divider py-20 md:py-24">
          <div className="container">
            <div className="mb-10 max-w-3xl">
              <p className="section-kicker">Reviews</p>
              <h2 className="section-title">Real feedback from people who know a clean cut.</h2>
              <p className="body-copy mt-4 max-w-2xl text-foreground/78">
                Recent five-star reviews from confirmed Booksy clients.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <Card className="feature-card justify-between gap-8 p-7 lg:sticky lg:top-28">
                <div>
                  <p className="eyebrow-copy">Booksy clients</p>
                  <p className="mt-4 font-display text-7xl uppercase leading-none text-white">5★</p>
                  <div className="mt-4 flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={20} className="fill-current text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="detail-copy max-w-sm">
                  Verified “confirmed client” reviews below list the service booked and the barber behind
                  the chair—straight from how they show up on Booksy.
                </p>
              </Card>

              <div className="reviews-feed rounded-[1.9rem] border border-white/10 bg-black/20">
                {bookReviews.map((review, index) => (
                  <article
                    key={review.id}
                    className={`reviews-feed-row px-5 py-6 sm:px-7 sm:py-7 ${index > 0 ? "border-t border-white/10" : ""}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex min-w-0 flex-wrap items-center gap-2">
                        {review.clientName ? (
                          <>
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-sm font-semibold uppercase tracking-wide text-white/90">
                              {review.clientName.slice(0, 1)}
                            </span>
                            <span className="font-medium text-white">{review.clientName}</span>
                          </>
                        ) : null}
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/35 bg-sky-500/10 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-sky-300">
                          <BadgeCheck className="size-3.5 shrink-0 text-sky-400" aria-hidden />
                          Confirmed client
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex gap-0.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star key={starIndex} size={16} className="fill-current text-amber-400" />
                        ))}
                      </div>
                      <time
                        dateTime={review.dateIso}
                        className="text-xs uppercase tracking-[0.22em] text-foreground/45"
                      >
                        {review.date}
                      </time>
                    </div>

                    <dl className="mt-5 space-y-2 text-sm">
                      <div className="flex flex-wrap gap-x-2 gap-y-1">
                        <dt className="text-foreground/45">Service</dt>
                        <dd className="font-medium text-white/92">{review.service}</dd>
                      </div>
                      <div className="flex flex-wrap gap-x-2 gap-y-1">
                        <dt className="text-foreground/45">Staff</dt>
                        <dd className="font-medium text-white/92">{review.staff}</dd>
                      </div>
                    </dl>

                    <blockquote className="body-copy mt-5 border-l-2 border-primary/40 pl-4 text-white/88">
                      “{review.text}”
                    </blockquote>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider bg-card/32 py-20 md:py-24">
          <div className="container">
            <div className="space-y-6">
              <p className="section-kicker">Booking</p>
              <h2 className="section-title">Book fast or just pull up.</h2>
              <p className="body-copy max-w-2xl">
                Lock your appointment through Booksy in a few taps or come through as a walk-in.
                Either way, the goal is simple: easy booking, clean service, and no wasted motion.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" onClick={() => window.open(bookingUrl, "_blank")}>
                  Book on Booksy
                </Button>
                <Button size="lg" variant="outline" onClick={() => (window.location.href = phoneHref)}>
                  Call the Shop
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section-divider py-20 md:py-24">
          <div className="container">
            <div className="gallery-mosaic">
              {gallery.map((item) => (
                <div key={item.title} className={`gallery-card gallery-mosaic-card ${item.className}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover ${item.imageClassName}`}
                  />
                  <div className="gallery-caption">
                    <p className="gallery-eyebrow">{item.eyebrow}</p>
                    <p className="gallery-title">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider bg-card/32 py-20 md:py-24">
          <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5">
              <p className="section-kicker">Shop Energy</p>
              <h2 className="section-title">Good people, strong atmosphere, and cuts that speak loud.</h2>
              <p className="body-copy">
                The shop stays rooted in community while keeping the work premium. It feels easy to
                pull up, easy to book, and serious about every detail once you sit down.
              </p>
            </div>

            <Card className="quote-panel min-h-[280px] justify-between p-8 md:p-10">
              <p className="quote-mark">“</p>
              <div className="space-y-5">
                <p className="quote-copy">
                  Good vibe, good people, excellent barbers. Clean environment, real community
                  energy, and the kind of chair work that keeps clients coming back.
                </p>
                <p className="quote-tag">Trappin Cutz atmosphere</p>
              </div>
            </Card>
          </div>
        </section>

        <section id="location" className="section-divider py-20 md:py-24">
          <div className="container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-7">
              <div>
                <p className="section-kicker">Location & Hours</p>
                <h2 className="section-title">Pull up in Oak Cliff or book your slot today.</h2>
              </div>

              <div className="space-y-4">
                <div className="contact-row">
                  <MapPin className="contact-icon" size={20} />
                  <div>
                    <p className="contact-label">Address</p>
                    <p className="contact-copy">{address}</p>
                  </div>
                </div>

                <div className="contact-row">
                  <Clock3 className="contact-icon" size={20} />
                  <div>
                    <p className="contact-label">Hours</p>
                    <p className="contact-copy">{hours}</p>
                  </div>
                </div>

                <div className="contact-row">
                  <Phone className="contact-icon" size={20} />
                  <div>
                    <p className="contact-label">Phone</p>
                    <a href={phoneHref} className="contact-copy transition-colors hover:text-primary">
                      {phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" onClick={() => window.open(directionsUrl, "_blank")}>
                  Get Directions
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open(bookingUrl, "_blank")}>
                  Book Your Slot
                </Button>
              </div>
            </div>

            <div className="map-shell overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <iframe
                title="Trappin Cutz Barbershop map"
                src="https://www.google.com/maps?q=4234+S+Westmoreland+Rd,+Oak+Cliff,+TX+75233&z=14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full rounded-[1.5rem] border-0 grayscale-[0.1] contrast-125"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="section-divider bg-card/32 py-20 md:py-24">
          <div className="container">
            <Card className="cta-card overflow-hidden p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div className="space-y-5">
                  <p className="section-kicker">Contact</p>
                  <h2 className="section-title">Pull up or book your slot today.</h2>
                  <p className="body-copy max-w-2xl">
                    Trappin Cutz Barbershop is built for clients who want a clean result, a strong
                    atmosphere, and a shop that moves with confidence.
                  </p>
                </div>

                <div className="grid gap-4">
                  <a href={phoneHref} className="contact-row transition-transform hover:-translate-y-0.5">
                    <Phone className="contact-icon" size={20} />
                    <div>
                      <p className="contact-label">Call</p>
                      <p className="contact-copy">{phoneDisplay}</p>
                    </div>
                  </a>

                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-row transition-transform hover:-translate-y-0.5"
                  >
                    <Instagram className="contact-icon" size={20} />
                    <div>
                      <p className="contact-label">Instagram</p>
                      <p className="contact-copy">@trappincutz</p>
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
