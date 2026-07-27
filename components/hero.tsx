import { Calendar, MapPin, ArrowUpRight } from "lucide-react"

const socialLinks = [
  {
    label: "Follow on X",
    handle: "@onchainlisbon",
    href: "https://x.com/onchainlisbon",
  },
  {
    label: "Follow on LinkedIn",
    handle: "Onchain Lisbon",
    href: "https://linkedin.com/company/onchain-lisbon",
  },
  {
    label: "Follow on Luma",
    handle: "onchainlisbon",
    href: "https://luma.com/onchainlisbon",
  },
]

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-24 overflow-hidden bg-background">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col gap-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 text-primary font-mono text-sm tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              That's a wrap · 2026
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Lisbon, Portugal
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[1.1] text-balance">
            OBRIGADO, <br />
            LISBON.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
            Onchain Lisbon Week 2026 has come to a close. Thank you to every builder, host, and dreamer who made one
            powerful week possible. We&apos;ll be back — and the next edition is already on the horizon.
          </p>

          <div className="flex flex-col gap-4 pt-2">
            <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground">
              Stay tuned for 2027
            </p>
            <div className="grid gap-3 sm:grid-cols-3 max-w-2xl">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-card-foreground">{social.label}</span>
                    <span className="text-xs text-muted-foreground">{social.handle}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
