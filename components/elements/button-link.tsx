import Link from "next/link";

export default function ButtonLink({ data }:any) {
  if (!data) return <></>;
  return (
    <Link
      className={`btn btn-${data.type}`}
      key={data.type}
      href={data.url}
    >
      {data.label}
    </Link>
  );
}
