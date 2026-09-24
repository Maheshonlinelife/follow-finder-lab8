import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Betting Hospital — Bet Command" },
      {
        name: "description",
        content: "Roulette decision intelligence with follower pattern mining and table regime analysis.",
      },
      { property: "og:title", content: "Betting Hospital — Bet Command" },
      {
        property: "og:description",
        content: "Roulette decision intelligence with follower pattern mining and table regime analysis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-background">
      <iframe
        title="Betting Hospital decision tool"
        src="/bcc-live-preview_25.html"
        className="h-full w-full border-0"
      />
    </main>
  );
}
