import Logo from "../png/mainLogo.png";

export default function LogoAsset({ width }) {
  return (
    <div>
      <img className={`${width}`} src={Logo} alt="메인로고" />
    </div>
  );
}
