import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";
import { Button } from "@/components/ui/button";
import { damaged } from "@/content/damaged";

export const Route = createFileRoute("/give")({ component: GivePage });

function GivePage() {
  return (
    <>
      <PageHero
        compact
        image="/images/damaged-water.jpg"
        kicker="Give"
        title="Keep the table set."
        body={damaged.givingNote}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl font-semibold">Mail a gift</h2>
            <p className="mt-3 text-sm text-muted">
              Damaged Christian Ministry
              <br />
              Yulee, Florida
            </p>
            <p className="mt-3 text-sm text-muted">
              Write {damaged.email} and we will send a mailing address for checks. We would rather
              have a slower gift than a story we cannot tell in the light.
            </p>
          </div>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl font-semibold">Ask first</h2>
            <p className="mt-3 text-sm text-muted">
              If you want to underwrite a book printing, a table meal, or the next teaching season,
              write us. We will tell you exactly where it goes.
            </p>
            <Button asChild className="mt-5">
              <Link to="/contact">Write the ministry</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
