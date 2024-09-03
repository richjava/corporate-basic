import { ButtonLink, Preheading } from "components/elements";

export default function Cards3({ content }: any) {
  if (!content) return <></>;
  let { collections = null } = { ...content };
  if (!collections) {
    return <></>;
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];

  return (
    <section id="cards-3" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {collection &&
            collection.map((entry: any, i: number) => (
              <div
                key={i}
                className="p-8 bg-secondary rounded-md dark:bg-gray-700"
              >
                <Preheading
                  data={entry.preheading}
                ></Preheading>
                <h3 className="heading-lg mb-4">{entry.title}</h3>
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
