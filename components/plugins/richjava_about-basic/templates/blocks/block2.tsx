/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonLink, Preheading } from "@/components/plugins/richjava_about-basic/elements";

export default function Block2({ content }: any) {
  if (!content) return <></>;
  const { data = null } = { ...content };
  return (
    <section id="block-2" className="template">
      <div className="max-w-screen-xl mx-auto text-center">
        <Preheading data={data.preheading}></Preheading>
        <h2 className="heading-xl max-w-5xl mx-auto">{data.heading}</h2>
        <p className="max-w-3xl mx-auto">{data.blurb1}</p>
        <p className="max-w-3xl mx-auto mb-8">{data.blurb2}</p>
        {data.buttonLinks &&
          data.buttonLinks.map((button: any) => {
            return (
              <ButtonLink key={button.type} data={button}></ButtonLink>
            );
          })}
      </div>
    </section>
  );
}
