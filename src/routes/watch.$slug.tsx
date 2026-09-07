import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ListenButton } from "@/components/ministry/listen-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { damaged } from "@/content/damaged";
import { formatDate, readingMinutes } from "@/lib/utils";

export const Route = createFileRoute("/watch/$slug")({
  component: WatchMessage,
  loader: ({ params }) => {
    const message = damaged.messages.find((m) => m.slug === params.slug);
    if (!message) throw notFound();
    return message;
  },
});

function WatchMessage() {
  const message = Route.useLoaderData();
  const others = damaged.messages.filter((m) => m.slug !== message.slug).slice(0, 3);

  return (
    <article>
      <div className="relative min-h-[42vh] overflow-hidden">
        <img src={message.image} alt="" className="absolute inset-0 size-full object-cover" crossOrigin="anonymous" />
        <div className="absolute inset-0 bg-bg/50" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent, var(--site-bg))" }}
        />
        <div className="relative mx-auto flex min-h-[42vh] max-w-3xl flex-col justify-end px-4 py-12 text-fg">
          <Button asChild variant="ghost" className="mb-6 w-fit hover:bg-surface">
            <Link to="/watch">
              <ArrowLeft /> All messages
            </Link>
          </Button>
          <Badge className="w-fit">{message.series}</Badge>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{message.title}</h1>
          <p className="mt-3 text-sm text-muted">
            {message.scripture} · {formatDate(message.date)} · {readingMinutes(message.body)} min read
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="flex flex-wrap gap-3">
          <ListenButton label="Listen to this message" text={`${message.title}. ${message.scripture}. ${message.body}`} />
          {damaged.youtube ? (
            <Button asChild variant="outline">
              <a href={damaged.youtube} target="_blank" rel="noreferrer">
                Open on YouTube
              </a>
            </Button>
          ) : null}
        </div>
        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          {message.body.split("\n\n").map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <aside className="mt-16 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Keep going</p>
          <ul className="mt-4 grid gap-3">
            {others.map((m) => (
              <li key={m.slug}>
                <Link to="/watch/$slug" params={{ slug: m.slug }} className="text-lg hover:text-accent">
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
