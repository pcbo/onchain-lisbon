import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          Vibe coded with love from Lisbon by{" "}
          <Link
            href="https://x.com/pcbo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-primary transition-colors"
          >
            pcbo.eth
          </Link>
        </p>

        <Link
          href="https://x.com/onchainlisbon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Follow us on X
        </Link>
      </div>
    </footer>
  )
}
