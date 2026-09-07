import { createFileRoute } from "@tanstack/react-router";
import { BookCard } from "@/components/ministry/media-card";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";
import { damaged } from "@/content/damaged";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/books/")({ component: BooksIndex });

function BooksIndex() {
  return (
    <>
      <PageHero
        compact
        image={asset("/images/book-unbroken.jpg")}
        kicker="Books"
        title="Short books. Heavy sentences."
        body="Written to be finished. Meant to be underlined. Not a platform — a companion for the weeks you almost quit."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
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
    </>
  );
}
