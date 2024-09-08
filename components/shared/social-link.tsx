import Link from "next/link";
import Image from "next/image";
import { urlForImage, widthForImage, heightForImage, entrySlug } from "@/builtjs-utils";

export default function SocialLink({ data }:any) {
  if (!data) return <></>;
  return (
    <Link key={data.url} href={data.url}>
        <Image
          height={heightForImage(data?.icon)}
          width={widthForImage(data?.icon)}
          src={urlForImage(data?.icon)}
          alt={entrySlug(data)}
        />
    </Link>
  );
}
