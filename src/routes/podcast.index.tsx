import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";
import { Badge } from "@/components/ui/badge";
import { damaged } from "@/content/damaged";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/podcast/")({ component: PodcastIndex });

function PodcastIndex() {
  return (
    <>
      <PageHero
        compact
        image="/images/podcast-cover.jpg"
        kicker="Podcast"
        title="The Damaged Table"
        body="Weekly conversations for people who still want Jesus and are finished performing. Play any episode here — your phone will read it aloud."
      />
      <Section>
        <ol className="grid gap-4">
          {damaged.episodes.map((ep) => (
            <li key={ep.slug}>
              <Link
                to="/podcast/$slug"
                params={{ slug: ep.slug }}
                className="flex flex-col gap-3 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:flex-row sm:items-center"
              >
                <img
                  src="/images/podcast-cover.jpg"
                  alt=""
                  className="size-24 rounded-md object-cover"
                  crossOrigin="anonymous"
                />
                <div className="flex-1">
                  <p className="text-xs text-muted">
                    Episode {String(ep.number).padStart(2, "0")} · {formatDate(ep.date)} · {ep.duration}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold">{ep.title}</h2>
                  <p className="mt-1 text-sm text-muted">{ep.summary}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {ep.topics.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
