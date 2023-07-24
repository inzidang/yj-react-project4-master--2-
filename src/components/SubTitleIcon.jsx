import HandsAsset from "./asset/HandsAsset";

export default function SubTitleIcon({ title }) {
  return (
    <div className="flex space-x-2 items-center">
      <HandsAsset />
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
}
