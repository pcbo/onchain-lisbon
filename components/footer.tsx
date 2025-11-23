import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <p className="text-sm text-muted-foreground text-center md:text-left">© Onchain Lisbon</p>

        <div className="flex items-center gap-6">
          <span className="text-sm text-muted-foreground hidden md:inline-block">Follow us on:</span>
          <div className="flex gap-4">
            <Link
              href="https://x.com/onchainlisbon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              X
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Luma
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
