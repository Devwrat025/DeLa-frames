/**
 * Emits a JSON-LD block. Server-rendered so the markup is present in the
 * static HTML crawlers fetch, rather than injected later by the client.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is authored by us, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
