/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonLink } from "@/components/elements";

export default function Banner4({ content }: any) {
  if (!content) return <></>;
  const { data = null } = { ...content };
  return (
    <section id="banner-4" className="template">
      <div className="max-w-screen-lg mx-auto">
        <div className="px-4 py-20 text-center bg-primary rounded-md dark:bg-gray-700">
          <h2 className="heading-xl">{data.heading}</h2>
          <p className="max-w-xl mx-auto mb-12">{data.blurb}</p>
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
