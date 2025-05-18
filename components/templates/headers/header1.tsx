import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { widthForImage, heightForImage } from "@/lib/builtjs-utils";
import ModeToggleBtn from "@/components/shared/mode-toggle-btn";

export default function Header1({ content }: any) {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  if (!content) return <></>;
  let { collections = [], global = {} } = { ...content };
  const collectionNames = {
    PRIMARY_MENU_ITEMS: "primaryMenuItem",
  };
  let menuItems;
  if (collections && collections[collectionNames.PRIMARY_MENU_ITEMS]) {
    menuItems = collections[collectionNames.PRIMARY_MENU_ITEMS];
  }
  return (
    <header id="header1" className="template">
      <section className="p-4 border-b border-gray-300 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto">
          <nav className="flex flex-wrap items-center">
            <Link className="flex items-center pr-10 mr-auto" href="/">
              <span className="relative w-10">
                <Image
                  src={global?.logo.url}
                  width={widthForImage(global?.logo)}
                  height={heightForImage(global?.logo)}
                  style={{ objectFit: "cover" }}
                  alt="logo"
                />
              </span>
              <span className="ml-3 text-xl font-bold text-black uppercase dark:text-white">
                {global.name}
              </span>
            </Link>
            <ul
              className={
                "flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2 order-1 md:order-none w-full md:w-auto md:flex mr-4" +
                (navbarOpen ? " nav-items-open" : " nav-items-closed")
              }
            >
              {menuItems &&
                menuItems.map((menuItem: any) => {
                  return (
                    <li
                      key={menuItem.label}
                      className={
                        `rounded ${router.pathname == menuItem.url ? "bg-gray-300 dark:bg-white" : ""}`
                      }
                    >
                      <Link
                        className={`flex justify-center w-full p-3 text-gray-600 transition duration-200 ease-in-out rounded-sm hover:text-gray-900 md:w-auto ${router.pathname == menuItem.url ? `dark:text-gray-900 dark:text-black`: `dark:text-gray-200 dark:hover:text-white`}`}
                        href={menuItem.url}
                      >
                        {menuItem.label}
                      </Link>
                    </li>
                  );
                })}
            </ul>

            <ModeToggleBtn />

            <button
              className="ml-4 button md:hidden hover:cursor-pointer"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className="relative w-12 h-12 transition-colors duration-200 ease-in-out rounded-sm bg-accent hover:bg-accent-hover">
                <svg
                  className={
                    "p-3 w-12 absolute top-0 left-0 transition-opacity duration-200 ease-in-out" +
                    (navbarOpen ? " opacity-0" : " opacity-100")
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="100%"
                  width="100%"
                  viewBox="0 0 24 16"
                >
                  <g stroke="#fff" strokeLinecap="round" strokeWidth="2">
                    <path d="m1 1h22" />
                    <path d="m1 7.67017h22" />
                    <path d="m1 14.3402h22" />
                  </g>
                </svg>
                <svg
                  className={
                    "py-3 pl-4 pr-2 w-12 absolute top-0 left-0 transition-opacity duration-200 ease-in-out" +
                    (navbarOpen ? " opacity-100" : " opacity-0")
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="100%"
                  width="100%"
                  viewBox="0 0 24 16"
                >
                  <path
                    d="M14.34 1L1 14.34m13.34 0L1 1l13.34 13.34z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </nav>
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 767px) {
          .nav-items-closed {
            opacity: 0.001;
            max-height: 0px;
            overflow: hidden;
            transition: max-height 1s, opacity 0.5s;
          }

          .nav-items-open {
            opacity: 1;
            max-height: 999px;
            transition: max-height 1s, opacity 0.75s 0.25s;
          }
        }
      `}</style>
    </header>
  );
}