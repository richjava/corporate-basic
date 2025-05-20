/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonLink, Preheading } from "@/components/elements";

export default function Cards1({ content }: any) {
  if (!content) return <></>;
  const { collections = null } = { ...content };
  if (!collections) {
    return <></>;
  }
  const collectionName = Object.keys(collections)[0];
  const collection = collections[collectionName];

  return (
    <section id="cards-1" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {collection &&
            collection.map((entry: any, i: number) => (
              <div
                key={i}
                className="p-8 border rounded-md border-gray-300 dark:border-gray-700"
              >
                <Preheading
                  data={entry.preheading}
                ></Preheading>
                <h3 className="mb-4 heading-lg">{entry.title}</h3>
                <p className="mb-10">{entry.blurb}</p>
                {entry.buttonLinks &&
                  entry.buttonLinks.map((button: any) => {
                    return (
                      <ButtonLink
                        key={button.type}
                        data={button}
                      ></ButtonLink>
                    );
                  })}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
