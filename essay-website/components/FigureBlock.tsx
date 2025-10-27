import React from "react";
import { Figure } from "../types/essay";

function isPdf(src: string): boolean {
  return src.toLowerCase().endsWith(".pdf");
}

export default function FigureBlock({ figure }: { figure: Figure }) {
  return (
    <figure className="my-8">
      {isPdf(figure.src) ? (
        <object
          data={figure.src}
          type="application/pdf"
          className="w-full h-[600px] border border-gray-200 dark:border-gray-800 rounded"
        >
          <a href={figure.src} className="text-blue-600 dark:text-blue-400 underline">
            View PDF
          </a>
        </object>
      ) : (
        <img
          src={figure.src}
          alt={figure.caption || figure.id}
          className="w-full rounded border border-gray-200 dark:border-gray-800"
        />
      )}
      {figure.caption && (
        <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {figure.caption}
        </figcaption>
      )}
    </figure>
  );
}


