# Notion Integration Setup

To enable dynamic event loading from Notion:

## 1. Create a Notion Integration

1. Go to https://www.notion.so/my-integrations
2. Click "+ New integration"
3. Name it "Onchain Lisbon Events"
4. Select the workspace containing your database
5. Copy the **Internal Integration Token**

## 2. Share Database with Integration

1. Open your Notion database page
2. Click the "..." menu in the top right
3. Scroll down and click "Add connections"
4. Select your "Onchain Lisbon Events" integration

## 3. Get Database ID

The database ID is in your Notion URL:
\`\`\`
https://talentprotocol.notion.site/2b4fc9bb53198017ae70c82be4f0f545
                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                        This is your Database ID
\`\`\`

## 4. Add Environment Variables

Add these to your Vercel project (or local .env file):

\`\`\`
NOTION_API_KEY=your_integration_token_here
NOTION_DATABASE_ID=2b4fc9bb53198017ae70c82be4f0f545
\`\`\`

## 5. Required Database Properties

Make sure your Notion database has these properties:
- **Name** (Title) - Event name
- **Date** (Date) - Event date
- **Time** (Text) - Event time (e.g., "19:00 - 23:00")
- **Location** (Text) - Venue name
- **Description** (Text) - Event description
- **Link** (URL) - Registration/event page link
- **Approved?** (Checkbox) - Must be checked for event to show

The API will automatically filter for approved events and sort by date.
