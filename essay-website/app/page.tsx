import { essayData } from "../data/essayData";
import { Reference } from "../types/essay";
import AudioBlock from "../components/AudioBlock";
import VideoBlock from "../components/VideoBlock";
import FigureBlock from "../components/FigureBlock";
import { renderWithCitations } from "../components/RichText";
import ReferencesList from "../components/ReferencesList";

function buildReferenceIndexMap(references: Reference[]): Map<string, number> {
  const map = new Map<string, number>();
  references.forEach((ref, idx) => {
    map.set(ref.id, idx);
  });
  return map;
}

export default function Page() {
  const { title, author, sections, references } = essayData;
  const keyToIndex = buildReferenceIndexMap(references);

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold leading-tight text-balance">
          {title}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{author}</p>
      </header>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        {sections.map((section) => (
          <section key={section.id} className="mb-12">
            <h2 className="mt-10 mb-4 text-2xl font-semibold">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <div key={p.id} className="mb-6">
                {p.content && (
                  <p>{renderWithCitations(p.content, keyToIndex)}</p>
                )}
                {p.audioClips && p.audioClips.length > 0 && (
                  <div className="space-y-6">
                    {p.audioClips.map((clip) => (
                      <AudioBlock key={clip.id} clip={clip} />)
                    )}
                  </div>
                )}
                {p.videoClips && p.videoClips.length > 0 && (
                  <div className="space-y-6">
                    {p.videoClips.map((clip) => (
                      <VideoBlock key={clip.id} clip={clip} />
                    ))}
                  </div>
                )}
                {p.figures && p.figures.length > 0 && (
                  <div className="space-y-6">
                    {p.figures.map((f) => (
                      <FigureBlock key={f.id} figure={f} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>
        ))}
      </article>

      <ReferencesList references={references} />
    </main>
  );
}


