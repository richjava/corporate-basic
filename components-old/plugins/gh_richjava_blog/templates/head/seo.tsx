import Head from "next/head";
import { urlForImage } from "@/builtjs-utils";

export default function Seo({ content }:any) {
  let { data = null } = { ...content };
  let shareImage = urlForImage(data?.shareImage.url);
  return (
    <>
      {data && (
        <Head>
          {data.pageTitle && (
            <>
              <title>{data.pageTitle}</title>
              <meta property="og:title" content={data.pageTitle} />
              <meta name="twitter:title" content={data.pageTitle} />
            </>
          )}
          {data.description && (
            <>
              <meta name="description" content={data.description} />
              <meta
                property="og:description"
                content={data.description}
              />
              <meta
                name="twitter:description"
                content={data.description}
              />
            </>
          )}
          {data.shareImage && (
            <>
              <meta property="og:image" content={shareImage} />
              <meta name="twitter:image" content={shareImage} />
              <meta name="image" content={shareImage} />
            </>
          )}
          {data.article && <meta property="og:type" content="article" />}
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      )}
    </>
  );
}
