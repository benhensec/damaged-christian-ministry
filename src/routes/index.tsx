import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BookCard, MediaCard } from "@/components/ministry/media-card";
import { PageHero } from "@/components/ministry/page-hero";
import { Kicker, Section, SectionTitle } from "@/components/ministry/section";
import { Button } from "@/components/ui/button";
import { damaged } from "@/content/damaged";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = damaged.messages[0];
  const rest = damaged.messages.slice(1, 4);

  return (
    <>
      <PageHero
        image={damaged.heroImage}
        kicker={damaged.heroKicker}
        title={damaged.heroTitle}
        body={damaged.heroBody}
        actions={
          <>
            <Button asChild>
              <Link to="/watch/$slug" params={{ slug: featured.slug }}>
                Watch the latest message
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/podcast">Listen to the podcast</Link>
            </Button>
          </>
        }
      />

      <Section>
        <div className="flex flex-col gap-4 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Kicker>Sister parish</Kicker>
            <p className="mt-2 font-display text-2xl font-semibold">Prince of Peace Lutheran Church</p>
            <p className="mt-1 text-sm text-muted">The new Fernandina Beach site — worship, events, news, and give.</p>
          </div>
          <Button asChild>
            <a href="https://www.princeofpeacelutheran.com">Open Prince of Peace</a>
          </Button>
        </div>
      </Section>

      <Section>
        <Kicker>Three ways to stay</Kicker>
        <SectionTitle>Watch. Listen. Read.</SectionTitle>
        <p className="mt-4 max-w-2xl text-muted">
          A YouTube teaching ministry, a weekly podcast, and short books — all aimed at people who
          still want Jesus and are finished performing.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              to: "/watch",
              title: "Watch",
              body: "The Not Destroyed series. Messages you can read here or hear aloud.",
            },
            {
              to: "/podcast",
              title: "Listen",
              body: "The Damaged Table — parking-lot honesty with an open Bible.",
            },
            {
              to: "/books",
              title: "Read",
              body: "Scar Tissue, Still His, and a forty-day thread through the dark.",
            },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-transform duration-(--motion-fast) hover:-translate-y-0.5"
            >
              <p className="font-display text-2xl font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
                Open <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Kicker>YouTube · Not Destroyed</Kicker>
            <SectionTitle>Latest messages</SectionTitle>
          </div>
          <Button asChild variant="ghost">
            <Link to="/watch">All teachings</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <MediaCard
            to={`/watch/${featured.slug}`}
            image={featured.image}
            kicker={featured.series}
            title={featured.title}
            summary={featured.summary}
            date={featured.date}
            meta={`${featured.scripture} · ${featured.duration}`}
          />
          <div className="grid gap-6">
            {rest.map((m) => (
              <MediaCard
                key={m.slug}
                to={`/watch/${m.slug}`}
                image={m.image}
                kicker={m.series}
                title={m.title}
                summary={m.summary}
                date={m.date}
                meta={m.duration}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <Kicker>Podcast</Kicker>
        <SectionTitle>The Damaged Table</SectionTitle>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {damaged.episodes.slice(0, 4).map((ep) => (
            <Link
              key={ep.slug}
              to="/podcast/$slug"
              params={{ slug: ep.slug }}
              className="flex gap-4 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]"
            >
              <img
                src="/images/podcast-cover.jpg"
                alt=""
                className="size-20 rounded-md object-cover"
                crossOrigin="anonymous"
              />
              <div>
                <p className="text-xs text-muted">Episode {ep.number}</p>
                <h3 className="font-display text-xl font-semibold">{ep.title}</h3>
                <p className="mt-1 text-sm text-muted">{ep.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Kicker>Books</Kicker>
        <SectionTitle>Pages meant to be underlined</SectionTitle>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {damaged.books.map((book) => (
            <BookCard
              key={book.slug}
              to={`/books/${book.slug}`}
              cover={book.cover}
              title={book.title}
              subtitle={book.subtitle}
              author={book.author}
            />
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden">
        <img
          src="/images/damaged-circle.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
          crossOrigin="anonymous"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, var(--site-bg), color-mix(in oklab, var(--site-bg) 35%, transparent))" }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-4 py-20 text-fg">
          <Kicker>Nassau County</Kicker>
          <h2 className="max-w-xl font-display text-4xl font-semibold">Twelve chairs. An open Bible. A meal.</h2>
          <p className="max-w-xl text-muted">
            Once a month we set a physical table in Yulee. No program except the gospel. Request a
            seat — if the room is full, we will not pack it.
          </p>
          <div>
            <Button asChild>
              <Link to="/gather">Request a seat</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
