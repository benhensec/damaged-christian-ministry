import { createFileRoute } from "@tanstack/react-router";
import { MediaCard } from "@/components/ministry/media-card";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";
import { damaged } from "@/content/damaged";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/watch/")({ component: WatchIndex });

function WatchIndex() {
  return (
    <>
      <PageHero
        compact
        image={asset("/images/damaged-journal.jpg")}
        kicker="YouTube · Not Destroyed"
        title="Watch the messages."
        body="Premiere on the channel. Stay and read here. Use Listen to hear each teaching read aloud on your phone."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {damaged.messages.map((m) => (
            <MediaCard
              key={m.slug}
              to={`/watch/${m.slug}`}
              image={m.image}
              kicker={m.series}
              title={m.title}
              summary={m.summary}
              date={m.date}
              meta={`${m.scripture} · ${m.duration}`}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
