import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="https://onchainlisbon.com" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-black">
            L
          </div>
          <span>
            Onchain <span className="text-primary">Lisbon</span> 2026
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="https://talentprotocol.notion.site/2b4fc9bb531980d8955fefc35bed6723"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" className="hidden md:flex">
              Submit Event
            </Button>
          </Link>
          <Link
            href="https://talentprotocol.notion.site/2b4fc9bb531980d8955fefc35bed6723"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="md:hidden">
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
