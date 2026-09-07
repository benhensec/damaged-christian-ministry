import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ListenButton } from "@/components/ministry/listen-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { damaged } from "@/content/damaged";
import { formatDate } from "@/lib/utils";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/podcast/$slug")({
  component: EpisodePage,
  loader: ({ params }) => {
    const episode = damaged.episodes.find((e) => e.slug === params.slug);
    if (!episode) throw notFound();
    return episode;
  },
});

function EpisodePage() {
  const episode = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Button asChild variant="ghost" className="mb-6 w-fit px-0">
        <Link to="/podcast">
          <ArrowLeft /> All episodes
        </Link>
      </Button>
      <div className="flex flex-col gap-6 sm:flex-row">
        <img
          src={asset("/images/podcast-cover.jpg")}
          alt="The Damaged Table"
          className="w-40 rounded-lg object-cover"
          crossOrigin="anonymous"
        />
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">
            Episode {episode.number} · {formatDate(episode.date)}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold">{episode.title}</h1>
          <p className="mt-3 text-muted">{episode.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {episode.topics.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <div className="mt-5">
            <ListenButton label="Play episode" text={`${episode.title}. ${episode.body}`} />
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-5 text-lg leading-relaxed">
        {episode.body.split("\n\n").map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </article>
  );
}
