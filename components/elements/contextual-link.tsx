import Link from "next/link";
import Image from "next/image";
import { urlForImage, widthForImage, heightForImage, entrySlug } from "builtjs-utils";

export default function ContextualLink({ data }:any) {
  if (!data) return <></>;
  return (
    <div key={data.url} className="flex items-start">
      <Image
          height={heightForImage(data?.icon)}
          width={widthForImage(data?.icon)}
          src={urlForImage(data?.icon)}
          alt={entrySlug(data)}
        />
      <div className="ml-4">
        <p>{data.text}</p>
        <Link className="dark:text-gray-400" href={data.url}>
          {data.label}
        </Link>
      </div>
    </div>
  );
}
