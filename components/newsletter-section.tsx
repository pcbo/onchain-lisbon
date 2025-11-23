import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 rounded-2xl bg-secondary/10 p-8 md:p-12 border border-secondary/20">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl font-bold tracking-tighter">Stay in the Loop</h2>
            <p className="text-muted-foreground text-lg">
              Get exclusive insights and updates on Onchain Lisbon Week directly to your inbox.
            </p>
          </div>

          <div className="w-full max-w-md space-y-2">
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background border-border" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
