/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Tag({ data }:any) {
  if (!data) return <></>;
  return (
    <div className="px-2 py-1 text-center no-underline transition-colors text-label-xs bg-gray-200 dark:bg-gray-300 rounded-xl dark:hover:bg-gray-200 hover:bg-gray-600 text-gray-800" key={data.name}>
      {data.name}
    </div>
  );
}
