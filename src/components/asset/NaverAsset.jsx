import Naver from "../png/naver.png";
export default function NaverAsset() {
  return (
    <div>
      <img
        src={Naver}
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
