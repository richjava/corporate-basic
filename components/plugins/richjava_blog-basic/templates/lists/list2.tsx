/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { collectionSlug, entrySlug } from "@/lib/builtjs-utils";
import { Tag } from "@/components/plugins/richjava_blog-basic/shared";

export default function List2({ content }: any) {
  if (!content) return <></>;
  const { collections } = content;
  if (!collections) {
    return <></>;
  }
  const collectionName = Object.keys(collections)[0];
  const collection = collections[collectionName];
  return (
    <section id="list2" className="px-4 py-20 template">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {collection &&
            collection.map((entry: any) => {
              return (
                <div key={entrySlug(entry)}>
                  {entry.image && (
                    <div>
                      <Link
                        className="w-24"
                        href={`/${collectionSlug(entry)}/${entrySlug(entry)}`}
                      >
                        <div className="relative mb-6 transition-opacity h-96 lg:h-56 hover:opacity-80">
                          <Image
                            className="bg-gray-400 rounded-lg"
                            src={entry.image.url}
                            fill
                            style={{ objectFit: "cover" }}
                            alt={entry.title}
                          />
                        </div>
                      </Link>
                    </div>
                  )}
                  <div>
                    {entry.tags && (
                      <div className="grid grid-flow-col gap-2 mb-4 auto-cols-max">
                        {entry.tags.map((tag: any) => {
                          return <Tag key={tag.name} data={tag}></Tag>;
                        })}
                      </div>
                    )}
                    <div className="flex items-center mb-2">
                      <p className="mb-0 capitalize paragraph-2 preheading">
                        {format(new Date(entry.date), "dd LLLL yyyy")}
                      </p>
                      <span className="mx-3 text-gray-100">|</span>
                      {entry.category && (
                        <Link
                          className="no-underline hover:underline"
                          href={`/`}
                        >
                          <p className="mb-0 capitalize paragraph-2">
                            {entry.category}
                          </p>
                        </Link>
                      )}
                    </div>
                    <Link
                      className="no-underline"
                      href={`/${collectionSlug(entry)}/${entrySlug(entry)}`}
                    >
                      <h3 className="mb-2 heading-lg hover:text-gray-700 dark:hover:text-gray-300">
                        {entry.title}
                      </h3>
                    </Link>
                    <p className="paragraph-md">{entry.blurb}</p>
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
            <p className="paragraph-lg">No posts</p>
          </div>
        )}
      </div>
    </section>
  );
}
