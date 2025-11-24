import { NextResponse } from "next/server"

const NOTION_API_KEY = process.env.NOTION_API_KEY
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

export async function GET() {
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
    return NextResponse.json(
      {
        error:
          "Missing Notion API credentials. Please add NOTION_API_KEY and NOTION_DATABASE_ID to your environment variables.",
      },
      { status: 500 },
    )
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          property: "Approved?",
          select: {
            equals: "Yes",
          },
        },
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error("[v0] Notion API error body:", errorBody)
      throw new Error(`Notion API error: ${response.status} - ${errorBody}`)
    }

    const data = await response.json()

    const events = await Promise.all(
      data.results.map(async (page: any) => {
        const props = page.properties

        console.log("[v0] ==================")
        console.log("[v0] Full page object:", JSON.stringify(page, null, 2))

        console.log("[v0] All property keys:", Object.keys(props))

        let title = "Untitled Event"

        const titlePropertyKey = Object.keys(props).find((key) => props[key]?.type === "title")
        console.log("[v0] Found title property key:", titlePropertyKey)

        if (titlePropertyKey) {
          const titleProp = props[titlePropertyKey]
          console.log("[v0] Title property content:", JSON.stringify(titleProp, null, 2))

          if (titleProp?.title && Array.isArray(titleProp.title) && titleProp.title.length > 0) {
            title = titleProp.title[0].plain_text || "Untitled Event"
            console.log("[v0] Successfully extracted title:", title)
          }
        }

        const dateInfo = props["Which date?"]?.date
        const startDateTime = dateInfo?.start || ""
        const endDateTime = dateInfo?.end || ""

        const startDate = startDateTime ? new Date(startDateTime) : null

        const additionalInfo = props["Anything else you'd like to share?"]?.rich_text
        const description =
          additionalInfo && additionalInfo.length > 0 ? additionalInfo.map((text: any) => text.plain_text).join("") : ""

        return {
          id: page.id,
          title,
          date: startDate ? startDate.toISOString().split("T")[0] : "",
          time: "", // Not used anymore, keeping for compatibility
          location: "",
          description,
          link: props["Share the event URL"]?.url || "",
          startDateTime,
          endDateTime,
        }
      }),
    )

    return NextResponse.json({ events })
  } catch (error) {
    console.error("[v0] Error fetching from Notion:", error)
    return NextResponse.json({ error: "Failed to fetch events from Notion" }, { status: 500 })
  }
}
