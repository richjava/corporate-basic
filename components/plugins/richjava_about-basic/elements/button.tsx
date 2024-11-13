export default function Button({ data }:any) {
  if (!data) return <></>;
  return (
    <div id="form-button" className={`btn btn-${data.type} w-full`}>
      {data.label}
    </div>
  );
}
