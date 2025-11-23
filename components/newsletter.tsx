import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-24 bg-primary text-primary-foreground border-b border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Stay in the loop</h2>
            <p className="text-lg md:text-xl font-medium opacity-90">
              Get the latest updates on venues, new events, and afterparties directly to your inbox. No spam, just
              alpha.
            </p>
          </div>
          <div className="w-full max-w-md bg-background/10 p-2 rounded-lg backdrop-blur-sm border border-black/10">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background text-foreground border-0 h-12"
              />
              <Button size="lg" className="h-12 px-8 font-bold bg-black text-white hover:bg-black/80">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
