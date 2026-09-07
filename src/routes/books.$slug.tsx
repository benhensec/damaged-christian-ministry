import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ListenButton } from "@/components/ministry/listen-button";
import { Button } from "@/components/ui/button";
import { damaged } from "@/content/damaged";

export const Route = createFileRoute("/books/$slug")({
  component: BookPage,
  loader: ({ params }) => {
    const book = damaged.books.find((b) => b.slug === params.slug);
    if (!book) throw notFound();
    return book;
  },
});

function BookPage() {
  const book = Route.useLoaderData();
  const spoken = `${book.title}. ${book.subtitle}. ${book.chapters.map((c) => `${c.title}. ${c.body}`).join(" ")}`;

  return (
    <article className="mx-auto max-w-5xl px-4 py-12">
      <Button asChild variant="ghost" className="mb-8 w-fit px-0">
        <Link to="/books">
          <ArrowLeft /> All books
        </Link>
      </Button>
      <div className="grid gap-10 md:grid-cols-[14rem_1fr]">
        <img
          src={book.cover}
          alt={`${book.title} cover`}
          className="w-56 justify-self-center rounded-lg object-cover md:justify-self-start"
          crossOrigin="anonymous"
        />
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">
            {book.author} · {book.year} · {book.pages} pages
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{book.title}</h1>
          <p className="mt-2 text-xl text-muted">{book.subtitle}</p>
          <p className="mt-5 max-w-xl text-muted">{book.blurb}</p>
          <div className="mt-6">
            <ListenButton label="Listen to the sample" text={spoken} />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-3xl space-y-14">
        {book.chapters.map((ch) => (
          <section key={ch.title}>
            <p className="text-xs uppercase tracking-[0.16em] text-accent">Sample chapter</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">{ch.title}</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed">
              {ch.body.split("\n\n").map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
