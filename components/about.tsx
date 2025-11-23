import { Anchor, Blocks, Zap, Globe } from "lucide-react"

export function About() {
  const features = [
    {
      icon: <Blocks className="h-8 w-8 text-secondary" />,
      title: "Builder First",
      description: "Focused on technical workshops, hackathons, and real building. Less talk, more shipping.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Ecosystem",
      description: "Connecting local Portuguese talent with the global Web3 infrastructure and protocols.",
    },
    {
      icon: <Anchor className="h-8 w-8 text-accent" />,
      title: "Lisbon Vibe",
      description: "Experience the city's unique culture. From rooftop meetups to underground hacking sessions.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "High Impact",
      description: "Curated events that matter. Strategic conversations about the future of onchain technology.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-card border-b border-border">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-6">
              The City is <span className="text-secondary">Our Venue</span>.
              <br />
              The Chain is <span className="text-primary">Our Backbone</span>.
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Onchain Lisbon Week gathers the global Web3 builder community across a week of talks, hackathons,
                workshops and meetups in Lisbon.
              </p>
              <p>
                From token infrastructure to DAO innovation, from layer-2 tooling to on-chain game-design — we bring
                together the brightest minds in the ecosystem.
              </p>
              <div className="h-1 w-24 bg-primary mt-8"></div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-background border border-border hover:border-primary transition-colors duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
