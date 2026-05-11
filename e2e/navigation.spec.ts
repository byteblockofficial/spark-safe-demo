import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("desktop nav has 4 links", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  for (const label of ["Home", "Services", "About", "Contact"]) {
    await expect(nav.getByRole("link", { name: label })).toBeVisible();
  }
});

test.describe("Mobile nav", () => {
  test.use({ viewport: { width: 375, height: 812 } });
  test("hamburger opens mobile menu", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  });
});

test.describe("Axe — all routes", () => {
  for (const route of ["/", "/about", "/services", "/contact"]) {
    test(`${route} passes axe`, async ({ page }) => {
      await page.goto(route);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
      const critical = results.violations.filter((v) => v.impact === "critical" || v.impact === "serious");
      expect(critical, critical.map((v) => v.id).join(", ")).toHaveLength(0);
    });
  }
});

test("services page has 6 service headings", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByRole("heading", { level: 2, name: /rewiring/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /consumer unit/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /ev charger/i })).toBeVisible();
});

test("contact page has enquiry form", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("form", { name: "Contact enquiry form" })).toBeVisible();
});

test("contact page shows emergency call section", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByText("Emergency? Call us directly")).toBeVisible();
});
