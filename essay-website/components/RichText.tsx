import React from "react";

// Convert LaTeX-style citations like \cite{key} to IEEE numeric [n] with anchor links.
// We assume the page provides a key->index map (0-based), and we render [index+1].

export function renderWithCitations(text: string, keyToIndex: Map<string, number>): React.ReactNode {
  if (!text) return null;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  const regex = /\\cite\{([^}]+)\}/g; // matches \cite{a,b}
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const before = text.slice(lastIndex, match.index);
    if (before) parts.push(before);

    const keys = match[1].split(",").map((k) => k.trim()).filter(Boolean);
    const labels = keys.map((k) => {
      const idx = keyToIndex.get(k);
      return typeof idx === "number" ? idx + 1 : "?";
    });

    parts.push(
      <a key={match.index} href="#references" className="reference">[{labels.join(", ")}]</a>
    );
    lastIndex = match.index + match[0].length;
  }

  const rest = text.slice(lastIndex);
  if (rest) parts.push(rest);
  return <>{parts}</>;
}


