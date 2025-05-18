import Image from "next/image";
import { widthForImage, heightForImage } from "@/lib/builtjs-utils";
import { ButtonLink, Preheading } from "@/components/elements";

export default function Cover1({ content }: any) {
  if (!content) return <></>;
  let { data = null } = { ...content };

  return (
    <section id="cover-1" className="p-0 template">
      <div className="mx-auto lg:flex lg:items-center lg:min-h-screen max-w-screen-2xl">
        <div className="grid items-center grid-cols-1 gap-x-28 lg:grid-cols-2">
          <div className="px-0 lg:pr-4 lg:order-last">
            <Image
              src={data?.image.url}
              width={widthForImage(data?.image)}
              height={heightForImage(data?.image)}
              style={{ objectFit: "cover" }}
              alt={data.heading}
            />
          </div>
          <div className="px-4 pt-10 pb-20 lg:py-40">
            <Preheading data={data.preheading}></Preheading>
            <h1 className="display-lg">{data.heading}</h1>
            <p className="my-12">{data.blurb}</p>
            {data.buttonLinks &&
              data.buttonLinks.map((button: any) => {
                return (
                  <span className="mr-6">
                  <ButtonLink key={button.type} data={button}></ButtonLink>
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
