import { Outlet, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold">404</h1>
        <p className="mt-4 text-espresso/70">This page took a coffee break.</p>
        <Link to="/" className="mt-6 inline-flex bg-espresso text-beige px-5 py-2.5 rounded-full">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-bold">Something spilled.</h1>
        <p className="mt-2 text-espresso/70 text-sm">Try refreshing the page.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 inline-flex bg-espresso text-beige px-5 py-2.5 rounded-full"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Brew — Islamabad's Coziest Cafe in I-8 Markaz" },
      { name: "description", content: "Brew is Islamabad's cozy cafe in I-8 Markaz serving artisan coffee, matcha, iced teas, brownies & cheesecakes. Sip. Stay. Repeat." },
      { property: "og:title", content: "Brew — Islamabad's Coziest Cafe" },
      { property: "og:description", content: "Coffee, matcha, iced teas & desserts in I-8 Markaz, Islamabad." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
