import React from "react";
import { Reference } from "../types/essay";

function formatIEEE(ref: Reference, index: number): string {
  // Minimal IEEE-like formatter from provided fields
  const parts: string[] = [];
  if (ref.author) parts.push(ref.author);
  if (ref.title) parts.push(`"${ref.title}"`);
  if (ref.journal) parts.push(ref.journal);
  if (ref.volume) parts.push(`vol. ${ref.volume}`);
  if (ref.pages) parts.push(`pp. ${ref.pages}`);
  if (ref.year) parts.push(`${ref.year}`);
  if (ref.doi) parts.push(`doi: ${ref.doi}`);
  if (ref.url && !ref.doi) parts.push(ref.url);
  return `[${index + 1}] ${parts.join(", ")}`;
}

export default function ReferencesList({ references }: { references: Reference[] }) {
  return (
    <section id="references" className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8">
      <h3 className="text-xl font-semibold mb-4">References</h3>
      <ol className="space-y-3 list-decimal pl-5">
        {references.map((ref, i) => (
          <li key={ref.id} className="text-sm leading-6">
            {formatIEEE(ref, i)}
          </li>
        ))}
      </ol>
    </section>
  );
}


