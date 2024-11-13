import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { urlForImage, collectionSlug, entrySlug } from "@/builtjs-utils";
import { Tag } from "@/components/plugins/richjava_blog-basic/shared";

export default function List1({ content }: any) {
  if (!content) return <></>;
  let { collections = null } = { ...content };
  if (!collections) {
    return <></>;
  }
  let collectionName = Object.keys(collections)[0];
  const heroPost = collections[collectionName][0];
  const url = `/${collectionSlug(heroPost)}/${entrySlug(heroPost)}`;
  return (
    <section id="list1" className="px-4 py-20 template">
      <div className="max-w-screen-xl mx-auto">
        {heroPost && (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            {heroPost.image && (
              <div className="h-full col-span-3 lg:order-last">
                <Link href={url}>
                  <div className="relative transition-opacity rounded-lg h-96 lg:h-full hover:opacity-80">
                    <Image
                      className="bg-gray-400 rounded-lg"
                      src={urlForImage(heroPost.image)}
                      fill
                      style={{ objectFit: "cover" }}
                      alt={heroPost.title}
                    />
                  </div>
                </Link>
              </div>
            )}
            <div className="col-span-2 lg:py-20">
              {heroPost.tags && (
                <div className="grid grid-flow-col gap-2 mb-4 auto-cols-max">
                  {heroPost.tags.map((tag: any) => {
                    return <Tag key={tag.aname} data={tag}></Tag>;
                  })}
                </div>
              )}
              <div className="flex items-center mb-4">
                {heroPost.date && (
                  <p className="capitalize paragraph-2 preheading">
                    {format(new Date(heroPost.date), "dd LLLL yyyy")}
                  </p>
                )}
                <span className="mx-3 text-gray-100">|</span>
                {heroPost.category && (
                  <Link className="no-underline hover:underline" href={`/`}>
                    <p className="capitalize paragraph-2">
                      {heroPost.category}
                    </p>
                  </Link>
                )}
              </div>
              <Link className="no-underline" href={url}>
                <h2 className="heading-xl hover:text-gray-700 dark:hover:text-gray-300">
                  {heroPost.title}
                </h2>
              </Link>
              <p className="mb-10 paragraph-lg">{heroPost.blurb}</p>
              <Link className="text-gray-600 dark:text-gray-300" href={url}>Read Article</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
