import { ButtonLink } from "@/components/plugins/richjava_about-basic/elements";

export default function Banner3({ content }: any) {
  if (!content) return <></>;
  let { data = null } = { ...content };
  return (
    <section id="banner-3" className="template">
      <div className="px-4 py-20 bg-primary dark:bg-gray-700">
        <div className="mx-auto max-w-screen-lg">
          <div className="items-center grid grid-cols-1 gap-x-6 md:grid-cols-4">
            <div className="col-span-3">
              <h2 className="heading-xl">{data.heading}</h2>
              <p className="max-w-xl mb-12 md:mb-0">
                {data.blurb}
              </p>
            </div>
            <div className="md:text-right">
              {data.buttonLinks &&
                data.buttonLinks.map((button:any) => {
                  return (
                    <ButtonLink
                      key={button.type}
                      data={button}
                    ></ButtonLink>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
