import { ButtonLink } from "@/components/elements";

export default function Banner2({ content }:any) {
  if (!content) return <></>;
  let { data=null } = {...content};
  return (
    <section id="banner-2" className="template">
      <div className="px-4 py-20 bg-primary dark:bg-gray-700">
        <div className="mx-auto max-w-screen-lg">
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
