import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, "../public/resume.html");
const pdfPath = path.resolve(__dirname, "../public/resume.pdf");

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });

// Match the .page container width (750px) at 96dpi → ~7.8in
await page.pdf({
  path: pdfPath,
  format: "Letter",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});

await browser.close();
console.log(`Resume PDF written to ${pdfPath}`);
