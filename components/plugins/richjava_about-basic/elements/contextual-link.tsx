import Link from "next/link";
import Image from "next/image";
import { widthForImage, heightForImage, entrySlug } from "@/lib/builtjs-utils";

export default function ContextualLink({ data }:any) {
  if (!data) return <></>;
  return (
    <div key={data.url} className="flex items-start">
      <Image
          height={heightForImage(data?.icon)}
          width={widthForImage(data?.icon)}
          src={data?.icon.url}
          alt={data.text}
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
