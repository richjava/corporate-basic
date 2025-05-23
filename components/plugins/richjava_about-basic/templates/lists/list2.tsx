/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { collectionSlug, entrySlug } from "@/lib/builtjs-utils";
import Image from "next/image";

export default function List2({ content }: any) {
  if (!content) return <></>;
  const { collections } = content;
  if (!collections) {
    return <></>;
  }
  const collectionName = Object.keys(collections)[0];
  const collection = collections[collectionName];

  return (
    <section id="list-2" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {collection &&
            collection.map((entry: any) => {
              return (
                <div key={entry.slug}>
                  <div>
                    <Link
                      className="w-24"
                      href={`/${collectionName}/${entry.slug}`}
                    >
                      <div className="relative mb-6 transition-opacity h-96 lg:h-56 hover:opacity-80">
                        {entry.image && (
                          <Image
                            className="bg-secondaryrounded-md"
                            src={entry.image.url}
                            fill
                            style={{objectFit:"cover"}}
                            alt={entry.title}
                          />
                        )}
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="no-underline"
                      href={`/${collectionSlug(entry)}/${entrySlug(entry)}`}
                    >
                      <h3 className="mb-2 heading-lg hover:text-gray-700 dark:hover:text-gray-300">
                        {entry.title}
                      </h3>
                    </Link>
                    <p>{entry.blurb}</p>
                    <Link className="text-gray-600 dark:text-gray-300"
                      href={`/${collectionSlug(entry)}/${entrySlug(entry)}`}
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        {!collection.length && (
          <div>
            <p>No posts</p>
          </div>
        )}
      </div>
    </section>
  );
}
