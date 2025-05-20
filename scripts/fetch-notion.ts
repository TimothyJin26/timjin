import { Client } from '@notionhq/client';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config'; // only needed if running locally and using .env
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.EXPERIENCE_DB_ID;

async function fetchData() {
  if (!databaseId) {
    throw new Error('Missing database ID');
  }

  const response = await notion.databases.query({ database_id: databaseId });
  const outputDir = path.resolve(__dirname, '../src/data');
  const outputPath = path.join(outputDir, 'notion.json');

  // Ensure the directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(response.results, null, 2));
  console.log('Notion data saved to src/data/notion.json');
}

fetchData().catch((err) => {
  console.error('Failed to fetch Notion data:', err);
  process.exit(1);
});
