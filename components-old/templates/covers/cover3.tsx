import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/builtjs-utils";
import { ButtonLink, Preheading } from "@/components/elements";

export default function Cover3({ content }: any) {
  if (!content) return <></>;
  let { data = null } = { ...content };

  return (
    <section id="cover-3" className="p-0 template">
      <div className="grid grid-cols-1 lg:items-center lg:min-h-screen lg:grid-cols-2">
        <div className="relative py-64 lg:h-full lg:order-last">
          <Image
            className="rounded-none"
            src={urlForImage(data?.image)}
            fill
            style={{ objectFit: "cover" }}
            alt={data.heading}
          />
        </div>
        <div>
          <div className="px-4 pt-10 pb-20 lg:px-8 lg:mx-auto lg:max-w-xl lg:py-40">
            <Preheading data={data.preheading}></Preheading>
            <h1 className="display-md">{data.heading}</h1>
            <p className="mb-12">{data.blurb}</p>
            {data.buttonLinks &&
              data.buttonLinks.map((button: any) => {
                return (
                  <ButtonLink key={button.type} data={button}></ButtonLink>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
