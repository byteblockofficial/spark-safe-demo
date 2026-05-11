import { test, expect } from "@playwright/test";

test("empty submit shows validation errors", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.getByRole("alert").first()).toBeVisible();
});

test("aria-invalid set on errored fields", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.locator("#name")).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("#phone")).toHaveAttribute("aria-invalid", "true");
});

test("shows success on mocked 200", async ({ page }) => {
  await page.route("/api/contact", (route) => route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) }));
  await page.goto("/contact");
  await page.fill("#name", "Test User");
  await page.fill("#phone", "07700 900000");
  await page.fill("#message", "Need a consumer unit upgrade.");
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.getByRole("alert")).toContainText("Message sent");
});

test("shows error on mocked 500", async ({ page }) => {
  await page.route("/api/contact", (route) => route.fulfill({ status: 500, contentType: "application/json", body: JSON.stringify({ error: "fail" }) }));
  await page.goto("/contact");
  await page.fill("#name", "Test User");
  await page.fill("#phone", "07700 900000");
  await page.fill("#message", "Need help.");
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.getByRole("alert")).toContainText("Something went wrong");
});
