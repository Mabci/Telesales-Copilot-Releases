export const config = { runtime: "edge" };

const MANIFEST =
  "https://raw.githubusercontent.com/Mabci/Telesales-Copilot-Releases/main/telesales/latest.json";

export default async function handler() {
  const res = await fetch(MANIFEST, { cache: "no-store" });
  if (!res.ok) return new Response("Manifest unavailable", { status: 502 });
  const { url } = await res.json();
  return Response.redirect(url, 302);
}
