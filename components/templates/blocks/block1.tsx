import { ButtonLink, Preheading } from "components/elements";

export default function Block1({ content }:any) {
  if (!content) return <></>;
  let { data=null } = {...content};
  return (
    <section id="block-1" className="template">
      <div className="mx-auto max-w-screen-xl">
        <Preheading data={data.preheading}></Preheading>
        <h2 className="heading-xl max-w-5xl">{data.heading}</h2>
        <p className="max-w-3xl">{data.blurb1}</p>
        <p className="max-w-3xl mb-8">{data.blurb2}</p>
        {data.buttonLinks &&
          data.buttonLinks.map((button:any) => {
            return <ButtonLink key={button.type} data={button}></ButtonLink>;
          })}
      </div>
    </section>
  );
}
