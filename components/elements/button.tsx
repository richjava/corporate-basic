/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Button({ data }:any) {
  if (!data) return <></>;
  const isPrimary = data.type === "primary";

  const primaryClasses =
    "bg-gray-200 text-black hover:bg-gray-300 dark:bg-white dark:text-black dark:hover:bg-gray-100";

  const secondaryClasses =
    "bg-white text-black hover:bg-gray-100 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300";

  const baseClasses =
    "font-semibold py-2 px-4 rounded transition-colors duration-200";

  const buttonClass = `${baseClasses} ${
    isPrimary ? primaryClasses : secondaryClasses
  }`;
  return (
    <button className={buttonClass}>
      {data.label}
    </button>
  );
}
