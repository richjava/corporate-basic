/* eslint-disable @typescript-eslint/no-explicit-any */
import { format } from "date-fns";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/plugins/richjava_blog-basic/shared";
import { PortableText } from "@portabletext/react";

export default function Article1({ content }: any) {
  if (!content) return <></>;
  const { entry = null } = { ...content };
  let author = null;
  if (entry && entry.author) {
    author = entry.author;
  }
  return (
    <>
      <Head>
        {entry.title && (
          <>
            <title>{entry.title} | Blog | Blog Basic Built.js Plugin</title>
            <meta property="og:title" content={entry.title} />
            <meta name="twitter:title" content={entry.title} />
          </>
        )}
        {entry.image && (
          <>
            <meta property="og:image" content={entry.image.url} />
            <meta name="twitter:image" content={entry.image.url} />
            <meta name="image" content={entry.image.url} />
          </>
        )}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <article id="article1" className="px-4 py-20 template">
        {entry && (
          <div className="max-w-screen-xl mx-auto">
            <header className="max-w-4xl mx-auto">
              <div className="flex items-center mb-4">
                <p className="mb-0 capitalize preheading paragraph-sm">
                  {format(new Date(entry.date), "dd LLLL yyyy")}
                </p>
                <span className="mx-3 text-gray-100">|</span>
                <Link className="no-underline hover:underline" href="/">
                  <p className="mb-0 paragraph-sm">{entry.category}</p>
                </Link>
              </div>
              <h1 className="mb-10 heading-xxl">{entry.title}</h1>
              {author && (
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4 text-white">
                    <Image
                      className="rounded-full"
                      src={author.profile.profileImage.url}
                      fill
                      style={{ objectFit: "cover" }}
                      alt={author.fullName}
                    />
                  </div>
                  <div>
                    <p className="mb-0 font-bold capitalize paragraph-md">
                      {author.fullName}
                    </p>
                    <p className="mb-0 text-sm capitalize">
                      {author.position || "Writer"}
                    </p>
                  </div>
                </div>
              )}
            </header>
            <div className="relative my-20 h-96">
              <Image
                src={entry.image.url}
                fill
                style={{ objectFit: "cover" }}
                alt={entry.title}
              />
            </div>
            <PortableText value={entry.content} />
            <div className="pt-5">
              {entry.tags && (
                <div className="grid grid-flow-col gap-2 mb-4 auto-cols-max">
                  {entry.tags.map((tag: any) => {
                    return <Tag key={tag.name} data={tag}></Tag>;
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
