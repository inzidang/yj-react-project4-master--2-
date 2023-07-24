import Insta from "../png/insta.png";

export default function InstaAsset() {
  return (
    <div>
      <img
        src={Insta}
        alt="Facebook Logo"
        className="
        w-6 h-6 
        group-hover:w-10 
        group-hover:h-10 
        transition-all 
        duration-200"
      />
    </div>
  );
}
