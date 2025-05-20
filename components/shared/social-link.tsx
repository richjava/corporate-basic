/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import { widthForImage, heightForImage, entrySlug } from "@/lib/builtjs-utils";

export default function SocialLink({ data }:any) {
  if (!data) return <></>;
  return (
    <Link key={data.url} href={data.url}>
        <Image
          height={heightForImage(data?.icon)}
          width={widthForImage(data?.icon)}
          src={data?.icon.url}
          alt={entrySlug(data)}
        />
    </Link>
  );
}
