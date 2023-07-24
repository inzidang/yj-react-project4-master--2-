export default function TitleTwoRow({ main, sub }) {
  return (
    <div className="flex flex-col items-start space-y-4">
      <p className="uppercase text-sm tracking-wider text-neutral-500">{sub}</p>
      <h1 className="text-3xl font-semibold text-neutral-800">{main}</h1>
    </div>
  );
}
