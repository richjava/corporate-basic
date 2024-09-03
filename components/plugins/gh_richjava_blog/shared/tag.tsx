export default function Tag({ data }:any) {
  if (!data) return <></>;
  return (
    <div className="px-2 py-1 text-center text-white no-underline transition-colors text-label-xs bg-accent dark:bg-gray-300 rounded-xl dark:hover:bg-gray-200 hover:bg-gray-600 dark:text-gray-900" key={data.name}>
      {data.name}
    </div>
  );
}
