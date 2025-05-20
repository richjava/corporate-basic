/* eslint-disable @typescript-eslint/no-explicit-any */
import SocialLink from "@/components/shared/social-link";

export default function Footer1({ content }: any) {
  if (!content) return <></>;
  const { collections = null } = { ...content };
  let primaryMenuItems = [];
  if (collections && collections["primaryMenuItem"]) {
    primaryMenuItems = collections["primaryMenuItem"];
  }
  let socialLinks = [];
  if (collections && collections["socialLink"]) {
    socialLinks = collections["socialLink"];
  }

  return (
    <footer id="footer1" className="template">
      <div className="px-4 pt-10 pb-4 border-t border-gray-300 dark:border-gray-700">
        <ul className="flex flex-wrap items-center justify-center mb-12">
          {primaryMenuItems.map((menuItem: any, i: number) => (
            <li key={i}>
              <a
                href={menuItem.url}
                className="flex px-3 py-2 text-gray-600 transition duration-200 ease-in-out dark:hover:text-white dark:text-gray-200 hover:text-gray-900"
              >
                {menuItem.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="grid items-center justify-center grid-flow-col mb-12 auto-cols-max gap-x-6">
          {socialLinks.map((socialLink: any, i: number) => {
            return <SocialLink key={i} data={socialLink}></SocialLink>;
          })}
        </div>

        <div className="text-sm text-center text-black dark:text-white ">
          Built with&nbsp;
          <a
            className="hover:underline"
            href="https://builtjs.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Built
          </a>
        </div>
      </div>
    </footer>
  );
}
