import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import { useRouteContext } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TEDxCongaree Vista — Ideas worth spreading in Columbia, SC" },
      {
        name: "description",
        content:
          "A friendly, independently-organized TEDx event in Columbia, South Carolina. Ideas, people, and stories from our community.",
      },
      { name: "theme-color", content: "#EB0028" },
      { property: "og:title", content: "TEDxCongaree Vista — Ideas worth spreading in Columbia, SC" },
      { name: "twitter:title", content: "TEDxCongaree Vista — Ideas worth spreading in Columbia, SC" },
      { name: "description", content: "TEDxCongaree Vista is a premium website showcasing inspiring talks and community leaders." },
      { property: "og:description", content: "TEDxCongaree Vista is a premium website showcasing inspiring talks and community leaders." },
      { name: "twitter:description", content: "TEDxCongaree Vista is a premium website showcasing inspiring talks and community leaders." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ae2edff1-da44-4100-91d6-d1c74ee6fa1e/id-preview-6cab2284--0b53454b-4072-4173-bb6e-924752c2d1d1.lovable.app-1781821009927.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ae2edff1-da44-4100-91d6-d1c74ee6fa1e/id-preview-6cab2284--0b53454b-4072-4173-bb6e-924752c2d1d1.lovable.app-1781821009927.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Inter:wght@400;500;600;700&family=Patrick+Hand&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-display text-5xl">Page not found</h1>
      <p className="mt-3 text-muted-foreground">That page wandered off.</p>
      <a href="/" className="mt-6 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm">
        Back home
      </a>
    </div>
  ),
});

function RootShell() {
  const { queryClient } = useRouteContext({ from: Route.id });
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <QueryClientProvider client={queryClient}>
          <Nav />
          <main className="pt-16">
            <Outlet />
          </main>
          <Footer />
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  );
}
