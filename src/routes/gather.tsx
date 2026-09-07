import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ministry/contact-form";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";
import { damaged } from "@/content/damaged";
import { formatDate } from "@/lib/utils";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/gather")({ component: GatherPage });

function GatherPage() {
  return (
    <>
      <PageHero
        compact
        image={asset("/images/damaged-circle.jpg")}
        kicker="Gather"
        title="The Damaged Table"
        body="A monthly in-person sitting in Nassau County. Twelve chairs. Scripture, silence, a meal. No fog machine."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold">How we sit</h2>
            <ul className="mt-6 space-y-3 text-muted">
              {damaged.visitorNotes.map((n) => (
                <li key={n} className="border-l-2 border-accent pl-4">
                  {n}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 font-display text-2xl font-semibold">Upcoming tables</h3>
            <ul className="mt-4 space-y-4">
              {damaged.events.map((ev) => (
                <li key={ev.id} className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
                  <p className="text-xs text-muted">
                    {formatDate(ev.date)} · {ev.time}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold">{ev.title}</p>
                  <p className="text-sm text-muted">{ev.place}</p>
                  <p className="mt-2 text-sm text-muted">{ev.summary}</p>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm siteId="damaged" mode="seat" />
        </div>
      </Section>
    </>
  );
}
