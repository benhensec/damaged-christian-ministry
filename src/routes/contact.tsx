import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ministry/contact-form";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";
import { damaged } from "@/content/damaged";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <>
      <PageHero
        compact
        image={asset("/images/damaged-journal.jpg")}
        kicker="Contact"
        title="Write. We read it."
        body={`${damaged.location}. ${damaged.email}`}
      />
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <ContactForm siteId="damaged" mode="contact" />
          <div>
            <h2 className="font-display text-2xl font-semibold">Direct</h2>
            <p className="mt-3 text-muted">{damaged.email}</p>
            <p className="mt-2 text-sm text-muted">{damaged.location}</p>
            <h3 className="mt-8 font-display text-xl font-semibold">Media & books</h3>
            <p className="mt-2 text-sm text-muted">
              For YouTube, podcast guests, and bulk books, use the form and put “media” in the first
              line. We are small on purpose and slow on purpose.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
