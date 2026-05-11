import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("h1 is visible and contains 'Salford'", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Salford");
});

test("emergency badge is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("24-hour emergency call-out available")).toBeVisible();
});

test("call CTA links to phone", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("a[href='tel:01610000005']").first()).toBeVisible();
});

test("NICEIC badge is visible in trust bar", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("NICEIC Approved")).toBeVisible();
});

test("6 service cards are visible", async ({ page }) => {
  await page.goto("/");
  const items = page.locator("ul[role='list'] li");
  await expect(items).toHaveCount(6);
});

test("3 testimonial blockquotes are visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("blockquote")).toHaveCount(3);
});

test("home page has no critical axe violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  const critical = results.violations.filter((v) => v.impact === "critical" || v.impact === "serious");
  expect(critical, critical.map((v) => `${v.id}: ${v.description}`).join("\n")).toHaveLength(0);
});
