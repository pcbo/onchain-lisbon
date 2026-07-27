const socialLinks = [
  { label: "X", href: "https://x.com/onchainlisbon" },
  { label: "LinkedIn", href: "https://linkedin.com/company/onchain-lisbon" },
  { label: "Luma", href: "https://luma.com/onchainlisbon" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          Onchain Lisbon Week · Lisbon, Portugal
        </p>

        <nav aria-label="Social links" className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
