/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function ProfileArticle1({ content }: any) {
  if (!content) return <></>;
  const { entry: author = null } = { ...content };

  const profile = author ? author.profile : null;
  return (
    <>
      <Head>
        {author && (
          <>
            <title>{author.fullName} | Team Member</title>
            <meta property="og:title" content={author.fullName} />
            <meta name="twitter:title" content={author.fullName} />
          </>
        )}
        {profile && profile.profileImage && (
          <>
            <meta property="og:image" content={profile?.profileImage.url} />
            <meta name="twitter:image" content={profile?.profileImage.url} />
            <meta name="image" content={profile?.profileImage.url} />
          </>
        )}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <article id="profile-article1" className="template">
        {author && (
          <div className="relative max-w-4xl pb-20 mx-auto">
            <header>
              <span className={`preheading blank left`}>
                {profile?.position}
              </span>
              <div className="flex items-center">
                <h1 className="mb-10 heading-xxl">{author.fullName}</h1>
              </div>
            </header>
            {profile.profileImage && (
              <div className="relative mb-20">
                <div className="h-96">
                  <Image
                    className="object-cover"
                    src={profile?.profileImage.url}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={author.fullName}
                  />
                </div>
              </div>
            )}
            <PortableText value={profile?.bio} />
          </div>
        )}
      </article>
    </>
  );
}
