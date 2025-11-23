import { Hero } from "@/components/hero"
import { EventSchedule } from "@/components/event-schedule"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      <section id="schedule" className="py-4 md:py-6">
        <div className="container px-4 md:px-6 max-w-6xl">
          <EventSchedule />
        </div>
      </section>
    </main>
  )
}
