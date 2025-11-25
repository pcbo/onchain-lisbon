import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          Vibe coded by{" "}
          <Link
            href="https://x.com/pcbo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-primary transition-colors"
          >
            pcbo.eth
          </Link>
        </p>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Follow us on:</span>
          <Link
            href="https://x.com/onchainlisbon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            X
          </Link>
          <Link
            href="https://www.linkedin.com/company/onchain-lisbon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://luma.com/onchainlisbon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Luma
          </Link>
        </div>
      </div>
    </footer>
  )
}
