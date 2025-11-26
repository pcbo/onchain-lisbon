"use client"

import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

type Event = {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  link: string
  startDateTime: string
  endDateTime: string
}

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

const getDayFromDate = (dateStr: string) => {
  const date = new Date(dateStr)
  const dayIndex = date.getDay()
  const dayMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return dayMap[dayIndex]
}

const formatEventDateTime = (startISO: string, endISO: string) => {
  const start = new Date(startISO)
  const end = new Date(endISO)

  const formatDate = (date: Date) => {
    const month = date.toLocaleString("en-US", { month: "short" })
    const day = date.getDate()
    return `${month} ${day}`
  }

  const formatTime = (date: Date) => {
    return date.toLocaleString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })
  }

  return `${formatDate(start)}, ${formatTime(start)} → ${formatDate(end)}, ${formatTime(end)}`
}

export function EventSchedule() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lisbonOffset, setLisbonOffset] = useState<string>("")

  useEffect(() => {
    const calculateLisbonOffset = () => {
      const date = new Date()
      const lisbonTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Lisbon",
        timeZoneName: "shortOffset",
      }).format(date)

      const offsetMatch = lisbonTime.match(/GMT([+-]\d+)/)
      if (offsetMatch) {
        const offset = offsetMatch[1]
        setLisbonOffset(`UTC${offset}`)
      } else {
        const lisbonDate = new Date(date.toLocaleString("en-US", { timeZone: "Europe/Lisbon" }))
        const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }))
        const offsetHours = Math.round((lisbonDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60))
        setLisbonOffset(`UTC${offsetHours >= 0 ? "+" : ""}${offsetHours}`)
      }
    }

    calculateLisbonOffset()

    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setEvents(data.events || [])
        }
        setLoading(false)
      })
      .catch((err) => {
        setError("Failed to load events")
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="px-6 py-12">
        <p className="text-muted-foreground text-center">Loading events...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="px-6 py-12">
        <p className="text-destructive text-center">{error}</p>
      </div>
    )
  }

  const filteredEvents = events
    .filter((e) => {
      const startDate = new Date(e.startDateTime)
      const july26End = new Date("2026-07-27T00:00:00")
      return startDate < july26End
    })
    .map((e) => {
      const startDate = new Date(e.startDateTime)
      const july20 = new Date("2026-07-20T00:00:00")

      if (startDate < july20) {
        return {
          ...e,
          date: "2026-07-20",
        }
      }
      return e
    })

  return (
    <div className="container relative mx-auto px-6">
      <div className="max-w-4xl space-y-12">
        <p className="text-sm text-muted-foreground mb-4">
          All times are shown in local Lisbon timezone ({lisbonOffset || "UTC+0/+1"}).
        </p>

        {DAYS.map((day) => {
          const dayEvents = filteredEvents.filter((e) => getDayFromDate(e.date) === day)

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
                      className="group flex flex-col md:flex-row gap-6 p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors md:items-center"
                    >
                      <div className="flex flex-col gap-1 md:w-64 shrink-0 md:border-r md:border-border/50 md:pr-6">
                        <div className="text-sm font-medium text-foreground">
                          {formatEventDateTime(event.startDateTime, event.endDateTime)}
                        </div>
                      </div>

                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>

                        {event.location && (
                          <div className="flex items-center gap-2 text-sm text-primary">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                        )}

                        {event.description && <p className="text-muted-foreground">{event.description}</p>}
                      </div>

                      {event.link && (
                        <div className="shrink-0 pt-4 md:pt-0">
                          <Button asChild className="w-full md:w-auto">
                            <a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              View Event
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
