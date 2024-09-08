import React from "react";
import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/builtjs-utils";
import { ButtonLink, Preheading } from "@/components/elements";

export default function Cover5({ content }: any) {
  if (!content) return <></>;
  let { data = null } = { ...content };

  return (
    <section id="cover-5" className="p-0 template">
      <div className="relative flex items-center min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            className="rounded-none"
            src={urlForImage(data?.image)}
            fill
            style={{objectFit:"cover"}}
            alt={data.heading}
          />
        </div>

        <div className="relative z-10 px-4 py-20 mx-auto text-center lg:py-40">
          <Preheading data={data.preheading}></Preheading>
          <h1 className="max-w-5xl mx-auto display-md">{data.heading}</h1>
          <p className="max-w-xl mx-auto mb-12 text-lg text-whit dark:text-white">
            {data.blurb}
          </p>
          {data.buttonLinks &&
            data.buttonLinks.map((button: any) => {
              return (
                <ButtonLink key={button.type} data={button}></ButtonLink>
              );
            })}
        </div>
      </div>
    </section>
  );
}
