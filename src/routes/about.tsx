import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ministry/page-hero";
import { Kicker, Section, SectionTitle } from "@/components/ministry/section";
import { Button } from "@/components/ui/button";
import { damaged } from "@/content/damaged";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <>
      <PageHero
        compact
        image="/images/damaged-water.jpg"
        kicker="About"
        title="A table, not a brand."
        body={damaged.mission}
      />
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed">
            {damaged.about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <Kicker>Vision</Kicker>
            <p className="mt-3 font-display text-2xl font-semibold">{damaged.vision}</p>
            <p className="mt-6 text-sm text-muted">{damaged.location}</p>
            <Button asChild className="mt-6">
              <Link to="/gather">Gather with us</Link>
            </Button>
          </div>
        </div>
      </Section>
      <Section className="pt-0">
        <Kicker>What we confess</Kicker>
        <SectionTitle>Four sentences we will not negotiate.</SectionTitle>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {damaged.beliefs.map((b) => (
            <div key={b.title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-2xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
