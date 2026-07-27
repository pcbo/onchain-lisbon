import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Onchain Lisbon home">
          <Image src="/logo.png" alt="" width={180} height={60} className="h-10 w-auto" priority />
          <span className="hidden text-xl font-bold md:inline">Onchain Lisbon Week</span>
        </Link>
      </div>
    </header>
  )
}
