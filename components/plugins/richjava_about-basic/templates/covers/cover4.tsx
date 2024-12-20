import Image from "next/image";
import { widthForImage, heightForImage } from "@/lib/builtjs-utils";
import { ButtonLink, Preheading } from "@/components/plugins/richjava_about-basic/elements";

export default function Cover4({ content }: any) {
  if (!content) return <></>;
  let { data = null } = { ...content };

  return (
    <section id="cover-4" className="p-0 template">
      <div className="lg:flex lg:items-center lg:min-h-screen">
        <div className="w-full max-w-screen-xl px-4 py-20 mx-auto ">
          <div className="pb-24 text-center">
            <Preheading data={data.preheading}></Preheading>
            <h1 className="max-w-5xl mx-auto display-md">{data.heading}</h1>
            <p className="max-w-xl mx-auto mb-12">{data.blurb}</p>
            {data.buttonLinks &&
              data.buttonLinks.map((button: any) => {
                return (
                  <ButtonLink key={button.type} data={button}></ButtonLink>
                );
              })}
          </div>
          <div className="relative">
            <Image
              src={data?.image.url}
              width={widthForImage(data?.image)}
              height={heightForImage(data?.image)}
              style={{ objectFit: "cover" }}
              alt={data.heading}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
