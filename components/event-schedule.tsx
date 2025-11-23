"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

// Mock Data
const EVENTS = [
  {
    id: 1,
    title: "Lisbon Builder Kickoff",
    date: "2026-07-20",
    day: "Monday",
    time: "18:00 - 22:00",
    location: "Time Out Market",
    description: "The official opening party for Onchain Lisbon Week. Food, drinks, and networking.",
  },
  {
    id: 2,
    title: "Zero Knowledge Summit",
    date: "2026-07-21",
    day: "Tuesday",
    time: "09:00 - 17:00",
    location: "Convento do Beato",
    description: "A deep dive into ZK proofs, privacy scaling, and protocol design.",
  },
  {
    id: 3,
    title: "DeFi Breakfast Club",
    date: "2026-07-22",
    day: "Wednesday",
    time: "08:30 - 10:30",
    location: "Copenhagen Coffee Lab",
    description: "Start your day with coffee and casual DeFi conversations.",
  },
  {
    id: 4,
    title: "Modular Systems Workshop",
    date: "2026-07-23",
    day: "Thursday",
    time: "14:00 - 16:00",
    location: "Impact Hub Lisbon",
    description: "Hands-on workshop on building modular stacks with Celestia and EigenLayer.",
  },
  {
    id: 5,
    title: "NFT & Art Gallery Opening",
    date: "2026-07-24",
    day: "Friday",
    time: "19:00 - 23:00",
    location: "Underdogs Gallery",
    description: "Showcasing the best Onchain generative art from local and global artists.",
  },
  {
    id: 6,
    title: "DAO Governance Roundtable",
    date: "2026-07-25",
    day: "Saturday",
    time: "15:00 - 17:00",
    location: "Second Home Lisboa",
    description: "Open discussion on the state of DAO tooling and governance frameworks.",
  },
  {
    id: 7,
    title: "Closing Ceremony",
    date: "2026-07-26",
    day: "Sunday",
    time: "20:00 - 00:00",
    location: "LX Factory",
    description: "Wrapping up the week with music, food, and final announcements.",
  },
]

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const getDayDate = (dayName: string) => {
  const dayMap: Record<string, string> = {
    Monday: "(20 July)",
    Tuesday: "(21 July)",
    Wednesday: "(22 July)",
    Thursday: "(23 July)",
    Friday: "(24 July)",
    Saturday: "(25 July)",
    Sunday: "(26 July)",
  }
  return dayMap[dayName]
}

const getFullDate = (dateStr: string, dayName: string) => {
  const dateObj = new Date(dateStr)
  const day = dateObj.getUTCDate()
  return `${dayName}, ${day} July`
}

export function EventSchedule() {
  return (
    <div className="space-y-12 px-6">
      {DAYS.map((day) => {
        const dayEvents = EVENTS.filter((e) => e.day === day)
        return (
          <div key={day} className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground whitespace-nowrap">
                {day} <span className="text-muted-foreground font-normal">{getDayDate(day)}</span>
              </h3>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-4">
              {dayEvents.length === 0 ? (
                <p className="text-muted-foreground italic text-sm">No events scheduled yet.</p>
              ) : (
                dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className="group flex flex-col md:flex-row gap-6 p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                  >
                    <div className="flex flex-col gap-1 md:w-48 shrink-0 md:border-r md:border-border/50 md:pr-6">
                      <div className="text-sm font-medium text-foreground">{getFullDate(event.date, event.day)}</div>
                      <div className="text-sm text-muted-foreground">{event.time}</div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-primary">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>

                      <p className="text-muted-foreground">{event.description}</p>
                    </div>

                    <div className="md:self-center shrink-0 pt-4 md:pt-0">
                      <Button className="w-full md:w-auto">Register</Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
