const mockSend = jest.fn().mockResolvedValue({ id: "mock-id" });
jest.mock("resend", () => ({ Resend: jest.fn().mockImplementation(() => ({ emails: { send: mockSend } })) }));

process.env.RESEND_API_KEY = "re_test_key";
process.env.CONTACT_EMAIL = "test@example.com";

import { NextRequest } from "next/server";
import { POST } from "../../app/api/contact/route";

function makeRequest(body: Record<string, unknown>, ip = "127.0.0.1"): NextRequest {
  return new NextRequest("http://localhost/api/contact", { method: "POST", headers: { "Content-Type": "application/json", "x-forwarded-for": ip }, body: JSON.stringify(body) });
}

const validBody = { name: "Jane Smith", phone: "07700 900000", message: "I need an electrician." };

describe("POST /api/contact — validation", () => {
  test("returns 400 when name is missing", async () => { const res = await POST(makeRequest({ phone: "07700 900000", message: "Hi" })); expect(res.status).toBe(400); });
  test("returns 400 when phone is missing", async () => { const res = await POST(makeRequest({ name: "Jane", message: "Hi" })); expect(res.status).toBe(400); });
  test("returns 400 when phone is invalid", async () => { const res = await POST(makeRequest({ name: "Jane", phone: "not-valid!", message: "Hi" })); expect(res.status).toBe(400); });
  test("returns 400 when message is missing", async () => { const res = await POST(makeRequest({ name: "Jane", phone: "07700 900000" })); expect(res.status).toBe(400); });
  test("returns 400 for invalid JSON", async () => {
    const req = new NextRequest("http://localhost/api/contact", { method: "POST", headers: { "Content-Type": "application/json", "x-forwarded-for": "127.0.0.2" }, body: "not-json{{" });
    expect((await POST(req)).status).toBe(400);
  });
});

describe("POST /api/contact — success", () => {
  beforeEach(() => mockSend.mockClear());
  test("returns 200 with valid body", async () => { const res = await POST(makeRequest(validBody, "10.0.0.1")); expect(res.status).toBe(200); expect((await res.json()).ok).toBe(true); });
  test("email optional", async () => { const res = await POST(makeRequest({ name: "Jane", phone: "07700 900000", message: "Hi" }, "10.0.0.2")); expect(res.status).toBe(200); });
  test("sanitises HTML tags", async () => {
    await POST(makeRequest({ name: "<b>Jane</b>", phone: "07700 900000", message: "Hi" }, "10.0.0.3"));
    expect(mockSend.mock.calls[0][0].text).toContain("Jane");
    expect(mockSend.mock.calls[0][0].text).not.toContain("<b>");
  });
});

describe("POST /api/contact — rate limiting", () => {
  const ip = "192.168.88.88";
  test("allows first 5", async () => { for (let i = 0; i < 5; i++) expect((await POST(makeRequest(validBody, ip))).status).toBe(200); });
  test("blocks 6th with 429", async () => { expect((await POST(makeRequest(validBody, ip))).status).toBe(429); });
});

describe("POST /api/contact — error handling", () => {
  test("returns 500 without exposing Resend error", async () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    mockSend.mockRejectedValueOnce(new Error("Resend DO NOT EXPOSE"));
    const res = await POST(makeRequest(validBody, "172.16.0.2"));
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.error).not.toMatch(/Resend/i);
    spy.mockRestore();
  });
});
