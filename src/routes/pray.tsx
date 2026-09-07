import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ministry/contact-form";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/pray")({ component: PrayPage });

function PrayPage() {
  return (
    <>
      <PageHero
        compact
        image={asset("/images/damaged-journal.jpg")}
        kicker="Pray"
        title="Tell the truth in God’s direction."
        body="We hold requests with the table. Nothing is published. If it is an emergency, call someone in the room — and then write it here anyway."
      />
      <Section className="max-w-3xl">
        <ContactForm siteId="damaged" mode="prayer" />
      </Section>
    </>
  );
}
