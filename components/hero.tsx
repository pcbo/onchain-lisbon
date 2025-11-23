import { Calendar, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-background">
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
              July 20-26, 2026
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Lisbon, Portugal
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[1.1]">
            THE ONCHAIN <br />
            BUILDER WEEK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">IN LISBON</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
            Lisbon's builder calendar for one powerful week. Every event, curated in a single place, created by and for
            those who are shipping onchain.
          </p>
        </div>
      </div>
    </section>
  )
}
