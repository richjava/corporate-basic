/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonLink } from "@/components/plugins/richjava_about-basic/elements";

export default function Banner2({ content }:any) {
  if (!content) return <></>;
  const { data=null } = {...content};
  return (
    <section id="banner-2" className="template">
      <div className="px-4 py-20 bg-primary dark:bg-gray-700">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="heading-xl">{data.heading}</h2>
          <p className="max-w-xl mb-12">{data.blurb}</p>
          {data.buttonLinks &&
            data.buttonLinks.map((button:any) => {
              return <ButtonLink key={button.type} data={button}></ButtonLink>;
            })}
        </div>
      </div>
    </section>
  );
}
