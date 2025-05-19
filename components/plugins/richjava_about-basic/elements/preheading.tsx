/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Preheading({ data }:any) {
  if (!data) return <></>;
  return (
    <span id="preheading" className={`preheading ${data.type} ${data.alignment}`}>
      {data.text}
    </span>
  );
}
